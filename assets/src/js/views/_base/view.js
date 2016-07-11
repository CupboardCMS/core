var __slice = [].slice;

this.Cupboard.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  var _remove;
  _remove = Marionette.View.prototype.remove;
  return _.extend(Marionette.View.prototype, {
    remove: function() {
      var args, _ref,
        _this = this;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (App.environment === "dev") {
        console.log("removing", this);
      }
      if ((_ref = this.model) != null ? typeof _ref.isDestroyed === "function" ? _ref.isDestroyed() : void 0 : void 0) {
        return this.$el.fadeOut(400, function() {
          return _remove.apply(_this, args);
        });
      } else {
        return _remove.apply(this, args);
      }
    }
  });
});
