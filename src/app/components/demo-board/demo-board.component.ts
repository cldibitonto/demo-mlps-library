import { Component } from '@angular/core';
import { WizardComponent } from "../wizard/wizard.component";
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-demo-board',
  standalone: true,
  imports: [WizardComponent, LoaderComponent],
  templateUrl: './demo-board.component.html',
  styleUrl: './demo-board.component.scss'
})
export class DemoBoardComponent {

}
