import { Component, OnInit } from '@angular/core';
// import { profile } from 'node:console';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
  profiles:any =[];
  eel:any;

  constructor(private service: MyservicesService) { }

  ngOnInit(): void {
    this.service.get_data().subscribe(
      (res)=>{
       for (let i = 0; i < 30; i++) {
         this.eel = res
         this.profiles.push(this.eel[i])
       }      
console.log(this.profiles);

      
        // console.log(Object.keys(res)[0].);

        
        
        // if(res.){

        // }
        // this.profiles res;
        // console.log(this.profiles);

      
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

}
