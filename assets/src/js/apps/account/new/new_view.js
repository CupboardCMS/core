var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("AccountApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.template = "account/new/templates/form";

    User.prototype.className = "span12";

    User.prototype.events = {
      "click .save": "save"
    };

    User.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    User.prototype.onRender = function() {
      return this.fillJSON();
    };

    User.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = {
        first_name: this.$('#first_name').val(),
        last_name: this.$('#last_name').val(),
        email: this.$('#email').val(),
        password: this.$('#password').val(),
        active: 1
      };
      return this.model.save(data, {
        collection: this.collection
      });
    };

    return User;

  })(App.Views.ItemView);
});
