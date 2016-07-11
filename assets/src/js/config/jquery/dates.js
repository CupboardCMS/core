
$.fn.formatDates = function() {
  var $el;
  $el = $(this);
  return $el.each(function(index, param) {
    var format, item, originalDate, time;
    item = $(this);
    format = item.data("format");
    originalDate = item.data("date");
    if (typeof format === "undefined") {
      format = "MMM Do YYYY, hh:mma";
    }
    time = isNaN(originalDate) ? moment(originalDate, "YYYY-MM-DD HH:mm:ss") : moment.unix(originalDate);
    return item.text(time.local().format(format));
  });
};
