var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      this.fillJSON();
      this._setDate();
      this._setActive();
      return this._setTags();
    };

    Post.prototype._setDate = function() {
      var date, publishDate;
      publishDate = this.model.get("publish_date");
      if (_.isObject(publishDate)) {
        publishDate = publishDate.date;
      }
      date = moment(publishDate);
      this.$(".js-date").val(date.format("MMM Do YYYY, hh:mma"));
      return this.$("#publish_date").val(date.format("MMM Do, YYYY h:mm A"));
    };

    Post.prototype._setActive = function() {
      if (parseInt(this.model.get("active")) === 1) {
        this.$(".publish").text(Lang.post_publish);
        return this.$('input:radio[name="active"]').filter('[value="1"]').attr('checked', true);
      } else {
        this.$(".publish").text(Lang.post_save);
        return this.$('input:radio[name="active"]').filter('[value="0"]').attr('checked', true);
      }
    };

    Post.prototype._setTags = function() {
      var tags;
      tags = _.pluck(this.model.get("tags"), "tag");
      return this.$("#js-tags").val(tags);
    };

    return Post;

  })(App.Views.PostView);
});
