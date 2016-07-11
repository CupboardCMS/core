var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var post,
        _this = this;
      post = App.request("post:entities");
      return App.execute("when:fetched", post, function() {
        var view;
        view = _this.getListView(post);
        _this.show(view);
        return _this.listenTo(view, "childview:post:delete:clicked", function(child, args) {
          var model;
          model = args.model;
          if (confirm(Lang.post_delete_confirm.replace("##post##", _.escape(model.get("title"))))) {
            return model.destroy();
          } else {
            return false;
          }
        });
      });
    };

    Controller.prototype.getListView = function(post) {
      return new List.Posts({
        collection: post
      });
    };

    return Controller;

  })(App.Controllers.Base);
});
