import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ok=false
  @Output() open= new EventEmitter();
  toggle(){
    this.open.emit();
   
  }
}
