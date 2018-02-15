import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent implements OnInit {

  @Input() public title: string

  constructor() { }

  ngOnInit() {
  }

}
