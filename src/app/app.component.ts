import { Component } from '@angular/core';
import { MLPSFooterComponent, MLPSHeaderComponent} from 'mlps-template'
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MLPSHeaderComponent,  MLPSFooterComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lib-test';
}
