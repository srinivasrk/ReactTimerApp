// var names = ['Srini', 'Julie', 'Jen'];
//
// // names.forEach(function(name){
// //   console.log('foreach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowfunc', name);
// // });
// //
// // names.forEach((name) => console.log('nobraces', name));
//
// // var returnMe = (name)=> name + '!';
// // console.log(returnMe('Srini'));
//
// var person = {
//   "name": "Srini",
//   "greet": function(){
//     names.forEach((name) => {
//       console.log(this.name+ ' says Hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add(a, b){
  return a + b;
}
var addStatement = (a,b) => {
  return a + b;
}

var addNoStmt = (a,b) => a + b;

console.log(add(1,3));
console.log(addStatement(9,0));
console.log(addNoStmt(10,2));
