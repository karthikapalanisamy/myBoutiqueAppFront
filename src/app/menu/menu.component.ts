import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showFlag=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showFlag=!this.showFlag;
  }

}
