function getType(data) {
  if (data === undefined) {
    return 'undefined'
  } else if (data === null) {
    return 'null'
  } else {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  }
}

exports = module.exports = BufferCache;

function BufferCache(encoding) {
  if(!(this instanceof BufferCache)) return new BufferCache;
  this.obj = {};
  this.encoding = encoding || 'utf-8';
}

BufferCache.prototype.type = function (key) {
  return getType(this.get(key));
}

BufferCache.prototype.set = function (key, data) {
  var json = JSON.stringify(data);
  this.obj[key] = new Buffer(json, this.encoding);
}

BufferCache.prototype.get = function (key) {
  var buf = this.obj[key];
  if(buf === undefined) return undefined;
  return JSON.parse(buf);
}

BufferCache.prototype.update = function (key, input, callback) {
  var data = this.get(key);
  switch (getType(input)) {
    case 'function':
      throw new Error("Do not accept Function type");
      break;
    case 'object':
      for (k in input) {
        var v = input[k];
        if(getType(v) !== "function") data[k] = v;
      }
      this.set(key, data);
      break;
    default:
      this.set(key, input);
  }
}

BufferCache.prototype.modify = function (key, callback) {
  var result = this.get(key);
  callback(result);
  this.set(key, result);
  return result;
}

BufferCache.prototype.delete = function (key) {
  this.obj[key] = undefined;
}
