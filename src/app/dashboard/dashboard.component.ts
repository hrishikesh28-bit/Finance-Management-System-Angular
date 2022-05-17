import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uscard:number;
  usname:string;
  usvalidity:Date;
  ustype:string;
  stat:string="NOT ACTIVATED";
  total_credit:number;
  credit_used:number;
  remaining_credit:number;
  product_name:string;
  paid:number=15000;
  balance:number=25000;
  amount:number;
  rid:number;
 prodhis:any;
 userdet:any;
 cardet:any;
 diact:string="card-status-dis"
 isdisabled:boolean=true;
 constructor(private dashbardService:MyapiService,private router:Router) { }
 regid:number;

 ngOnInit(): void {
  this.regid=JSON.parse(sessionStorage.getItem("regid"));
        this.dashbardService.getHistoryById(this.regid).subscribe(
          (hist:any)=>{
            console.log(hist);
            this.prodhis=hist;
          }
        )
 
        this.dashbardService.getUserDetailsById(this.regid).subscribe(
          (det:any)=>{
            console.log(det);
            this.userdet=det;
            this.usname=this.userdet.uname;
          }
        )
        this.dashbardService.getCardDetailsById(this.regid).subscribe(
          (cd:any)=>{
            this.cardet=cd;
            console.log(this.cardet)
            this.ustype=this.cardet.cardtype;
            if(this.cardet.cardno!=null){
              this.isdisabled=false;
              this.uscard=this.cardet.cardno;
            this.usvalidity=this.cardet.validity;
           
            this.total_credit=this.cardet.initialbal;
            this.credit_used=this.cardet.initialbal-this.cardet.availbal;
            this.remaining_credit=this.cardet.availbal;
            
            this.stat="CARD ACTIVATED";
            this.diact="card-status";

            }
          }
        )
        

 }


}
