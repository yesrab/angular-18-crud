import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AddNoteInputComponent } from './add-note-input/add-note-input.component';
import { Note } from './model/note';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, AddNoteInputComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-crud';
  NewNote = signal<Note | undefined>(undefined);
  NotesList: Note[] = []
  receiveNote($event: Note) {
    console.log($event)
    this.NewNote.set(structuredClone($event))
  }

  constructor() {
    console.log('constructor ran')
    const existingNotes = JSON.parse(localStorage.getItem('notes') ?? '[]')
    if (existingNotes && existingNotes.length > 0) {
      this.NotesList = existingNotes
    }
    effect(() => {
      console.log('effect runs')
      const newNote = this.NewNote();
      console.log(newNote)
      if (newNote) {
        if (!this.NotesList.some(note => note.id === newNote.id)) {
          this.NotesList.push(newNote);
          localStorage.setItem('notes', JSON.stringify(this.NotesList))
        }
      }
    })
  }


}
