const fs = require('fs')

const data = fs.readFileSync('my-file.txt')

console.log(data.toString());