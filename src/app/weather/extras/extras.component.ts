import { Component, Input, OnChanges } from '@angular/core';
import { WeatherData } from 'src/app/shared/models/weatherData.interface';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss'],
})
export class ExtrasComponent implements OnChanges {
  @Input() weatherData!: WeatherData;
  pressure!: number;

  ngOnChanges() {
    this.pressure = Math.round(this.weatherData?.main?.pressure * 0.75);
  }
}
