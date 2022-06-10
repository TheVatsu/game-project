
module.exports = function(server){
    const io = require('socket.io')(server)

    const chalk = require('chalk')
    const debug = require('debug')('SOCKET')
    
    io.on('connection',client =>{
        debug(chalk.blueBright(`New Connection`))
        client.on('message',(msg)=>{ debug(`Message received : ` + chalk.yellow(msg))})
        client.on('disconnect',()=>{ debug(chalk.red(`Client disconnected`))})
    })
}
