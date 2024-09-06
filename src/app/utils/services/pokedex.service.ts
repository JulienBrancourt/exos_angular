import { Injectable } from '@angular/core';
import { Pokemon } from "../types/pokemon.type";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

    pokedex: Pokemon[] = []

  constructor() {
      const stored = localStorage.getItem('pokedex');
      if (stored) {
        this.pokedex = JSON.parse(stored)
      }
  }

  addPokemon(pokemon: Pokemon) {
           this.pokedex.push(pokemon)
    localStorage.setItem('pokedex', JSON.stringify(this.pokedex));
  }

  deletePokemon(pokemon: Pokemon) {
      this.pokedex = this.pokedex.filter(p => p !== pokemon);
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex));
  }
}
