import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegiaoComponent } from './main/regiao/regiao.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },

    {
        path: 'regiao',
        component: RegiaoComponent
    }
];
