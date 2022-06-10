const express = require('express')
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const debug = require('debug')('SERVER')

const server = express()

const FOLDER = "./angular/dist/angular"
const PORT = process.env.PORT || 3000

server.use(morgan(':date[clf] :method :url : status',{stream : fs.createWriteStream(path.join(__dirname,'log/access.log'),{flag : 'a'})}))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({exetend:false}))
server.use(express.static(FOLDER))
server.get('*',(req,res)=>{
    res.sendFile('index.html',{root:FOLDER})
})
server.listen(PORT,()=>{debug(`Listening on ${chalk.green(PORT)}`)})