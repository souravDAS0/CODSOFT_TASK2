import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Coordinates } from '../models/Coordinates';
import { environment } from '../../../environments/environment';
import { WeatherData } from '../models/weatherData.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getWeather(coords: Coordinates): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.Lat}&lon=${coords.Lon}&appid=${environment.API_KEY}&units=metric`
    );
  }
}
