var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/user";
    };

    return User;

  })(App.Entities.Model);
  Entities.UsersCollection = (function(_super) {

    __extends(UsersCollection, _super);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = Entities.User;

    UsersCollection.prototype.url = function() {
      return App.request("get:url:api") + "/user";
    };

    return UsersCollection;

  })(App.Entities.Collection);
  API = {
    setCurrentUser: function(currentUser) {
      return new Entities.User(currentUser);
    },
    setAllUsers: function(users) {
      return new Entities.UsersCollection(users);
    },
    getUser: function(id) {
      var user;
      user = new Entities.User({
        id: id
      });
      user.fetch();
      return user;
    },
    getUserEntities: function(cb) {
      var users;
      users = new Entities.UsersCollection;
      return users.fetch({
        success: function() {
          return cb(users);
        }
      });
    },
    newUser: function() {
      return new Entities.User;
    }
  };
  App.reqres.setHandler("set:current:user", function(currentUser) {
    return API.setCurrentUser(currentUser);
  });
  App.reqres.setHandler("set:all:users", function(users) {
    return API.setAllUsers(users);
  });
  App.reqres.setHandler("user:entities", function(cb) {
    return API.getUserEntities(cb);
  });
  App.reqres.setHandler("user:entity", function(id) {
    return API.getUser(id);
  });
  return App.reqres.setHandler("new:user:entity", function() {
    return API.newUser();
  });
});
