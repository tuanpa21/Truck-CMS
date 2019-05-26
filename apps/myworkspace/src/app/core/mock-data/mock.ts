import { CargoType, Driver, Status, Truck, TruckType } from '@myworkspace/api-interface';

export const MOCK_TRUCK: Truck[] = [{
    id: 1,
    truckPlate: 'abc',
    cargoTypeId: 1,
    driverId: 1,  
    truckTypeId: 1,
    price: '1000',
    dimensionLong: 0,
    dimensionWidth: 0,
    dimensionHeight: 0,
    parkingAddress: 'Hà Nội',
    year: 2019,
    statusId: 1,
    desription: 'Testing',
    createdDate: ''
  }];

export const MOCK_CARGO: CargoType[] = [{
  id: 1,
  name: 'Cargo Type 1',
}];

export const MOCK_DRIVER: Driver[] = [{
  id: 1,
  name: 'Driver 1',
  age: 30,
  email: 'abc@gmail.com'
}];

export const MOCK_STATUS: Status[] = [{
  id: 1,
  name: 'Status 1',
}]

export const MOCK_TYPE: TruckType[] = [{
  id: 1,
  name: 'Truck Type 1',
}];

