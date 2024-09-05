import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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
        degat_attaque: new FormControl(''),
      }),
    ]),
    zone: new FormGroup({
      nom_zone: new FormControl(''),
      region_zone: new FormControl(''),
    }),
  });

  addPokemon() {
    console.log(this.pokemon_form.value);
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
}
