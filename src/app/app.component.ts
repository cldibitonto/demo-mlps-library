import { AfterViewInit, Component, inject} from '@angular/core';
import { MLPSBreadcrumbComponent, MLPSFooterComponent, MLPSHeaderComponent, MLPSInfoModalComponent, MLPSLoaderComponent, MLPSInfoModalService} from 'mlps-template'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MLPSHeaderComponent,  MLPSFooterComponent, MLPSBreadcrumbComponent, MLPSLoaderComponent, MLPSInfoModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit{
  private readonly mlpsModalService = inject(MLPSInfoModalService);

  ngAfterViewInit(): void {
    this.mlpsModalService.getModalComponent().toggle();
  }
}
