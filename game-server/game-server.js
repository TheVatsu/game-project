const chalk = require('chalk')
const debug = require('debug')('GAME-SERVER')

module.exports = function(){ 
    let players = []

    this.newPlayer = function (name){
        debug('New Player created : '+ chalk.magenta(name))
        players.push(name)

    }

}


