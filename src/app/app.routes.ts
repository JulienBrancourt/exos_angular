import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'librairie', component: LibrairieComponent },
  {path: 'pokemon', component: PokemonComponent}
];
