import { Component, Input } from '@angular/core';
import { GeoCodingData } from 'src/app/shared/models/geocodingData.interface';
import { WeatherData } from 'src/app/shared/models/weatherData.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() weatherData!: WeatherData;
  @Input() geocodingData!: GeoCodingData[];
}
