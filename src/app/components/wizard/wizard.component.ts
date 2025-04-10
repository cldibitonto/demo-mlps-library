import { Component } from '@angular/core';
import { MLPSWizardComponent, TabItem, TestComponent } from 'mlps-template';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [MLPSWizardComponent],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})

export class WizardComponent {
  tabList: TabItem[] = [{
    name: 'Prova success',
    component: TestComponent,
    showCheck: true,
  }, 
    {
      name: 'Prova disabilitato',
      component: TestComponent,
      disabled: true
    },
    {
      name: 'Prova warning',
      component: CarouselComponent,
      showWarning: true,
    },
  ]
}
