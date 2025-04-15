import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MLPSInfoModalService, ModalOptions } from 'mlps-template';
import { MessageService } from 'primeng/api';
import { DialogService} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ToastModule, CommonModule, ButtonModule],
  providers: [DialogService, MessageService],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private readonly mlpsModalService = inject(MLPSInfoModalService);
  private readonly messageService = inject(MessageService);
  private readonly dialogService = inject(DialogService);

  listaNotifiche: any[] = [];
  inputNumber = new FormControl('', [Validators.required]); 

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
      title: 'Gestisci operazione',
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
  openFormModal() {
    const ref = this.dialogService.open(FormModalComponent, {
      header: 'Inserisci un numero',
      width: '40%',
      focusOnShow: false,
      position: 'fixed',
      baseZIndex: 2050,
      closable: true,
      data: { messageService: this.messageService,},
    });
    ref.onClose.subscribe(() => {
      console.log('Modale chiusa');
    });
  }
  
}



