import { HttpRequest } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MLPSLoaderService } from 'mlps-template';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
private readonly loader = inject(MLPSLoaderService);

mockRequest(){
  const fakeRequest = new HttpRequest('GET', '/fake-url');
  this.loader.addRequest(fakeRequest);
  of('Simulated Response')
      .pipe(delay(1000))
      .subscribe(response => {
        console.log(response); 

        this.loader.removeRequest(fakeRequest);
      });
  }
}

