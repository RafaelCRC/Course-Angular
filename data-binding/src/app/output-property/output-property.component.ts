import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter();

  @ViewChild('inputField') fieldInputValue: ElementRef | any;

  constructor() { }

  increment() {
    this.fieldInputValue.nativeElement.value++;
    this.changedValue.emit({newValue: this.value});
  }

  decrement() {
    this.fieldInputValue.nativeElement.value--;
    this.changedValue.emit({newValue: this.value});
  }

  ngOnInit(): void {
  }

}
