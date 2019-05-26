import { FormConfig, INPUT_TYPE } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';


export const TRUCK_CONFIG: Array<TableConfig> = [
    {
      name: 'Truck Plate',
      headerName: 'Truck Plate',
      propName: 'truckPlate'
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
    value: '',
  },
  {
    label: 'Cargo Type',
    controlName: 'cargoType',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: []
  },
  {
    label: 'Driver',
    controlName: 'driver',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: []
  },
  {
    label: 'Truck Type',
    controlName: 'truckType',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: []
  },
  {
    label: 'Price',
    controlName: 'price',
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
    controlName: 'parkingAddress'
  },
  {
    label: 'Production Year',
    controlName: 'year'
  },
  {

    label: 'Status',
    controlName: 'status',
    type: INPUT_TYPE.AUTOCOMPLETE,
    options: []
  },
  {
    label: 'Description',
    controlName: 'desription'
  },
];