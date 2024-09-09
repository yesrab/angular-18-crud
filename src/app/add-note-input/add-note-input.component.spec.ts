import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteInputComponent } from './add-note-input.component';

describe('AddNoteInputComponent', () => {
  let component: AddNoteInputComponent;
  let fixture: ComponentFixture<AddNoteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNoteInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
