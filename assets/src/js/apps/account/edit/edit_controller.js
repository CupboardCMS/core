var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var account, id,
        _this = this;
      account = options.account, id = options.id;
      account || (account = App.request("user:entity", id));
      this.listenTo(account, "updated", function() {
        return App.vent.trigger("account:updated", account);
      });
      return App.execute("when:fetched", account, function() {
        var view;
        view = _this.getEditView(account);
        return _this.show(view);
      });
    };

    Controller.prototype.getEditView = function(account) {
      return new Edit.User({
        model: account
      });
    };

    return Controller;

  })(App.Controllers.Base);
});
