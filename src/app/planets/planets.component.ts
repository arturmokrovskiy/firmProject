import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { PlanetsService } from './../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  displayedColumns = ['name', 'orbital_period', 'rotation_period', 'population', 'select'];
  dataSource: MatTableDataSource<any>;
  planets: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public planetsService: PlanetsService, private router: Router) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    let i = 0;
    do {
      i++;
      this.planetsService.fetchPlanets(i).subscribe(data => {
          this.planets = this.planets.concat(data['results']);
          this.dataSource = new MatTableDataSource(this.planets);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
    } while (i < 7);
  }

  onViewPlanet(planet: any) {
    let id = planet.url.match(/\d+/g, '') + '';
    id = id.split(',').join('');
    this.router.navigate(['planets/', id]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
