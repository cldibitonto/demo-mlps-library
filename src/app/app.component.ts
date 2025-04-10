import { Component } from '@angular/core';
import { MLPSBreadcrumbComponent, MLPSFooterComponent, MLPSHeaderComponent} from 'mlps-template'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MLPSHeaderComponent,  MLPSFooterComponent, MLPSBreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lib-test';
}
