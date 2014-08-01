var BufferCache = require('../index');
var bc = new BufferCache();

bc.set('number', 233);
console.log(bc.get('number'));

bc.set('string', 'I am string');
console.log(bc.get('string'));

bc.set('object', {a:1, b:2});
console.log(bc.get('object'));

bc.set('array', [{a:1, b:2}, {c:4}]);
console.log(bc.get('array'));

bc.delete('object');
console.log(bc.get('object'));
