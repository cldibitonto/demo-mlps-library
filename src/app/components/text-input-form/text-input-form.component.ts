import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-text-input-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, NgIf],
  templateUrl: './text-input-form.component.html',
  styleUrl: './text-input-form.component.scss'
})
export class TextInputFormComponent {
  form!: FormGroup;
  options: { id: number; desc: string }[] = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      fcn: new FormControl('', [Validators.required, Validators.pattern(/\S+/)]),
      test: new FormControl(false),
      dd: new FormControl('', Validators.required),
    });

    this.options = [
      { id: 1, desc: 'Opzione 1' },
      { id: 2, desc: 'Opzione 2' },
      { id: 3, desc: 'Opzione 3' },
      { id: 4, desc: 'Opzione 4' },
    ];
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log('Form non valido');
      return;
    }

    console.log('Form Valido', this.form.value);
  }
}
