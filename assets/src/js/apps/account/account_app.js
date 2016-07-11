var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp", function(AccountApp, App, Backbone, Marionette, $, _) {
  var API;
  AccountApp.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "accounts": "list",
      "account/new": "new",
      "account/edit/:id": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    list: function() {
      return new AccountApp.List.Controller;
    },
    "new": function() {
      return new AccountApp.New.Controller({
        region: App.mainRegion
      });
    },
    edit: function(id, account) {
      return new AccountApp.Edit.Controller({
        region: App.mainRegion,
        id: id,
        account: account
      });
    }
  };
  App.vent.on("account:clicked", function() {
    App.navigate("/accounts");
    return API.list();
  });
  App.vent.on("account:new:clicked", function() {
    App.navigate("/account/new");
    return API["new"]();
  });
  App.vent.on("account:edit:clicked", function(account) {
    App.navigate("/account/edit/" + account.id);
    return API.edit(account.id, account);
  });
  App.vent.on("account:created account:updated", function() {
    $("#js-alert").showAlert("Success!", "Account was successfully saved.", "alert-success");
    App.navigate("accounts");
    return API.list();
  });
  return App.addInitializer(function() {
    return new AccountApp.Router({
      controller: API
    });
  });
});
