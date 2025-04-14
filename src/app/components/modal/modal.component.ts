import { Component, inject } from '@angular/core';
import { MLPSModalService, ModalOptions } from 'mlps-template';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private readonly mlpsModalService = inject(MLPSModalService);

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
}
