var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp", function(PostApp, App, Backbone, Marionette, $, _) {
  var API;
  PostApp.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "": "add",
      "post": "list",
      "post/add": "add",
      "post/edit/:id": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    list: function() {
      this.setActive();
      return new PostApp.List.Controller;
    },
    add: function() {
      this.setActive(".write");
      return new PostApp.New.Controller;
    },
    edit: function(id, item) {
      this.setActive();
      return new PostApp.Edit.Controller({
        id: id,
        post: item
      });
    },
    setActive: function(type) {
      if (type == null) {
        type = ".posts";
      }
      return $('ul.nav li').removeClass("active").find(type).parent().addClass("active");
    }
  };
  App.vent.on("post:load", function() {
    App.navigate("post");
    return API.list();
  });
  App.vent.on("post:created post:updated", function(item) {
    $("#js-alert").showAlert(Lang.post_success, Lang.post_saved, "alert-success");
    App.navigate("post/edit/" + item.id);
    return API.edit(item.id, item);
  });
  App.vent.on("post:new:clicked post:new", function() {
    App.navigate("/", {
      trigger: false
    });
    return API.add();
  });
  App.vent.on("post:item:clicked", function(item) {
    App.navigate("post/edit/" + item.id);
    return API.edit(item.id, item);
  });
  return App.addInitializer(function() {
    return new PostApp.Router({
      controller: API
    });
  });
});
