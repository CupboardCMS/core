
$.fn.avatar = function(email, size) {
  if (size == null) {
    size = 28;
  }
  return $(this).attr("src", '//www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + (size * 2));
};
