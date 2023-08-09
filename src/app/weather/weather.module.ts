import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExtrasComponent } from './extras/extras.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WeatherComponent,
    HeaderComponent,
    MainComponent,
    DetailsComponent,
    ExtrasComponent,
  ],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    CommonModule,
    FormsModule,
  ],
})
export class WeatherModule {}
