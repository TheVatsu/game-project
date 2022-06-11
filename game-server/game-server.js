const chalk = require('chalk')
const debug = require('debug')('GAME-SERVER')

module.exports = function(){ 

    let game = {
        width:1000,
        height:1000,
        players : []
    }

    this.getInfo = function (){
        debug('Info send')
        return game
    }
    this.newPlayer = function (name){
        debug('New Player created : '+ chalk.magenta(name))
        game.players.push(name)

    }

}


