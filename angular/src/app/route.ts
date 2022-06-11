import { Routes } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { GameActivator } from "./game/game.activator";
import { GameComponent } from "./game/game.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"error",component:ErrorComponent},
    {path:"game",component:GameComponent,canActivate:[GameActivator]},
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"**",redirectTo:"/error?code=404",pathMatch:"full"}
  ]