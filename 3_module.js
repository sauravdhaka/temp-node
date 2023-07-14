const names = require('./first_Module')
const sayHi = require('./second_Module')
//console.log(names)
 
const alter = require('./alternativ')
console.log(alter)
sayHi(names.pawan)
sayHi(names.rajeev)
sayHi('saurav')