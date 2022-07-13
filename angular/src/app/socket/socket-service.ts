import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable, of } from 'rxjs';
import { Game } from '../common/models';
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
        this.getInfo()
      }
    })
    return obs
  }

  getInfo(){
    this.socket.emit('getInfo')
    const obs = this.socket.fromEvent('getInfo').pipe(map((data):Game => <Game>data))
    obs.subscribe(res =>{ this.game.setGame(res)})
  }

}