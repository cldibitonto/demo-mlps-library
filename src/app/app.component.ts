import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MLPSWizardComponent, TabItem, TestComponent} from 'mlps-template'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, MLPSWizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lib-test';

  tabList: TabItem[] = [{
    name: 'App',
    component: TestComponent,
    showCheck: true,
    showWarning: true
  }, 
    {
      name: 'app2',
      component: TestComponent
    }]
}
