var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var user, view;
      user = App.request("new:user:entity");
      this.listenTo(user, "created", function() {
        return App.vent.trigger("account:created", user);
      });
      view = this.getNewView(user);
      return this.show(view);
    };

    Controller.prototype.getNewView = function(user) {
      return new New.User({
        model: user,
        collection: App.request("get:all:users")
      });
    };

    return Controller;

  })(App.Controllers.Base);
});
