import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { MLPSInfoModalComponent } from 'mlps-template';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LoaderComponent, CarouselComponent, MLPSInfoModalComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
private readonly router = inject(Router);

 goToDemo(){
  this.router.navigate(['/demo-board']);
 }
}
