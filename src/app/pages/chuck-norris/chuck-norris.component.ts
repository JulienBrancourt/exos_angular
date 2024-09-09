import {Component, OnInit} from '@angular/core';
import {ChuckNorrisService} from "../../utils/services/chuck-norris.service";

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent implements OnInit {

  fact: string ='';
constructor(private chucknorrisService: ChuckNorrisService) {}

  ngOnInit() {
    this.chucknorrisService.getRandom().subscribe({
      next: (resp) => this.fact = resp.value
    });
  }
}
