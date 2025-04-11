import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-text-input-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, NgIf, NgClass],
  templateUrl: './text-input-form.component.html',
  styleUrl: './text-input-form.component.scss'
})
export class TextInputFormComponent {
  form!: FormGroup;
  options: { id: number; desc: string }[] = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      inputTextMandatory: new FormControl('', [Validators.required]),
      inputText: new FormControl(''),
      checkboxMandatory: new FormControl(false, [Validators.required]),
      checkbox: new FormControl(false),
      dropdownMandatory: new FormControl('', [Validators.required]),
      dropdown: new FormControl('')
    });

    this.options = [
      { id: 1, desc: 'Opzione 1' },
      { id: 2, desc: 'Opzione 2' },
      { id: 3, desc: 'Opzione 3' },
      { id: 4, desc: 'Opzione 4' },
    ];
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); 
    }
  }

  resetForm(){
    this.form.reset();
  }
}
