import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public text: string = "123";
  public width: string | undefined;

  constructor(){
    this.resizeInput();
  }

  resizeInput() {
    this.width = this.text!.length + "ch"
  }
}
