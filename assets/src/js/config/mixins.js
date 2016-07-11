
_.mixin({
  stripTrailingSlash: function(url) {
    if (url.slice(-1) === '/') {
      return url.substr(0, url.length - 1);
    } else {
      return url;
    }
  }
});
