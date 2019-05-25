import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'myworkspace-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() item: any;
  @Input() detailInfo: DetailInfo;
  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}

export interface DetailInfo {
  name: string;
  propName: string | number;
}
