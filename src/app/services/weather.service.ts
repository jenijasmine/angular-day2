import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';


const API_KEY ='45805e95a43e0799b2f7db6e8b2a7591';
const URL= 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string){
    const endpoint= `${URL}/weather?q=${city}&appid=${API_KEY}`;
    return this.http.get(endpoint, httpOptions);
  }
}
