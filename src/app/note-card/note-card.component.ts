import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  @Output() deleteEvent = new EventEmitter<String>()
  @Output() updateEvent = new EventEmitter<string>()
  onDelete(id: string) {
    this.deleteEvent.emit(id)
  }
  updateCompleated(id: string) {
    this.updateEvent.emit(id)
  }
}
