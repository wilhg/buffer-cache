var BufferCache = function (encoding) {
  this.obj = {};
  this.encoding = encoding || 'utf-8';
}

BufferCache.prototype.set = function (key, data) {
  var json = JSON.stringify(data);
  if(data)
  this.obj[key] = new Buffer(json, this.encoding);
}

BufferCache.prototype.get = function (key) {
  var buf = this.obj[key];
  if(buf===undefined) return undefined;
  return JSON.parse(buf);
}

BufferCache.prototype.delete = function (key) {
  this.obj[key] = undefined;
}

module.exports = BufferCache;
