import { Component } from '@angular/core';
import { SortPipe } from '../../utils/pipes/sort.pipe';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SortPipe],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  series = [
    'Breaking Bad',
    'Game of Thrones',
    'Chernobyl',
    'Arcane',
    'Peaky Blinders',
  ];

  order: 'asc' | 'desc' = 'asc';

  suppression(index: number): void {
    this.series.splice(index, 1);
  }

  setOrder(order: 'asc' | 'desc') {
    this.order = order;
  }
}
