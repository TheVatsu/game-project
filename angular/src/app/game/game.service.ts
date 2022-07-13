import { Injectable } from "@angular/core";
import { Game, User } from "../common/models";


@Injectable()
export class GameService{
    currentUser : User
    game : Game

    constructor(){
        this.currentUser = null
        this.game = null
    }

    setGame(game:Game){
        this.game = game
    }

    setUser(player_name:String):void{
        this.currentUser = <User>{
            name:player_name,
            x:0,
            y:0,
            hp:100
        }
    }

    getUser():User{
        return this.currentUser
    }
    getGame():Game{
        return this.game
    }

}