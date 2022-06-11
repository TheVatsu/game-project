module.exports = function(server){
    const io = require('socket.io')(server)

    const module_server = require('../game-server/game-server.js')
    const gameServer = new module_server()

    const chalk = require('chalk')
    const debug = require('debug')('SOCKET')
    
    io.on('connection',client =>{
        debug(chalk.blueBright(`New Connection`))
        client.on('newPlayer',(name)=>{
            gameServer.newPlayer(name)
            client.emit('newPlayer',200)
        })
        client.on('getInfo',()=>{
            client.emit('getInfo',gameServer.getInfo())
        })
        client.on('disconnect',()=>{ debug(chalk.red(`Client disconnected`))})
    })
}
