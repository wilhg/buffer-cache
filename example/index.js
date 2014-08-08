var bc = require('../index')();

bc.set('number', 233);
console.log(bc.type('number'));
console.log(bc.get('number'));

bc.set('string', 'I am string');
console.log(bc.type('string'));
console.log("before update:", bc.get('string'));
bc.update('string', 'I am String');
console.log("after update:", bc.get('string'));

bc.set('object', {a:1, b:2});
console.log(bc.type('object'));
console.log(bc.get('object'));

bc.update('object', {b:3, c:4});
console.log(bc.get('object'));

bc.set('array', [{a:1, b:2}, {c:4}]);
console.log(bc.type('array'));
console.log(bc.get('array'));
bc.arrayTrick('array1', function (data) {
  //if (data) data = [];
  data[0]=0;
});
console.log(bc.get('array1'));

bc.delete('object');
console.log(bc.get('object'));
console.log(bc.type('object'));


console.log(bc.get('undefinedKey'));
