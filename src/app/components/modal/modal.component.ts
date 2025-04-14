import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MLPSInfoModalService, ModalOptions } from 'mlps-template';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private readonly mlpsModalService = inject(MLPSInfoModalService);

  message = '';
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
      resumeButtonText: 'OK',
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
      resumeButtonText: 'Annulla',
      leaveButtonText: 'Esci senza salvare',
      onResumeButton: () => this.mlpsModalService.getModalComponent().toggle(),
      onLeaveButton: () => this.mlpsModalService.getModalComponent().toggle(),
    };
    this.mlpsModalService.getModalComponent().toggle(warningOptions);
  }

  //Esempio modale di successo interattiva con fn di callback
  openInteractiveSuccessModal(): void {
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
        this.message = 'Hai scelto di continuare. Azione registrata!';
        console.log('L\'utente ha cliccato su "Continua"');
        this.mlpsModalService.getModalComponent().toggle();
      },
      onLeaveButton: () => {
        this.message = 'Hai scelto di abbandonare l\'operazione.';
        console.log('L\'tente ha cliccato su "Abbandona"');
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



