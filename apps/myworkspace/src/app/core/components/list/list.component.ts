import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'myworkspace-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() lists: any[];
  @Input() tableConfig: Array<TableConfig>;
  @Output() edit = new EventEmitter<any>();
  @Output() show = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();

  searchInput = new FormControl();
  sortColumn: string;
  sortDirection: string = 'ASC';

  itemsTrackByFn = (index: number, item: any) => item.id;
  constructor() { }

  ngOnInit() {
    this.sortColumn = this.tableConfig[0].headerName;
  }

  showDetails(item) {
    this.show.emit(item);
  }

  editItem(item) {
    this.edit.emit(item);
  }

  deleteItem(item) {
    this.remove.emit(item);
  }

  onSortColumn(columnName) {}
}

export interface TableConfig {
  name?: string;
  headerName: string;
  propName: string;
}
