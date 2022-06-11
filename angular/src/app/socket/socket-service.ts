import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable, of } from 'rxjs';
import { GameService } from '../game/game.service';

@Injectable()
export class SocketService {


  constructor(private socket: Socket,private game:GameService) {
  }

  login(name:String):Observable<number>{
    this.socket.emit('newPlayer',name)
    const obs = this.socket.fromEvent('newPlayer').pipe(map((data):number => <number>data))
    obs.subscribe(res =>{
      if(res == 200){
        this.game.setUser(name)
      }
    })
    return obs
  }

}