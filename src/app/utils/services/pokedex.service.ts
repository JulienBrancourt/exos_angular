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
      if (!this.pokedex.includes(pokemon)) {
           this.pokedex.push(pokemon)
    localStorage.setItem('pokedex', JSON.stringify(this.pokedex));
      } else {
        alert('le pokemon est déjà dans le pokedex')
      }
  }

  deletePokemon(pokemon: Pokemon) {
    console.log('dans la méthode')
      const index = this.pokedex.findIndex(p => p.nom === pokemon.nom)
    if (index > -1) {
    this.pokedex.splice(index, 1)
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex));
    }  else {
      alert('pas de pokemon trouvé')
    }
  }
}
