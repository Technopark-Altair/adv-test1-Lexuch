import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarServiceService } from 'src/service/car-service.service';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  { path: 'car', component: CarServiceService },
  { path: 'car/:id', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
