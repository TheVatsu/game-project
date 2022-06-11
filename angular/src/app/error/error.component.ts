import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl : './error.component.html',
    styles:[`
        img{height: 70vh;}
        div div {width:100%;}
        .fixed{top:0;}
        .bg{background-color:rgb(125,125,125,.65);max-width:40%;}
    `]
})
export class ErrorComponent{
    code:number = 403
    message:string = "Acess forbidden"

    constructor(private route : ActivatedRoute){}

    ngOnInit() {
        this.route.queryParams
        .subscribe(params => {
            const code = +params['code']
          if(code === 404){  
            this.code = params['code']
            this.message = "Page not found"
          }else if(params['code'] && code != 403){
              this.message = "Bro stop trying to break my website"
          }
        }
      );
      }
    

}