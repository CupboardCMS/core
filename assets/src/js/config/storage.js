var Storage;

Storage = (function() {

  function Storage(opts) {
    if (opts == null) {
      opts = {};
    }
    this.key = opts.id || "new";
  }

  Storage.prototype.getKey = function() {
    return "post-" + this.key;
  };

  Storage.prototype.put = function(data, ttl) {
    if (ttl == null) {
      ttl = 30000;
    }
    $.jStorage.set(this.getKey(), data, ttl);
    return $.jStorage.publish(this.getKey(), data);
  };

  Storage.prototype.get = function(default_val) {
    if (default_val == null) {
      default_val = {};
    }
    return $.jStorage.get(this.getKey(), default_val);
  };

  Storage.prototype.destroy = function() {
    return $.jStorage.deleteKey(this.getKey());
  };

  return Storage;

})();
