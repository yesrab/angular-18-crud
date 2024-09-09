import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note, Notes } from '../model/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-note-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-note-input.component.html',
  styleUrl: './add-note-input.component.css'
})
export class AddNoteInputComponent {
  @ViewChild('form') form!: NgForm;
  @Output() noteEvent = new EventEmitter<Note>()

  noteTemplate: Omit<Note, 'id'> = {
    title: '',
    description: '',
    isCompleated: false,
    priority: 0
  };

  formSubmitted = false;
  sendNote(note: Note) {
    this.noteEvent.emit(note)
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.form.invalid) {
      console.log("form is invalid");
    } else {
      const note = new Note(
        this.noteTemplate.title,
        this.noteTemplate.description,
        this.noteTemplate.isCompleated,
        this.noteTemplate.priority
      );
      this.sendNote(note);
      this.form.resetForm();
      this.formSubmitted = false;
    }
  }
}


