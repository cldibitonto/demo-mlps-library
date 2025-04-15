import {Component} from '@angular/core';
import { MLPSBreadcrumbComponent, MLPSFooterComponent, MLPSHeaderComponent, MLPSInfoModalComponent, MLPSLoaderComponent} from 'mlps-template'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MLPSHeaderComponent,  MLPSFooterComponent, MLPSBreadcrumbComponent, MLPSLoaderComponent, MLPSInfoModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{

}
