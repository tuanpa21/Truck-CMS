import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'myworkspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {

  }
}
