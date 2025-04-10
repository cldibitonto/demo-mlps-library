import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DemoBoardComponent } from './components/demo-board/demo-board.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'demo-board',
        component: DemoBoardComponent,
            data: {
                breadcrumbItems: [
                    { link: '/demo-bord', label: 'Demo' },
                ]
        },
    }
]
