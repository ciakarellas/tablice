var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola']; 
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian'

var allNames = mensNames.concat(womensNames);

if (allNames.indexOf(newName) == -1){
  allNames.push(newName);
};

console.log(allNames)