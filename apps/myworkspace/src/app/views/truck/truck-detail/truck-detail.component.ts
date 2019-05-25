import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable } from 'rxjs';

import { DetailInfo } from '../../../core/components/detail/detail.component';

@Component({
  selector: 'myworkspace-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.scss']
})
export class TruckDetailComponent implements OnInit {
  truckDetail$: Observable<Truck>;
  detailInfo: DetailInfo[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detailInfo = DETAIL_INFO;
  }

  editTruck(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    console.log(r);
    if (r) {
      
    }
    // Call API Delete Truck
  }
}

const DETAIL_INFO: DetailInfo[] = [
  {
    name: '',
    propName: ''
  },
];
