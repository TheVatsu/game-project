import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class SocketService {


  constructor(private socket: Socket) {
  }

  login(name:String):Observable<number>{
    this.socket.emit('newPlayer',name)
    return this.socket.fromEvent('newPlayer').pipe(map((data):number => <number>data));
  }

}