import { Routes } from '@angular/router';
import { HomePageComponent } from './core/interfaces/home-page/home-page.component';
import { UcListComponent } from './core/interfaces/uc-list/uc-list.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'uc-list', component: UcListComponent },

];
