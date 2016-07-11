var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(Backbone, Marionette) {
  return Marionette.Region.Dialog = (function(_super) {

    __extends(Dialog, _super);

    function Dialog() {
      _.extend(this, Backbone.Events);
    }

    Dialog.prototype.onShow = function(view) {
      var options,
        _this = this;
      this.setupBindings(view);
      options = this.getDefaultOptions(_.result(view, "dialog"));
      this.$el.on("hidden", function() {
        return _this.destroyDialog();
      });
      this.$el.on("shown", function() {
        return Snappy.execute("dialog:shown", view);
      });
      return this.$el.modal(options);
    };

    Dialog.prototype.getDefaultOptions = function(options) {
      if (options == null) {
        options = {};
      }
      return _.defaults(options, {
        backdrop: true,
        keyboard: true,
        show: true,
        remote: false,
        shown: null
      });
    };

    Dialog.prototype.setupBindings = function(view) {
      return this.listenTo(view, "dialog:destroy", this.destroyDialog);
    };

    Dialog.prototype.destroyDialog = function() {
      this.stopListening();
      this.destroy();
      return this.$el.modal("hide");
    };

    return Dialog;

  })(Marionette.Region);
})(Backbone, Marionette);
