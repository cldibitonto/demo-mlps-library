import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MLPSInfoModalService, ModalOptions } from 'mlps-template';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private readonly mlpsModalService = inject(MLPSInfoModalService);
  private readonly messageService = inject(MessageService);

  listaNotifiche: any[] = [];
  inputNumber = new FormControl('', [Validators.required]); 
  enteredNumber: string = '';
  userNumber: number= 0;

  //Esempio modale di successo
  openSuccessModal(): void {
    const successOptions: ModalOptions = {
      size: 'lg',
      type: 'success',
      title: '',
      text: 'I dati sono stati salvati correttamente.',
      showButton: true,
      showResumeButton: true,
      showLeaveButton: true,
      resumeButtonText: 'OK',
      leaveButtonText: 'Esci',
      onResumeButton: () => this.mlpsModalService.getModalComponent().toggle(),
      onLeaveButton: () => this.mlpsModalService.getModalComponent().toggle(),
    };
    this.mlpsModalService.getModalComponent().toggle(successOptions);
  }

  //Esempio modale di warning
  openWarningModal(): void {
    const warningOptions: ModalOptions = {
      size: 'lg',
      type: 'warning',
      title: 'Attenzione!',
      text: 'Sei sicuro di voler uscire senza salvare?',
      showButton: true,
      showResumeButton: true,
      showLeaveButton: true,
      resumeButtonText: 'Salva',
      leaveButtonText: 'Abbandona',
      onResumeButton: () => this.mlpsModalService.getModalComponent().toggle(),
      onLeaveButton: () => this.mlpsModalService.getModalComponent().toggle(),
    };
    this.mlpsModalService.getModalComponent().toggle(warningOptions);
  }

  //Esempio modale di successo interattiva con fn di callback
  openInteractiveModal(): void {
    const modalOptions: ModalOptions = {
      size: 'lg',
      type: 'success',
      title: 'Operazione riuscita',
      text: 'Vuoi continuare o abbandonare l\'azione?',
      showButton: true,
      showResumeButton: true,
      showLeaveButton: true,
      resumeButtonText: 'Continua',
      leaveButtonText: 'Abbandona',
      onResumeButton: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Complimenti!',
          detail: 'Hai scelto di continuare.',
        });
        this.mlpsModalService.getModalComponent().toggle();
      },
      onLeaveButton: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Attenzione!',
          detail: 'Hai scelto di abbandonare l\'azione.',
        });
        this.mlpsModalService.getModalComponent().toggle();
      }
    };
    this.mlpsModalService.getModalComponent().toggle(modalOptions);
  }
  

  //Esempio modale interattiva con form 
  openFormModal(): void {
    const modalOptions: ModalOptions = {
      size: 'lg',
      type: 'success',
      title: 'Operazione riuscita',
      text: 'Inserisci un numero e conferma',
      showButton: true,
      showResumeButton: true,
      showLeaveButton: true,
      resumeButtonText: 'Conferma',
      leaveButtonText: 'Esci',
      onResumeButton: () => {

        console.log('L\'utente ha cliccato su "Conferma"');
        this.mlpsModalService.getModalComponent().toggle();
      },
      onLeaveButton: () => {
        console.log('L\'tente ha cliccato su "Esci"');
        this.mlpsModalService.getModalComponent().toggle();
      }
    };
    this.mlpsModalService.getModalComponent().toggle(modalOptions);
  }
}



