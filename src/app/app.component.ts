import { Component } from '@angular/core';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tablet';
  num:number = 1;
  data:any =[];
  Brokendata:any = {};
  correctdata :any = [];
  keylist :any =[];
  constructor(public user: UserService)
  {
    this.user.getData().subscribe(Brokendata=>{    
      console.warn(Brokendata), 
      this.Brokendata = Brokendata;
      this.correctdata = this.Brokendata.data;
      for(var i in this.correctdata [0])
      {
          var sub_key = i ;
          var sub_val =this.correctdata[0][i];
          console.log(sub_key);
          this.keylist.push(sub_key);
      }
      this.num = this.keylist.length;
    })


    
  }
    count(datacorrectdata:any) {

       console.warn(this.correctdata.length) 
       console.warn(this.correctdata[1].keys(this.correctdata))
     }

  
  }
  

