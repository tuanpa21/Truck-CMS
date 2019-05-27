import { Validators } from '@angular/forms';

import { FormConfig, INPUT_TYPE } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';
import { Cargo, Drivers, TruckStatus, TypeTruck } from '../../../mock/mock-data';


export const TRUCK_CONFIG: Array<TableConfig> = [
    {
      name: 'Truck Plate',
      headerName: 'Truck Plate',
      propName: 'truckPlate',
    },
    {
      name: 'Cargo Type',
      headerName: 'Cargo Type',
      propName: 'cargoType'
    },
    {
      name: 'Driver',
      headerName: 'Driver',
      propName: 'driver'
    },
    {
      name: 'Truck Type',
      headerName: 'Truck Type',
      propName: 'truckType'
    },
    {
      name: 'Price',
      headerName: 'Price',
      propName: 'price'
    },
    {
      name: 'Dimension (L-H-W)',
      headerName: 'Dimension (L-H-W)',
      propName: 'dimension'
    },
    {
      name: 'Parking Address',
      headerName: 'Parking Address',
      propName: 'parkingAddress'
    },
    {
      name: 'Production Year',
      headerName: 'Production Year',
      propName: 'year'
    },
    {

      name: 'Status',
      headerName: 'Status',
      propName: 'status'
    },
    {
      name: 'Description',
      headerName: 'Description',
      propName: 'desription'
    },
];

export const FORM_TRUCK: FormConfig[] = [
  {
    label: 'Truck Plate',
    controlName: 'truckPlate',
    validator: [Validators.required],
  },
  {
    label: 'Cargo Type',
    controlName: 'cargoType',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: Cargo.list,
    validator: [Validators.required]
  },
  {
    label: 'Driver',
    controlName: 'driver',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: Drivers.list,
    validator: [Validators.required]
  },
  {
    label: 'Truck Type',
    controlName: 'truckType',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: TypeTruck.list
  },
  {
    label: 'Price',
    controlName: 'price',
    validator: [Validators.required]
  },
  {
    label: 'Dimension Long',
    controlName: 'dimensionLong'
  },
  {
    label: 'Dimension Width',
    controlName: 'dimensionWidth'
  },
  {
    label: 'Dimension Height',
    controlName: 'dimensionHeight'
  },
  {
    label: 'Parking Address',
    controlName: 'parkingAddress',
    validator: [Validators.maxLength(500)],
    maxLength: 500
  },
  {
    label: 'Production Year',
    controlName: 'year'
  },
  {

    label: 'Status',
    controlName: 'status',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: TruckStatus.list,
    validator: [Validators.required]
  },
  {
    label: 'Description',
    controlName: 'desription',
    validator: [Validators.maxLength(200)],
    maxLength: 200
  },
];
