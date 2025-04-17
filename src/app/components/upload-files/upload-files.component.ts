import { Component } from '@angular/core';
import { MLPSUploadComponent, MLPSUploadBody } from 'mlps-template'

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [MLPSUploadComponent],
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.scss'
})
export class UploadFilesComponent {
  uploadedFiles: MLPSUploadBody[] = [];

  // uploadFiles(files: MLPSUploadBody | MLPSUploadBody[]) {
  //   console.log('file caricati', files);
  // }

  // deleteFiles(file: MLPSUploadBody) {
  //   console.log('file cancellato', file);
  // }
}
