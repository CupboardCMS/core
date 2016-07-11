var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.PostItem = (function(_super) {

    __extends(PostItem, _super);

    function PostItem() {
      return PostItem.__super__.constructor.apply(this, arguments);
    }

    PostItem.prototype.template = "post/list/templates/item";

    PostItem.prototype.tagName = "tr";

    PostItem.prototype.attributes = function() {
      if (String(this.model.get("active")) === "1" && this.model.get("publish_date") > moment().format('YYYY-MM-DD HH:mm:ss')) {
        return {
          "class": "post-item scheduled post-" + this.model.id
        };
      } else if (String(this.model.get("active")) === "1") {
        return {
          "class": "post-item published post-" + this.model.id
        };
      } else {
        return {
          "class": "post-item draft post-" + this.model.id
        };
      }
    };

    PostItem.prototype.triggers = {
      "click .delete": "post:delete:clicked"
    };

    PostItem.prototype.events = {
      "click .details": "edit",
      "click .preview": "preview"
    };

    PostItem.prototype.onShow = function() {
      var $avEl, allUsers, user;
      allUsers = App.request("get:all:users");
      $avEl = this.$(".avatar");
      if (allUsers.length === 1) {
        $avEl.hide();
      } else {
        user = this.model.get("user");
        $avEl.avatar(user.email, $avEl.attr("width"));
      }
      return this.$('.js-format-date').formatDates();
    };

    PostItem.prototype.templateHelpers = {
      status: function() {
        if (parseInt(this.active) === 1 && this.publish_date > moment().format('YYYY-MM-DD HH:mm:ss')) {
          return Lang.post_scheduled;
        } else if (parseInt(this.active) === 1) {
          return Lang.post_active;
        } else {
          return Lang.post_draft;
        }
      }
    };

    PostItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:item:clicked", this.model);
    };

    PostItem.prototype.preview = function(e) {
      var storage;
      e.preventDefault();
      storage = new Storage({
        id: this.model.id
      });
      storage.put(this.model.toJSON());
      return window.open("" + (App.request("get:url:blog")) + "/post/preview/" + this.model.id, '_blank');
    };

    return PostItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {

    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = "post/list/templates/empty";

    Empty.prototype.tagName = "tr";

    return Empty;

  })(App.Views.ItemView);
  return List.Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts() {
      return Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.prototype.template = "post/list/templates/grid";

    Posts.prototype.childView = List.PostItem;

    Posts.prototype.emptyView = List.Empty;

    Posts.prototype.childViewContainer = "tbody";

    Posts.prototype.events = {
      "click .js-filter": "filterPosts",
      "keyup #js-filter": "search"
    };

    Posts.prototype.onCompositeCollectionRendered = function() {
      return this.doFilter("draft");
    };

    Posts.prototype.showEmpty = function(type) {
      var quotes;
      if (!this.$("td:visible").length) {
        quotes = ['"The scariest moment is always just before you start." ― Stephen King', '"There is nothing to writing. All you do is sit down at a typewriter and bleed." ― Ernest Hemingway', '"Start writing, no matter what. The water does not flow until the faucet is turned on." ―  Louis L\'Amour', '"All you have to do is write one true sentence. Write the truest sentence that you know." ― Ernest Hemingway', '"Being a writer is a very peculiar sort of a job: it\'s always you versus a blank sheet of paper (or a blank screen) and quite often the blank piece of paper wins." ― Neil Gaiman'];
        this.$("table").hide();
        this.$(".js-quote").text(quotes[_.random(quotes.length - 1)]);
        return this.$(".no-posts").show().find('span').text(type);
      }
    };

    Posts.prototype.hideAll = function() {
      return this.$el.find(".post-item").hide();
    };

    Posts.prototype.filterPosts = function(e) {
      var $item, type;
      e.preventDefault();
      this.$("table").show();
      this.$(".no-posts").hide();
      this.$("tr." + type).show();
      $item = $(e.currentTarget);
      type = $item.data("type");
      this.$(".page-header").find(".active").removeClass("active");
      $item.addClass("active");
      return this.doFilter(type);
    };

    Posts.prototype.doFilter = function(type) {
      this.hideAll();
      this.$("tr." + type).show();
      if (this.$("tr." + type).length === 0) {
        return this.showEmpty(type);
      }
    };

    Posts.prototype.search = function(e) {
      return this.handleFilter();
    };

    Posts.prototype.handleFilter = function() {
      var filter,
        _this = this;
      this.hideAll();
      filter = this.$("#js-filter").val();
      if (filter === "") {
        return this.$el.find(".post-item").show();
      }
      return this.collection.filter(function(post) {
        return _this.isMatch(post, filter);
      });
    };

    Posts.prototype.isMatch = function(post, filter) {
      var foundId, pattern;
      pattern = new RegExp(filter, "gi");
      foundId = pattern.test(post.get("title"));
      if (foundId) {
        return this.$el.find(".post-" + post.id).show();
      }
    };

    return Posts;

  })(App.Views.CompositeView);
});
