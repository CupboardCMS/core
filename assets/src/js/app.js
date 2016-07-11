
this.Cupboard = (function(Backbone, Marionette) {
  var App;
  App = new Backbone.Marionette.Application();
  App.on("before:start", function(options) {
    App.environment = $('meta[name=env]').attr("content");
    App.csrfToken = $("meta[name='token']").attr('content');
    this.currentUser = App.request("set:current:user", options.user);
    this.allUsers = App.request("set:all:users", options.users);
    this.apiUrl = _.stripTrailingSlash(options.api_url);
    this.adminUrl = _.stripTrailingSlash(options.admin_url);
    return this.blogUrl = _.stripTrailingSlash(options.blog_url);
  });
  App.reqres.setHandler("get:current:user", function() {
    return App.currentUser;
  });
  App.reqres.setHandler("get:all:users", function() {
    return App.allUsers;
  });
  App.reqres.setHandler("get:url:api", function() {
    return App.apiUrl;
  });
  App.reqres.setHandler("get:url:admin", function() {
    return App.adminUrl;
  });
  App.reqres.setHandler("get:url:blog", function() {
    return App.blogUrl;
  });
  App.addRegions({
    headerRegion: "#header-region",
    topnavRegion: "#top-region",
    mainRegion: "#main-region",
    footerRegion: "footer-region"
  });
  App.addInitializer(function() {
    return App.module("HeaderApp").start();
  });
  App.reqres.setHandler("default:region", function() {
    return App.mainRegion;
  });
  App.commands.setHandler("register:instance", function(instance, id) {
    if (App.environment === "dev") {
      return App.register(instance, id);
    }
  });
  App.commands.setHandler("unregister:instance", function(instance, id) {
    if (App.environment === "dev") {
      return App.unregister(instance, id);
    }
  });
  App.on("start", function() {
    return this.startHistory();
  });
  return App;
})(Backbone, Marionette);
