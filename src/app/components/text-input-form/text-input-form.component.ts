import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
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
      inputTextMandatory: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      inputText: new FormControl(''),
      checkboxMandatory: new FormControl(false, [Validators.requiredTrue]),
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
  // Quando un controllo è segnato come "toccato", i messaggi di errore di validazione associati a quel controllo vengono visualizzati.

  resetForm(){
    this.form.reset();
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
    
  // control.value è il valore corrente del controllo del form.
  //   || '' assicura che se `control.value` è null o undefined, venga utilizzata una stringa vuota al suo posto.
  //   .trim() rimuove gli spazi bianchi all'inizio e alla fine della stringa.
   
  
    isInvalid(campo: string): boolean {
      return !!(this.form.get(campo)?.invalid && this.form.get(campo)?.touched);
    }
    //per non ripetere il codice nel template
    
}
