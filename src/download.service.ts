import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5089/WeatherForecast/GetWeatherForecast';

  GetWeatherForecast(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
