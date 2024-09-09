import { Component, Input } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note!: Note
  constructor() {
    console.log(this.note)
  }
  logNote() {
    console.log(this.note)
  }
}
