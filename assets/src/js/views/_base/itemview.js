var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.ItemView = (function(_super) {

    __extends(ItemView, _super);

    function ItemView() {
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.fillJSON = function(data) {
      var _ref, _ref1;
      if (data == null) {
        data = {};
      }
      if ((_ref = this.model) != null ? _ref.isNew() : void 0) {
        return this.$('form').fillJSON(data);
      } else {
        return this.$('form').fillJSON(((_ref1 = this.model) != null ? _ref1.toJSON() : void 0) || data);
      }
    };

    ItemView.prototype.changeErrors = function(model, errors, options) {
      if (_.isEmpty(errors)) {
        return this.removeErrors();
      } else {
        return this.addErrors(errors);
      }
    };

    ItemView.prototype.addErrors = function(errors) {
      var error, name, _results;
      if (errors == null) {
        errors = {};
      }
      $("#js-errors").show().find("span").html("" + Lang.post_errors + " <ul></ul>");
      _results = [];
      for (name in errors) {
        error = errors[name];
        _results.push(this.addError(error));
      }
      return _results;
    };

    ItemView.prototype.addError = function(error) {
      var sm;
      sm = $("<li>").text(error);
      return $("#js-errors span ul").append(sm);
    };

    ItemView.prototype.removeErrors = function() {
      return $("#js-errors").hide();
    };

    return ItemView;

  })(Marionette.ItemView);
});
