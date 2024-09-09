import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { Notes } from '../model/note';
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

  noteTemplate: Notes = {
    title: '',
    description: '',
    isCompleated: false,
    priority: 0
  }
  formSubmitted = false;


  onSubmit() {
    this.formSubmitted = true;
    if (this.form.invalid) {
      console.log("form is invalid")
    } else {
      // Handle valid form submission
      console.log(this.noteTemplate)
    }
  }

}
