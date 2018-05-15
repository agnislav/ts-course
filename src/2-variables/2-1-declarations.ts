// DON'T USE VAR
console.log(myVar);
var myVar = 'I love to use var';

// use LET
// console.log(myLet);
let myLet = 'I want to be modern';

// let is block-scoped
if (true) {
    let anotherLet = true;
}
// console.log(anotherLet);

// let in cycle
for (var /*let*/ i = 0; i < 10 ; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// use CONST
const thisValue = 'is not to be changed';
// thisValue = 'I want to change it by I fail';
