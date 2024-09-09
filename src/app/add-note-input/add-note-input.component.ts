import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-note-input',
  standalone: true,
  imports: [],
  templateUrl: './add-note-input.component.html',
  styleUrl: './add-note-input.component.css'
})
export class AddNoteInputComponent {
  title = new FormControl('')
}
