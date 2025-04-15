import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  providers: [DynamicDialogRef],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  formInput!: FormGroup;
  userNumber: number = 0;

  constructor(private readonly ref: DynamicDialogRef, private readonly fb: FormBuilder) {}
  
  ngOnInit() {
    this.formInput = this.fb.group({
      inputText: ['', Validators.required]
    });
  }

  showNumber() {
    if (this.formInput.valid) {
      this.userNumber = this.formInput.value.inputText;
    }
  }

  closeModal() {
    this.ref.close();
  }
}
