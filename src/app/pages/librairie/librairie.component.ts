import { Component } from '@angular/core';
import { ReadPipe } from '../../utils/pipes/read.pipe';
import { NgClass } from '@angular/common';
import { Book } from '../../utils/types/book.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [ReadPipe, NgClass, FormsModule],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css',
})
export class LibrairieComponent {
  books: Book[] = [
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

  toggleRead(book: Book) {
    book.isRead = !book.isRead;
  }

  bookadd = {
    title: '',
    author: '',
    isRead: false,
  };

  isSubmitted = false;

  get titleError() {
    return this.bookadd.title.length < 1 && this.isSubmitted;
  }

  get authorError() {
    return this.bookadd.author.length < 1 && this.isSubmitted;
  }

  addABook() {
        this.isSubmitted = true;

    if (!this.titleError && !this.authorError) {

      this.books.push(this.bookadd);
    }

  }
}
