import { CargoType, Driver, Status, Truck, TruckType } from '@myworkspace/api-interface';

export class Trucks {
    static list: Truck[] = [];
}

export class Cargo {
    static list: CargoType[] = [];
}

export class Drivers {
    static list: Driver[] = [];
}

export class TruckStatus {
    static list: Status[] = [];
}

export class TypeTruck {
    static list: TruckType[] = [];
}
