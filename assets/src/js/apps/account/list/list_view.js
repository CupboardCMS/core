var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.AccountItem = (function(_super) {

    __extends(AccountItem, _super);

    function AccountItem() {
      return AccountItem.__super__.constructor.apply(this, arguments);
    }

    AccountItem.prototype.template = "account/list/templates/item";

    AccountItem.prototype.className = "account";

    AccountItem.prototype.triggers = {
      "click .delete": "account:delete:clicked"
    };

    AccountItem.prototype.events = {
      "click .details": "edit"
    };

    AccountItem.prototype.templateHelpers = function() {
      return {
        canDelete: function() {
          var me;
          me = App.request("get:current:user");
          if (me.id !== this.id) {
            return true;
          } else {
            return false;
          }
        }
      };
    };

    AccountItem.prototype.onShow = function() {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(this.model.get("email"), $avEl.attr("width"));
    };

    AccountItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:edit:clicked", this.model);
    };

    return AccountItem;

  })(App.Views.ItemView);
  return List.Accounts = (function(_super) {

    __extends(Accounts, _super);

    function Accounts() {
      return Accounts.__super__.constructor.apply(this, arguments);
    }

    Accounts.prototype.template = "account/list/templates/grid";

    Accounts.prototype.childView = List.AccountItem;

    Accounts.prototype.childViewContainer = ".holder";

    Accounts.prototype.className = "accounts";

    Accounts.prototype.events = {
      "click .add-new": "new"
    };

    Accounts.prototype["new"] = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:new:clicked");
    };

    return Accounts;

  })(App.Views.CompositeView);
});
