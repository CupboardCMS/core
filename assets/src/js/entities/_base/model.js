var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      this.saveError = __bind(this.saveError, this);

      this.saveSuccess = __bind(this.saveSuccess, this);
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Model.prototype.defaultErrorHandler = function(model, error, test) {
      switch (error.status) {
        case 500:
          return $("#js-alert").showAlert(Lang.error, Lang.error_fivehundred, "alert-error");
        case 401:
          return document.location.href = "" + (App.request("get:url:admin")) + "/logout";
      }
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      this.set({
        _destroy: true
      });
      return Model.__super__.destroy.call(this, options);
    };

    Model.prototype.isDestroyed = function() {
      return this.get("_destroy");
    };

    Model.prototype.save = function(data, options) {
      var isNew;
      if (options == null) {
        options = {};
      }
      isNew = this.isNew();
      _.defaults(options, {
        wait: true,
        success: _.bind(this.saveSuccess, this, isNew, options.collection),
        error: _.bind(this.saveError, this)
      });
      this.unset("_errors");
      return Model.__super__.save.call(this, data, options);
    };

    Model.prototype.saveSuccess = function(isNew, collection) {
      if (isNew) {
        if (collection) {
          collection.add(this);
        }
        if (collection) {
          collection.trigger("model:created", this);
        }
        return this.trigger("created", this);
      } else {
        if (collection == null) {
          collection = this.collection;
        }
        if (collection) {
          collection.trigger("model:updated", this);
        }
        return this.trigger("updated", this);
      }
    };

    Model.prototype.saveError = function(model, xhr, options) {
      if (xhr.status === 400) {
        return this.set({
          _errors: $.parseJSON(xhr.responseText)
        });
      }
    };

    Model.prototype.sync = function(method, model, options) {
      options.headers = _.extend({
        "X-CSRF-Token": App.csrfToken
      }, options.headers);
      return Backbone.sync(method, model, options);
    };

    return Model;

  })(Backbone.Model);
});
