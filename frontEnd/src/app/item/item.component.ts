import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  Propery: any = {
    "Id":1,
    "Type": "House",
    "Price": 1200
  }

  ngOnInit() {
  }

}
