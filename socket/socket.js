module.exports = function(server){
    const io = require('socket.io')(server)

    const gameServer = require('../game-server/game-server')

    const chalk = require('chalk')
    const debug = require('debug')('SOCKET')
    
    io.on('connection',client =>{
        debug(chalk.blueBright(`New Connection`))
        client.on('newPlayer',(name)=>{gameServer.newPlayer(name)})
        client.on('disconnect',()=>{ debug(chalk.red(`Client disconnected`))})
    })
}
