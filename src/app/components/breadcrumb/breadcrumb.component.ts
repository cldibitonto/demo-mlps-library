import { Component } from '@angular/core';
import { MLPSBreadcrumbComponent } from 'mlps-template';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [MLPSBreadcrumbComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

}
