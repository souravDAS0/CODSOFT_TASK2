import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/shared/models/weatherData.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() weatherData!: WeatherData;
}
