import { Component } from '@angular/core';
import { WizardComponent } from "../wizard/wizard.component";

@Component({
  selector: 'app-demo-board',
  standalone: true,
  imports: [WizardComponent],
  templateUrl: './demo-board.component.html',
  styleUrl: './demo-board.component.scss'
})
export class DemoBoardComponent {

}
