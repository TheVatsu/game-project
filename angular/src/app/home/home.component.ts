import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SocketService } from "../socket/socket-service";

@Component({
    selector:'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    connectionForm : FormGroup

    constructor(private fb:FormBuilder,private router:Router,private socket:SocketService){}

    ngOnInit(): void {
        this.connectionForm = this.fb.group({
            name : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
        })
    }

    login(){
        this.socket.login(this.connectionForm.get('name')?.value).subscribe(res => {
          if(res === 200){
            this.router.navigate(['/game'])
          }
        })
    }
}