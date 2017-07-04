import { Component } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent { 
  isCollapsed: boolean = true;

  toogleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }


}