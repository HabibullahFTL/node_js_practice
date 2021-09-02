var ab = require('./app')
var Name = require('./events')

const names = new Name();

names.viewData()

names.emit('doSomething', { first: "This is first text", last: "This is last text" })