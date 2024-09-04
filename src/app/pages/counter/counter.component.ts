import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  compteur = 0;

  add() {
    this.compteur += 1;
  }

  enleve() {
    this.compteur -= 1;
  }

  isPair() {
    if (this.compteur % 2 === 0) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
