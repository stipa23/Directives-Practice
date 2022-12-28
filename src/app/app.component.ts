import { Component } from '@angular/core';

@Component({
  
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
export class AppComponent {
  username1 = '';
  showSecret = false;
  log : any [ ] = [ ];
  onToggleDetails(){
  this.showSecret = !this.showSecret;
  this.log.push(this.log.length + 1);
  }
}