import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [LoaderComponent, CarouselComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
private readonly router = inject(Router);

 goToDemo(){
  this.router.navigate(['/demo-board']);
 }
}
