
$.fn.fillJSON = function(json) {
  var $el, key, val, _results;
  $el = $(this);
  _results = [];
  for (key in json) {
    val = json[key];
    if (key !== "active") {
      _results.push($el.find("[name='" + key + "']").val(val));
    } else {
      _results.push(void 0);
    }
  }
  return _results;
};

$.fn.showAlert = function(title, msg, type) {
  var $el, html;
  $el = $(this);
  html = "<div class='alert alert-block alert-dismissable " + type + "'>    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>    <strong>" + title + "</strong> " + msg + "  </div>";
  return $el.html(html).fadeIn();
};
