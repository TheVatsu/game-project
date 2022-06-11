import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { GameService } from "./game.service";


@Injectable()
export class GameActivator implements CanActivate{
    constructor(private router:Router,private game:GameService){}

    canActivate(): boolean  {
        const res = this.game.getUser() != null
        if(!res){
            this.router.navigate(['/error'])
        }
        return res
    }
}