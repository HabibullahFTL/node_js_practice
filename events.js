const EventEmitter = require('events')


class Name extends EventEmitter{
    viewData(){
        this.on('doSomething', ({ first, last }) => {
            console.log("Did something &" + first + last);
        })
    }
}


module.exports = Name;