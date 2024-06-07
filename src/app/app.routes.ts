import { Routes } from '@angular/router';
import { ConstructionPageComponent } from './features/pages/construction-page/construction-page.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { UcListComponent } from './features/pages/uc-list/uc-list.component';
import { UcRegisterPageComponent } from './features/pages/uc-register-page/uc-register-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'gestao-de-ucs', component: UcListComponent, title: 'Gestão de UCs' },
  {
    path: 'cadastro-uc',
    component: UcRegisterPageComponent,
    title: 'Cadastro manual',
  },
  {
    path: 'gestao-de-ciclos',
    component: ConstructionPageComponent,
    title: 'Em construção!',
  },
  {
    path: 'gestao-de-rateios',
    component: ConstructionPageComponent,
    title: 'Em construção!',
  },
  {
    path: 'gestao-de-faturamento',
    component: ConstructionPageComponent,
    title: 'Em construção!',
  },
  {
    path: 'configuracoes',
    component: ConstructionPageComponent,
    title: 'Em construção!',
  },
];
