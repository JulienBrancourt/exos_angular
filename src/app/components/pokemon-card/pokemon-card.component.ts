import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../utils/types/pokemon.type";
import {PokedexService} from "../../utils/services/pokedex.service";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
@Input() pokemon!: Pokemon;

@Output() evenement = new EventEmitter();

constructor(protected pokedexService: PokedexService) { }

deletePokemon(pokemon: Pokemon) {
  this.evenement.emit(this.pokemon);
}

  addtoPokedex(pokemon: Pokemon) {
  this.pokedexService.addPokemon(pokemon);
  }

  deleteToPokedex(pokemon: Pokemon) {
  this.pokedexService.deletePokemon(pokemon);
  }
}
