var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Header = (function(_super) {

    __extends(Header, _super);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.template = "header/list/templates/header";

    Header.prototype.tagName = "header";

    Header.prototype.events = {
      "click .write": "newPost",
      "click .accounts": "accounts"
    };

    Header.prototype.onRender = function() {
      return this.generateAvatar(App.request("get:current:user"));
    };

    Header.prototype.templateHelpers = {
      logoutUrl: function() {
        return "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Header.prototype.generateAvatar = function(user) {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(user.get("email"), $avEl.attr("width"));
    };

    Header.prototype.accounts = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:clicked");
    };

    Header.prototype.newPost = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:new:clicked");
    };

    return Header;

  })(App.Views.ItemView);
});
