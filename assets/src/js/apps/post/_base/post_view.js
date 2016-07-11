var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.PostView = (function(_super) {

    __extends(PostView, _super);

    function PostView() {
      return PostView.__super__.constructor.apply(this, arguments);
    }

    PostView.prototype.template = "post/_base/templates/form";

    PostView.prototype.className = "col-md-12";

    PostView.prototype.initialize = function(opts) {
      var _this = this;
      App.vent.on("post:new:seed", function(contents) {
        return _this.fillForm(contents);
      });
      this.tagsShown = false;
      return this.storage = opts.storage;
    };

    PostView.prototype.events = {
      "click .publish": "save",
      "click .js-toggle": "toggleDetails",
      "click .fa-tags": "toggleTags",
      "click .fa-user": "showUsers",
      "click .js-status": "changeBtn",
      "keyup #title": "localStorage",
      "change #js-user": "localStorage"
    };

    PostView.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    PostView.prototype.templateHelpers = {
      submitBtnText: function() {
        if ((this.active != null) || this.active === "1") {
          return Lang.post_publish;
        } else {
          return Lang.post_save;
        }
      },
      previewUrl: function() {
        var id;
        id = this.id ? this.id : "new";
        return "" + (App.request("get:url:blog")) + "/post/preview/" + id;
      }
    };

    PostView.prototype.onShow = function() {
      var _this = this;
      this._triggerActive();
      if (this.model.isNew()) {
        this.$('.js-toggle').trigger("click");
        $('#title').slugIt({
          output: "#slug"
        });
      } else {
        this.$("#active").val(this.model.get("active"));
        this.$("#" + (this.model.get("type"))).prop('checked', true).parent().addClass("active");
        this.$("#content").val(this.model.get("content"));
      }
      this.setUpEditor();
      this.setupUsers();
      this.setupFilm();
      this.localStorage();
      this.removeErrors();
      App.request("tag:entities", function(tags) {
        return _this.setUpTags(tags);
      });
      return App.vent.trigger("setup:dropzone", "#dropzone-attachment", this.model.get("image"));
    };

    PostView.prototype._triggerActive = function() {
      if (this.model.isNew()) {
        return this;
      }
      if (this.model.get("active")) {
        return this.$(".js-active[value=1]").trigger("click");
      } else {
        return $(".js-active[value=0]").trigger("click");
      }
    };

    PostView.prototype.setUpEditor = function() {
      var toolbar,
        _this = this;
      toolbar = [
        'bold', 'italic', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'code', {
          name: 'film',
          className: 'fa fa-film'
        }, '|', 'undo', 'redo', '|', 'preview'
      ];
      this.editor = new SimpleMDE({
        element: document.getElementById("content"),
        toolbar: toolbar
      });
      this.imageUpload(this.editor);
      return this.editor.codemirror.on("change", function(cm, change) {
        return _this.localStorage();
      });
    };

    PostView.prototype.localStorage = function() {
      return this.storage.put({
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('input[type=radio]:checked').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        user_id: this.$("#js-user").val(),
        publish_date: this.$("#publish_date").val()
      });
    };

    PostView.prototype.setupUsers = function() {
      var $userSelect, stored, user, users;
      $userSelect = this.$("#js-user");
      users = App.request("get:all:users");
      users.each(function(item) {
        return $userSelect.append($("<option></option>").val(item.id).html(item.get("first_name") + " " + item.get("last_name")));
      });
      if (this.model.isNew()) {
        user = App.request("get:current:user");
        stored = this.storage.get();
        if (stored != null ? stored.user_id : void 0) {
          return $userSelect.val(stored.user_id);
        } else {
          return $userSelect.val(user.id);
        }
      } else {
        return $userSelect.val(this.model.get("user_id"));
      }
    };

    PostView.prototype.setUpTags = function(tags) {
      return this.$("#js-tags").selectize({
        persist: true,
        delimiter: ',',
        maxItems: null,
        options: this.generateTagOptions(tags),
        render: {
          item: function(item) {
            return "<div><i class='fa fa-tag'></i> " + item.text + "</div>";
          },
          option: function(item) {
            return "<div><i class='fa fa-tag'></i> " + item.text + "</div>";
          }
        },
        create: function(input) {
          return {
            value: input,
            text: input
          };
        }
      });
    };

    PostView.prototype.generateTagOptions = function(tags) {
      var opts, tag;
      opts = (function() {
        var _i, _len, _ref, _results;
        _ref = tags.pluck("tag");
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (tag !== "") {
            _results.push({
              value: tag,
              text: tag
            });
          }
        }
        return _results;
      })();
      return this.customTags(opts);
    };

    PostView.prototype.customTags = function(opts) {
      var tag, val, _i, _len, _ref;
      val = $("#js-tags").val();
      if (val !== "") {
        _ref = val.split(",");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tag = _ref[_i];
          if (tag !== "") {
            opts.push({
              value: tag,
              text: tag
            });
          }
        }
      }
      return opts;
    };

    PostView.prototype.toggleTags = function(e) {
      if (this.tagsShown) {
        this.$('.editor-toolbar a, .editor-toolbar i').show();
        this.$(".tags-bar").hide();
      } else {
        this.$('.editor-toolbar a, .editor-toolbar i').hide();
        this.$('.fa-tags').show();
        this.$(".tags-bar").show();
        this.$("js-tags").focus();
      }
      return this.tagsShown = !this.tagsShown;
    };

    PostView.prototype.setupFilm = function() {
      var _this = this;
      return this.$(".fa-film").qtip({
        show: {
          event: "click"
        },
        content: {
          text: $("#film-form").html()
        },
        position: {
          at: "right center",
          my: "left center",
          viewport: $(window),
          effect: false
        },
        events: {
          render: function(event, api) {
            return $(".js-submitfilm").click(function(e) {
              var filmInput, filmUrl;
              e.preventDefault();
              filmInput = $(e.currentTarget).parent().find('input');
              filmUrl = filmInput.val();
              _this.attachFilm(filmUrl);
              filmInput.val('');
              return $('.fa-film').qtip("hide");
            });
          }
        },
        hide: "unfocus"
      });
    };

    PostView.prototype.attachFilm = function(filmUrl) {
      if (filmUrl.match(/youtube.com/g)) {
        return this.bulidYoutubeIframe(filmUrl);
      } else if (filmUrl.match(/vimeo.com/g)) {
        return this.buildVimeoIframe(filmUrl);
      } else {

      }
    };

    PostView.prototype.bulidYoutubeIframe = function(filmUrl) {
      var filmIframe;
      filmUrl = filmUrl.replace(/https?:\/\//, '//');
      filmUrl = filmUrl.replace(/watch\?v=/, 'embed/');
      filmIframe = '<iframe width="560" height="315" src="' + filmUrl + '" frameborder="0" allowfullscreen></iframe>';
      return this.insert(filmIframe);
    };

    PostView.prototype.buildVimeoIframe = function(originalFilmUrl) {
      var filmIframe, filmUrl;
      filmUrl = originalFilmUrl.replace(/https?:\/\/vimeo.com\//, '//player.vimeo.com/video/');
      filmIframe = '<iframe src="' + filmUrl + '?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      return this.insert(filmIframe);
    };

    PostView.prototype.insert = function(string) {
      return this.editor.codemirror.replaceSelection(string);
    };

    PostView.prototype.save = function(e) {
      e.preventDefault();
      return this.processFormSubmit({
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('#active').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        user_id: this.$("#js-user").val(),
        publish_date: this.$("#publish_date").val()
      });
    };

    PostView.prototype.processFormSubmit = function(data) {
      this.storage.destroy();
      return this.model.save(data, {
        collection: this.collection
      });
    };

    PostView.prototype.removeErrors = function($toggle) {
      this.$toggle = $toggle;
      return $('[data-hide]').on('click', function() {
        return $('.' + $(this).attr('data-hide')).hide();
      });
    };

    PostView.prototype.collapse = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "up").addClass("glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
      return this.$(".details").hide();
    };

    PostView.prototype.expand = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "down").addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-right");
      return this.$(".details").show();
    };

    PostView.prototype.toggleDetails = function(e) {
      this.$toggle = $(e.currentTarget);
      if (this.$toggle.data("dir") === "up") {
        return this.expand(this.$toggle);
      } else {
        return this.collapse(this.$toggle);
      }
    };

    PostView.prototype.changeBtn = function(e) {
      e.preventDefault();
      this.localStorage();
      if ($(e.currentTarget).data('action') === "publish") {
        this.$(".publish").text(Lang.post_publish);
        return this.$(".js-active").val(1);
      } else {
        this.$(".publish").text(Lang.post_save);
        return this.$(".js-active").val(0);
      }
    };

    PostView.prototype.imageUpload = function(editor) {
      var options;
      options = {
        uploadUrl: App.request("get:url:api") + "/dropzone/image",
        allowedTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"],
        progressText: "![Uploading file...]()",
        urlText: "![file]({filename})",
        errorText: "Error uploading file"
      };
      return inlineAttachment.editors.codemirror4.attach(editor.codemirror, options);
    };

    return PostView;

  })(App.Views.ItemView);
});
