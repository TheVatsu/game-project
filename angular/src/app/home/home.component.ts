import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SocketService } from "../socket/socket-service";

@Component({
    selector:'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

    connectionForm : FormGroup

    constructor(private fb:FormBuilder,private socket:SocketService){}

    ngOnInit(): void {
        this.connectionForm = this.fb.group({
            name : ['',Validators.required]
        })
    }

    login(){
        this.socket.login(this.connectionForm.get('name')?.value).subscribe(res => {
          console.log(res)
        })
    }
}