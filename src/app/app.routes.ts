import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import {PokedexComponent} from "./pages/pokedex/pokedex.component";
// import {OpenCloseComponent} from "./open-close/open-close.component";

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'librairie', component: LibrairieComponent },
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokedex', component: PokedexComponent},
  // {path: 'openclose', component: OpenCloseComponent},
];
