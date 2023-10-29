import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'portfolio';
  constructor(){}
  ngOnInit(){}
  openn=false;
  
  sideBarToggler(){
    this.openn = !this.openn;
    console.log(this.openn);
  }
}
