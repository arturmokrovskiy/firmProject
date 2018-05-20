import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  fetchPlanets(numberOfPage) {
    return this.http.get(this.url + '?page=' + numberOfPage);
  }

  getPlanet(id) {
    return this.http.get(this.url + id);
  }
}
