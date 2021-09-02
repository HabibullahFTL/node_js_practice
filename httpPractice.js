const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write("Hello")
        res.end()
    }else if (req.url === '/about') {
        res.write("this is about")
        res.end()
    }
})



server.listen(3000,()=>{console.log("listening");})