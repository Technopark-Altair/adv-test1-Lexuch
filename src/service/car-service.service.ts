import { Injectable } from '@angular/core';
import { Cars } from 'src/model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Array<Cars> = [
    {
      id: 0,
      brandName: 'LADA',
      modelName: '2007',
      priceInRub: 250000,
    },
    {
      id: 1,
      brandName: 'Porshe',
      modelName: 'Cayen 2003',
      priceInRub: 8000000,
    },
    {
      id: 2,
      brandName: 'Honda',
      modelName: 'Accord',
      priceInRub: 1500000,
    },
  ];
  constructor() {}

  getCars() {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars.find((el) => el.id === id);
  }
}
