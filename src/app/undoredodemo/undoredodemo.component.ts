import { Component } from '@angular/core';
import { UndoredoComponent } from "../undoredo/undoredo.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-undoredodemo',
  standalone: true,
  imports: [UndoredoComponent, ReactiveFormsModule],
  templateUrl: './undoredodemo.component.html',
  styleUrl: './undoredodemo.component.css'
})
export class UndoredodemoComponent {

  form: FormGroup;
  history: any[] = [];
  historyIndex = -1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      add1: [''],
      add2: ['']
    });

  }

  handleAddChange(event: any) {
    console.log(event.target.value);
  }
}
