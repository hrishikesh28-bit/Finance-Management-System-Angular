import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard';
import { MyapiService } from '../myapi.service';
import { Product } from '../product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private userservice: MyapiService,private router:Router) {}
  result: any;
  cards: Array<Emicard>;
  prod:any;
  ngOnInit(): void {
    this.userservice.serachProductById(1).subscribe(
      (data)=>{
        this.prod=data as Product;
      },
      )
    this.userservice.getAllEmiCard().subscribe((data) => {
      this.result = data;
      this.cards = data as Emicard[];
    });
  }


}
