import { Component, inject } from '@angular/core';
import { MLPSWizardComponent, TabItem, TestComponent } from 'mlps-template';
import { ModalComponent } from '../modal/modal.component';
import { TextInputFormComponent } from '../text-input-form/text-input-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [MLPSWizardComponent],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})

export class WizardComponent {
  private readonly router = inject(Router);
  
    tabList: TabItem[] = [{
      name: 'Success tab with modals',
      component: ModalComponent,
      showCheck: true,
    }, 
    {
      name: 'Disabled tab',
      component: TestComponent,
      disabled: true
    },
    {
      name: 'Warning tab with form',
      component: TextInputFormComponent,
      showWarning: true,
    }
  ]

  goToHomepage(){
    this.router.navigate(['/home']);
   }
}
