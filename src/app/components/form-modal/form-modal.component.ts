import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule, ToastModule],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  formInput!: FormGroup;
  userNumber: number = 0;

  constructor(private readonly ref: DynamicDialogRef, private readonly fb: FormBuilder, private readonly messageService: MessageService) {}
  
  ngOnInit() {
    this.formInput = this.fb.group({
      inputText: ['', Validators.required]
    });
  }

  showNumber() {
    if (this.formInput.valid) {
      const number = this.formInput.value.inputText;
      this.userNumber = number;
      this.messageService.add({
        severity: 'info',
        summary: 'Numero inserito',
        detail: 'Hai inserito il numero ' + number + ' !'
      });
      this.closeModal();
    }
  }

  closeModal() {
    this.ref.close();
  }
}
