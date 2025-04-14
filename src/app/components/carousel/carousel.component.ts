import { Component } from '@angular/core';
import { MLPSCarouselComponent } from 'mlps-template';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MLPSCarouselComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  menuCards= [
    {
      idRuoloUtente: 1,
      // icona: 'assets/svg/profile.svg',
      titolo: 'Profilo Utente',
      href: '',
      testo: 'Gestisci i tuoi dati personali e aggiorna le tue informazioni.',
      isEnabled: true,
    },
    {
      idRuoloUtente: 1,
      // icona: 'assets/svg/settings.svg',
      titolo: 'Impostazioni',
      href: '',
      testo: 'Configura preferenze, notifiche e privacy del tuo account.',
      isEnabled: true
    },
    {
      idRuoloUtente: 2,
      // icona: 'assets/svg/lock-closed.svg',
      titolo: 'Sicurezza',
      href: '',
      testo: 'Gestisci password, dispositivi collegati e autenticazione a due fattori.',
      isEnabled: true
    },
    {
      idRuoloUtente: 3,
      // icona: 'assets/svg/info.svg',
      titolo: 'Info & Supporto',
      href: '/info',
      testo: 'Consulta le FAQ o contatta il nostro supporto clienti.',
      isEnabled: true
    },
    {
      idRuoloUtente: 3,
      // icona: 'assets/svg/notification-bell.svg',
      titolo: 'Prossimamente',
      href: '',
      testo: 'Nuove funzionalità in arrivo! Resta aggiornato.',
      isEnabled: false
    }
  ];  
}
