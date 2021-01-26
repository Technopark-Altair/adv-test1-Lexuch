import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/model/car.model';
import { CarServiceService } from 'src/service/car-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  cars: Array<Cars>;

  constructor(private carsService: CarServiceService) {}

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }
}
