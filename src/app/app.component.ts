import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MLPSHeaderComponent} from 'mlps-template'
import { WizardComponent } from "./components/wizard/wizard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MLPSHeaderComponent, WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lib-test';
}
