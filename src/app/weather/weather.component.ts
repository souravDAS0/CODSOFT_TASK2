import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';

import { Coordinates } from '../shared/models/Coordinates';
import { WeatherData } from '../shared/models/weatherData.interface';
import { GeoCodingData } from '../shared/models/geocodingData.interface';
import { GeoCodingService } from '../shared/services/geo-coding.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  title: string = 'Weathering';
  weatherData!: WeatherData;
  geocodingData!: GeoCodingData[];
  coords: Coordinates = { Lat: 0, Lon: 0 };
  location!: string;

  constructor(
    public weatherService: WeatherService,
    public geocodingService: GeoCodingService
  ) {}

  ngOnInit(): void {
    this.getLatLon('Bagdogra');
    // this.getCurrent();
  }

  getLatLon(location: string) {
    // this.location = location;
    this.geocodingService.getLocation(location).subscribe((data) => {
      this.geocodingData = data;
      console.log(this.geocodingData);
      this.coords = {
        Lat: this.geocodingData[0].lat,
        Lon: this.geocodingData[0].lon,
      };
      this.getData(this.coords);
      // this.location = this.geocodingData[0].name;
    });
  }

  getData(coords: Coordinates) {
    this.weatherService.getWeather(coords).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
