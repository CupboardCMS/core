var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, post,
        _this = this;
      post = options.post, id = options.id;
      post || (post = App.request("post:entity", id));
      this.storage = new Storage({
        id: post.id
      });
      this.listenTo(post, "updated", function() {
        _this.storage.destroy();
        return App.vent.trigger("post:updated", post);
      });
      return App.execute("when:fetched", post, function() {
        var view;
        view = _this.getEditView(post);
        return _this.show(view);
      });
    };

    Controller.prototype.getEditView = function(post) {
      return new Edit.Post({
        model: post,
        storage: this.storage
      });
    };

    return Controller;

  })(App.Controllers.Base);
});
