import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './socket/socket-service';
import { routes } from './route';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ErrorComponent } from './error/error.component';
import { GameService } from './game/game.service';
import { GameActivator } from './game/game.activator';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
    CommonModule  
  ],
  providers: [SocketService,GameService,GameActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
