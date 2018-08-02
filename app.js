console.log('Empezando');
const fs=require('fs');
const os=require('os');
const _ = require('lodash');
const notes=require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Andres'));
var filteredArray=_.uniq(['Andrés',1,'Andrés',1,2,3,4]);
console.log(filteredArray);
// console.log('Result:', notes.add(9,-2));
//var res= notes.addNote();

// var user= os.Llamar funciones:userInfo();
// console.log(user);
//
// fs.appendFile('felicitaciones.txt',` Hola ${user.username} ¿cómo estás?
//
//                ya, tú tienes: ${notes.age}`, function (err){
//   if (err){
//     console.log('No se puede abrir el archivo')
//   }
// });
// console.log('terminando');
