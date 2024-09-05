import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Pokemon} from "../../utils/types/pokemon.type";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemon_form = new FormGroup({
    nom: new FormControl(''),
    description: new FormControl(''),
    types: new FormArray([new FormControl('')]),
    liste_attaques: new FormArray([
      new FormGroup({
        nom_attaque: new FormControl(''),
        description_attaque: new FormControl(''),
        degat_attaque: new FormControl(0),
      }),
    ]),
    zone: new FormGroup({
      nom_zone: new FormControl(''),
      region_zone: new FormControl(''),
    }),
  });

  pokemons: Pokemon[] = [];

  constructor() {
    const stored = localStorage.getItem('pokemons');
    if(stored) {
      this.pokemons = JSON.parse(stored)
    }
  }

  addPokemon() {
    console.log(this.pokemon_form.value);
    this.pokemons.push(this.pokemon_form.value as Pokemon);
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    this.pokemon_form.reset();
  }

  addAttaque() {
    (this.pokemon_form.get('liste_attaques') as FormArray).push(
      new FormGroup({
        nom_attaque: new FormControl(''),
        description_attaque: new FormControl(''),
        degat_attaque: new FormControl(''),
      })
    );
  }

  addType() {
    (this.pokemon_form.get('types') as FormArray).push(new FormControl(''));
  }


  supprimerPokemon(pokemon: Pokemon) {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
  }
}
