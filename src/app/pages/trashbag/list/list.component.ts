import {Component, OnInit} from '@angular/core';
import {TrashbagService} from "../../../utils/services/trashbag.service";
import {TrashBag} from "../../../utils/types/trash.type";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  trashbags: TrashBag[] = []
  constructor(private trashbagService: TrashbagService) { }

  ngOnInit() {
    this.trashbagService.getAll().subscribe({
      next: tb => this.trashbags = tb
    })
  }

}
