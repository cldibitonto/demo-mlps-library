import { Component } from '@angular/core';
import { MLPSNotifica, MLPSNotificationComponent } from 'mlps-template';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MLPSNotificationComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  notifiche: MLPSNotifica[] = [
    {
      titolo: 'Notifica 1',
      contenuto: 'Contenuto 1',
      data: '10/04/2025',
      isLetto: true
    },
    {
      titolo: 'Notifica 2',
      contenuto: 'Contenuto 2',
      data:'10/04/2025',
      isLetto: false
    },
    {
      titolo: 'Notifica 2',
      contenuto: 'Contenuto 2',
      data:'10/04/2025',
      isLetto: false
    },
    {
      titolo: 'Notifica 2',
      contenuto: 'Contenuto 2',
      data:'10/04/2025',
      isLetto: false
    }
  ];
  
  segnaComeLetta(notifica: MLPSNotifica) {
    notifica.isLetto = true;
  }
  
  segnaTutte() {
    this.notifiche.forEach(n => n.isLetto = true);
  }
  
}
