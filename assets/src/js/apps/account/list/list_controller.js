var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var users, view;
      users = App.request("get:all:users");
      view = this.getListView(users);
      this.show(view);
      return this.listenTo(view, "childview:account:delete:clicked", function(child, args) {
        var confirmMsg, model;
        model = args.model;
        confirmMsg = Lang.account_delete_confirm.replace("##first_name##", _.escape(model.get("first_name"))).replace("##last_name##", _.escape(model.get("last_name")));
        if (confirm(confirmMsg)) {
          return model.destroy();
        } else {
          return false;
        }
      });
    };

    Controller.prototype.getListView = function(users) {
      return new List.Accounts({
        collection: users
      });
    };

    return Controller;

  })(App.Controllers.Base);
});
