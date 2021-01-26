import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cars } from 'src/model/car.model';
import { CarServiceService } from 'src/service/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car: Cars;
  constructor(
    private route: ActivatedRoute,
    private carService: CarServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let id: number = +data.id;
      this.car = this.carService.getCar(id);
    });
  }
}
