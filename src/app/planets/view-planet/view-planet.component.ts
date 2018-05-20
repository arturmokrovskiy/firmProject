import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlanetsService } from './../../services/planets.service';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styleUrls: ['./view-planet.component.css']
})
export class ViewPlanetComponent implements OnInit {

  planetId: string;
  planet: any = {};

  constructor(public router: Router,
              private route: ActivatedRoute,
              public planetsService: PlanetsService) { }

  ngOnInit() {
    this.planetId = this.route.snapshot.params.id;
    this.planetsService.getPlanet(this.planetId).subscribe(data => {
      this.planet = data;
    });
  }

  goBack() {
    this.router.navigate(['planets']);
  }

}
