import { Component } from '@angular/core';
import { ReadPipe } from '../../utils/pipes/read.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [ReadPipe, NgClass],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css',
})
export class LibrairieComponent {

  books = [
    {
      title: '1984',
      author: 'George Orwell',
      isRead: true,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isRead: false,
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isRead: true,
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      isRead: false,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      isRead: true,
    },
  ];

  read: boolean = false

  setIsRead(read: true | false) {
    this.read = read
  }
//  en paramètre on passe un objet book qui contient une propriété isRead de type boolean
  toggleRead(book: { isRead: boolean; }) {
    book.isRead = !book.isRead;
  }

}
