import { Component, OnInit } from '@angular/core';
import { Game, User } from '../common/models';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  user : User
  game : Game

  constructor(private gameService:GameService) {
      this.user = this.gameService.getUser()
      this.game = this.gameService.getGame()
   }

  ngOnInit(): void {
  }

}
