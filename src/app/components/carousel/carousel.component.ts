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
  // menuCards= [
  //   {
  //     idRuoloUtente: 1,
  //     descrizioneRuoloUtente: 'Utente Base',
  //     icona: 'assets/icons/user.svg',
  //     titolo: 'Profilo Utente',
  //     href: '/profilo',
  //     testo: 'Gestisci i tuoi dati personali e aggiorna le tue informazioni.',
  //     isEnabled: true
  //   },
  //   {
  //     idRuoloUtente: 1,
  //     descrizioneRuoloUtente: 'Utente Base',
  //     icona: 'assets/icons/settings.svg',
  //     titolo: 'Impostazioni',
  //     href: '/settings',
  //     testo: 'Configura preferenze, notifiche e privacy del tuo account.',
  //     isEnabled: true
  //   },
  //   {
  //     idRuoloUtente: 2,
  //     descrizioneRuoloUtente: 'Amministratore',
  //     icona: 'assets/icons/lock.svg',
  //     titolo: 'Sicurezza',
  //     href: '/sicurezza',
  //     testo: 'Gestisci password, dispositivi collegati e autenticazione a due fattori.',
  //     isEnabled: true
  //   },
  //   {
  //     idRuoloUtente: 3,
  //     descrizioneRuoloUtente: 'Guest',
  //     icona: 'assets/icons/info.svg',
  //     titolo: 'Info & Supporto',
  //     href: '/info',
  //     testo: 'Consulta le FAQ o contatta il nostro supporto clienti.',
  //     isEnabled: true
  //   },
  //   {
  //     idRuoloUtente: 3,
  //     descrizioneRuoloUtente: 'Guest',
  //     icona: 'assets/icons/coming-soon.svg',
  //     titolo: 'Prossimamente',
  //     href: '',
  //     testo: 'Nuove funzionalità in arrivo! Resta aggiornato.',
  //     isEnabled: false
  //   }
  // ];  
}
