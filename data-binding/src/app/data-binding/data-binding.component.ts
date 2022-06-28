import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.com';
  angularCourse: boolean = true;
  imageUrl: string = 'https://placekitten.com/400/200'

  actualValue: string = "";
  savedValue: string = "";

  isMouseOver: boolean = false;

  courseName: string = "AngularCourse";

  getValor() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  clickedButton() {
    alert('clicked button!')
  }

  onKeyUp(event: KeyboardEvent) {
    this.actualValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value: string) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
