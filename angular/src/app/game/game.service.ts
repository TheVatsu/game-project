import { Injectable } from "@angular/core";
import { User } from "../common/models";


@Injectable()
export class GameService{
    currentUser : User

    constructor(){
        this.currentUser = null
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

}