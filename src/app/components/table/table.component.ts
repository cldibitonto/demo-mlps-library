import { Component, OnInit} from '@angular/core';
import { MLPSPaginatorComponent } from 'mlps-template';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,MLPSPaginatorComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  pratiche = [
    {
      codice: 'PRT-00123',
      richiedente: 'Mario Rossi',
      oggetto: 'Richiesta contributo pesca 2024',
      data: '17/04/2024',
      stato: 'In lavorazione'
    },
    {
      codice: 'PRT-00124',
      richiedente: 'Giulia Bianchi',
      oggetto: 'Rinnovo licenza pesca',
      data: '03/09/2024',
      stato: 'Approvata'
    },
    {
      codice: 'PRT-00125',
      richiedente: 'Francesco Verdi',
      oggetto: 'Domanda rimborso carburante',
      data: '12/11/2024',
      stato: 'Integrazione richiesta'
    },
    {
      codice: 'PRT-00126',
      richiedente: 'Laura Neri',
      oggetto: 'Iscrizione nuova imbarcazione',
      data: '07/02/2015',
      stato: 'Respinta'
    },
    {
      codice: 'PRT-00127',
      richiedente: 'Alessandro Gialli',
      oggetto: 'Richiesta aggiornamento dati',
      data: '10/03/2025',
      stato: 'In attesa'
    }
  ];

  actions: MenuItem[] | undefined;

  ngOnInit(): void{
    this.actions = [
      {
        label: 'Visualizza',
        icon: 'pi pi-search'
      },
      {
        label: 'Modifica',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Elimina',
        icon: 'pi pi-trash'
      }
    ];
  }
}



