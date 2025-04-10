import { Component } from '@angular/core';
import { MenuCard, MLPSCarouselComponent } from 'mlps-template';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MLPSCarouselComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

//   menuCards: MenuCard[
//    array di oggetti da riempire tipo così:
//    {
//     icona: 'fa fa-user',
//     titolo: 'Profilo',
//     href: '/profilo',
//     testo: 'Gestisci il tuo profilo',
//     isEnabled: true
//   },
//   {
//     icona: 'fa fa-cog',
//     titolo: 'Impostazioni',
//     href: '/settings',
//     testo: 'Configura le impostazioni',
//     isEnabled: true
//   },
//   {
//     icona: 'fa fa-info',
//     titolo: 'Info',
//     href: '/info',
//     testo: 'Scopri di più',
//     isEnabled: true
//   }
// ];
//   ]
// }
