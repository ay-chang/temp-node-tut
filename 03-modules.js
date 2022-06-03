// CommonJS, every file is module (by default)
// Modueles - Encapsulated Cod (only share minimum)
const names = require('./04-names')
const sayHello = require('./05-util')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHello(names.allen)
sayHello(names.mae)
 