import { Component, ViewChild } from '@angular/core';
import { MLPSModalComponent, ModalOptions } from 'mlps-template';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @ViewChild(MLPSModalComponent) modal!: MLPSModalComponent;  

  openSuccessModal(): void {
    const successOptions: ModalOptions = {
      size: 'lg', 
      type: 'success',  
      title: '',  
      text: 'I dati sono stati salvati correttamente.',
      showResumeButton: true,  
      resumeButtonText: 'OK', 
      onResumeButton: () => {}
    };

    // Chiamata al metodo toggle con le opzioni
    this.modal.toggle(successOptions);
  }

  openWarningModal(): void {
    const warningOptions: ModalOptions = {
      size: 'lg',
      type: 'warning',
      title: 'Attenzione!',
      text: 'Sei sicuro di voler uscire senza salvare?',
      showResumeButton: true,
      showLeaveButton: true,  
      resumeButtonText: 'Annulla',
      leaveButtonText: 'Esci senza salvare',
      onResumeButton: () => {},
      onLeaveButton: () => {}
    };
  } 
}
