import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AddNoteInputComponent } from './add-note-input/add-note-input.component';
import { Note } from './model/note';
import { JsonPipe } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, AddNoteInputComponent, JsonPipe, NoteCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-crud';
  NewNote = signal<Note | undefined>(undefined);
  NotesList: Note[] = []

  //recives notes from the event
  receiveNote($event: Note) {
    console.log($event)
    this.NewNote.set(structuredClone($event))
  }


  deleteNote(id: String) {
    console.log("note to be deleted:", id)
    this.NotesList = this.NotesList.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(this.NotesList));
  }

  updateNote(id: string) {
    console.log("note to be updated:", id);
    const note = this.NotesList.find(note => note.id === id);
    if (note) {
      note.isCompleated = !note.isCompleated;
      localStorage.setItem('notes', JSON.stringify(this.NotesList));
    }
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
