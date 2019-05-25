import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';

import { TableConfig } from '../../../core/components/list/list.component';

@Component({
  selector: 'myworkspace-truck-index',
  templateUrl: './truck-index.component.html',
  styleUrls: ['./truck-index.component.scss']
})
export class TruckIndexComponent implements OnInit {
  tableConfig: Array<TableConfig>;
  trucks$: Observable<Truck[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = TABLE_CONFIG;
    this.trucks$ = of([{
      id: 0,
      truckPlate: 'abc',
      cargoTypeId: 0,
      driverId: 0,  
      truckTypeId: 0,
      price: '1000',
      dimensionLong: 0,
      dimensionWidth: 0,
      dimensionHeight: 0,
      parkingAddress: 'Hà Nội',
      year: 2019,
      statusId: 0,
      desription: 'Testing',
      createdDate: ''
    }]);
  }

  detailTruck(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    console.log(r);
    if (r) {
      
    }
    // Call API Delete Truck
  }
  
  editTruck(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }
}

const TABLE_CONFIG: Array<TableConfig> = [
  {
    headerName: 'Truck Plate',
    propName: 'truckPlate'
  },
  {
    headerName: 'Cargo Type',
    propName: 'cargoType'
  },
  {
    headerName: 'Driver',
    propName: 'driver'
  },
  {
    headerName: 'Truck Type',
    propName: 'truckType'
  },
  {
    headerName: 'Price',
    propName: 'price'
  },
  {
    headerName: 'Dimension (L-H-W)',
    propName: 'dimension'
  },
  {
    headerName: 'Parking Address',
    propName: 'parkingAddress'
  },
  {
    headerName: 'Production Year',
    propName: 'year'
  },
  {
    headerName: 'Status',
    propName: 'status'
  },
  {
    headerName: 'Description',
    propName: 'desription'
  },
]
