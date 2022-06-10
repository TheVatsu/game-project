const express = require('express')
const http = require('http')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const debug = require('debug')('SERVER')

const server_express = express()


/* var */
const FOLDER = "./angular/dist/angular"
const PORT = process.env.PORT || 3000


/* logging */
server_express.use(morgan(':date[clf] :method :url : status',{stream : fs.createWriteStream(path.join(__dirname,'log/access.log'),{flag : 'a'})}))

/* serve angular */
server_express.use(bodyParser.json())
server_express.use(bodyParser.urlencoded({exetend:false}))
server_express.use(express.static(FOLDER))
server_express.get('*',(req,res)=>{
    res.sendFile('index.html',{root:FOLDER})
})

const server = http.createServer(server_express)
server.listen(PORT,()=>{debug(`Listening on ${chalk.green(PORT)}`)})
require('./socket/socket')(server)