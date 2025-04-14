import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MLPSBreadcrumbComponent, MLPSFooterComponent, MLPSHeaderComponent, MLPSInfoModalComponent, MLPSLoaderComponent, MLPSModalService} from 'mlps-template'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MLPSHeaderComponent,  MLPSFooterComponent, MLPSBreadcrumbComponent, MLPSLoaderComponent, MLPSInfoModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit{
  @ViewChild(MLPSInfoModalComponent) modal!: MLPSInfoModalComponent;  
   
  private readonly mlpsModalService = inject(MLPSModalService);

  ngAfterViewInit(): void {
    this.mlpsModalService.setModalComponent(this.modal);
  }
}
