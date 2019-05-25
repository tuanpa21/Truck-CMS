export interface Message {
  message: string;
}

export interface Truck {
  id: number;
  truckPlate: string;
  cargoTypeId: number;
  driverId: number;
  truckTypeId: number;
  price: number | string;
  dimensionLong: number;
  dimensionWidth: number;
  dimensionHeight: number;
  parkingAddress: string;
  year: number;
  statusId: number;
  desription: string;
  createdDate: string;
}

export interface CargoType {
  id: number;
  name: string;
  createdDate: string;
}

export interface Driver {
  id: number;
  name: string;
  createDate: string;
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
