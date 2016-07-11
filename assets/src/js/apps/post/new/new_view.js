var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Cupboard.module("PostApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      this.fillJSON($.jStorage.get("post-new"));
      this.$(".publish").text(Lang.post_publish);
      return this.$("#date").attr("placeholder", moment().format("MMM Do, YYYY [9am]"));
    };

    Post.prototype.fillForm = function(contents) {
      this.$("#slug").val(contents.fields.slug);
      this.$("#title").val(contents.fields.title);
      this.editor.codemirror.setValue(contents.content);
      this.$("#publish_date").val(contents.fields.date);
      if (contents.fields.tags.length > 0) {
        return $("#js-tags").val(contents.fields.tags.join());
      }
    };

    return Post;

  })(App.Views.PostView);
});
