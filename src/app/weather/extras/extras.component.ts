import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/shared/models/weatherData.interface';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss'],
})
export class ExtrasComponent {
  @Input() weatherData!: WeatherData;
}
