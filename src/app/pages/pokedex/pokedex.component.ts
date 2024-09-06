import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../../utils/services/pokedex.service";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";
import {Pokemon} from "../../utils/types/pokemon.type";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    PokemonCardComponent
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[] = []

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedex = this.pokedexService.pokedex
  }

  supprimerduPokedex(pokemon: Pokemon) {
    this.pokedexService.pokedex = this.pokedex.filter(p => p !== pokemon)
    localStorage.setItem('pokedex', JSON.stringify(pokemon))
  }

}
