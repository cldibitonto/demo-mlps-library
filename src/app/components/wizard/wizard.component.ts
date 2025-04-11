import { Component, inject } from '@angular/core';
import { MLPSWizardComponent, TabItem, TestComponent } from 'mlps-template';
import { CarouselComponent } from '../carousel/carousel.component';
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
    name: 'Tab success',
    component: ModalComponent,
    showCheck: true,
  }, 
    {
      name: 'Tab disabilitato',
      component: TestComponent,
      disabled: true
    },
    {
      name: 'Tab warning',
      component: TextInputFormComponent,
      showWarning: true,
    },
  ]

  goToHomepage(){
    this.router.navigate(['/home']);
   }
}
