import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {PokedexService} from "../../utils/services/pokedex.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit{

  lengthPokedex: number = 0;

  constructor(private pokedexService: PokedexService) {}

  // ici ngOnInit permet d'effectuer des opérations de config sur le composant une fois qu'il est prêt à être utilisé, comme par exemple récupérer des données à partir d'un service ou d'une API
  ngOnInit() {
    this.pokedexService.pokedex$.subscribe( {
     next: (value) => this.lengthPokedex = value,
    });
  }
}
