import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
private readonly router = inject(Router);

 goToHomepage(){
  this.router.navigate(['/demo-board']);
 }
}
