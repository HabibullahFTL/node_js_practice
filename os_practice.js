const os = require('os');
const { detect } = require('detect-browser');
const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const browser = detect();

const test1 = os.version()
const test2 = os.networkInterfaces

// console.log(test1);

app.get("/", (req, res) => {
    res.send({ browser })
})

// if (browser) {
//     console.log(browser.name);
//     console.log(browser.version);
//     console.log(browser.os);
//   }
// console.log(Object.entries(test1).map(([key,value])=>value)[0][0]);

app.listen(4000)