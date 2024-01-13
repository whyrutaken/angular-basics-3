import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnPressed = true;
  logs = []
  
  onDisplay() {
    //setTimeout(()=>{this.btnPressed = true;}, 1000)
    this.btnPressed = !this.btnPressed;
    this.logs.push(new Date());
  }


}
