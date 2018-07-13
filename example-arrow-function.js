var names = ['Quang', 'Julia', 'Okuda'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Quang'));

// var person = {
//     name: 'Quang',
//     greet: function () {
//           names.forEach((name) => {
//               console.log(this.name + ' say hi to ' + name);
//         });       
//     }
// };
// person.greet();

// Challenge Area
function add(a, b) {
    return a + b;
}

// addStatement
var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(55, 77));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -5));

// console.log(add(1, 3));
// console.log(add(9, 0));
