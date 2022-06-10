module.exports = function(){
    const chalk = require('chalk')
    const debug = require('debug')('GAME-SERVER')
 
    let players = []

    function newPlayer(name){
        debug('New Player created : '+ chalk.magenta(name))
        players.push(name)

    }

    return {newPlayer}
}


