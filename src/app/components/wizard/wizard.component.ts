import { Component } from '@angular/core';
import { MLPSWizardComponent, TabItem, TestComponent } from 'mlps-template';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [MLPSWizardComponent],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})

export class WizardComponent {
  tabList: TabItem[] = [{
    name: 'App',
    component: TestComponent,
    showCheck: true,
  }, 
    {
      name: 'App2',
      component: TestComponent,
      showWarning: true,
    }]
}
