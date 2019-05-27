export interface Message {
  message: string;
}

export interface Truck {
  id: number;
  truckPlate: string;
  cargoTypeId: number;
  cargoTypeName?: string;
  driverId: number;
  driverName?: string;
  truckTypeId: number;
  truckTypeName?: string;
  price: number | string;
  dimensionLong: number;
  dimensionWidth: number;
  dimensionHeight: number;
  dimension?: string;
  parkingAddress: string;
  year: number;
  statusId: number;
  statusName?: string
  desription: string;
  createdDate?: string;
}

export interface CargoType {
  id: number;
  name: string;
  createdDate?: string;
}

export interface Driver {
  id: number;
  name: string;
  createdDate?: string;
  age: number;
  email: string;
}

export interface TruckType {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  name: string;
}
