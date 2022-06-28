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

  getValor() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
