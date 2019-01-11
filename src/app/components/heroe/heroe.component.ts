import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent implements OnInit {

heroe: Heroe = {};

  constructor(private _activatedRoute: ActivatedRoute,
  private _heroesService: HeroesService) {

    this._activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroe = _heroesService.getHeroe(params['id']);
      // console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
