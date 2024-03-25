import { Component } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrl: './homework4.component.scss'
})
export class Homework4Component {

  content: string = "Hello World";

  showAlert(event: MouseEvent): void {
    alert('I was triggered by an event');
  }
}
