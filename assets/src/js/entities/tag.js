var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Tag = (function(_super) {

    __extends(Tag, _super);

    function Tag() {
      return Tag.__super__.constructor.apply(this, arguments);
    }

    Tag.prototype.urlRoot = function() {
      return App.request("get:url:api") + "/tag";
    };

    return Tag;

  })(App.Entities.Model);
  Entities.TagCollection = (function(_super) {

    __extends(TagCollection, _super);

    function TagCollection() {
      return TagCollection.__super__.constructor.apply(this, arguments);
    }

    TagCollection.prototype.model = Entities.Tag;

    TagCollection.prototype.url = function() {
      return App.request("get:url:api") + "/tag";
    };

    return TagCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function(cb) {
      var tags;
      tags = new Entities.TagCollection;
      tags.fetch({
        reset: true,
        success: function(collection, response, options) {
          if (cb) {
            return cb(tags);
          }
        },
        error: function() {
          throw new Error("Tags not fetched");
        }
      });
      return tags;
    }
  };
  return App.reqres.setHandler("tag:entities", function(cb) {
    return API.getAll(cb);
  });
});
