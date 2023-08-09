import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeoCodingData } from '../models/geocodingData.interface';

@Injectable({
  providedIn: 'root',
})
export class GeoCodingService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getLocation(location: string): Observable<GeoCodingData[]> {
    return this.http.get<GeoCodingData[]>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location},{country_code}&limit=3&appid=${environment.API_KEY}`
    );
  }
}
