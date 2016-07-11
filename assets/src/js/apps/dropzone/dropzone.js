
this.Cupboard.module("DropzoneApp", function(DropzoneApp, App, Backbone, Marionette, $, _) {
  var API;
  API = {
    setupDropzone: function() {
      var myDropzone;
      myDropzone = new Dropzone(document.body, {
        url: App.request("get:url:api") + "/dropzone",
        method: "POST",
        clickable: false
      });
      myDropzone.on("drop", function(file) {
        return App.vent.trigger("post:new");
      });
      myDropzone.on("error", function(file, message, xhr) {
        var msg;
        msg = $.parseJSON(message);
        return $("#js-alert").showAlert("Error!", msg.error.message, "alert-error");
      });
      return myDropzone.on("success", function(file, contents) {
        return App.vent.trigger("post:new:seed", contents);
      });
    }
  };
  return DropzoneApp.on("start", function() {
    return API.setupDropzone();
  });
});
