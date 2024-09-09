import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import {PokedexComponent} from "./pages/pokedex/pokedex.component";
import {TrashbagComponent} from "./pages/trashbag/trashbag.component";
import {ListComponent} from "./pages/trashbag/list/list.component";
import {AddComponent} from "./pages/trashbag/add/add.component";
import {ChuckNorrisComponent} from "./pages/chuck-norris/chuck-norris.component";
// import {OpenCloseComponent} from "./pages/open-close/open-close.component";

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'librairie', component: LibrairieComponent },
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokedex', component: PokedexComponent},
  // {path: 'openclose', component: OpenCloseComponent},
  {path: 'trash', component: TrashbagComponent, children: [
      {path: '', component: ListComponent},
      {path: 'add', component: AddComponent},
    ]},
  {path: 'chuck', component: ChuckNorrisComponent}
];
