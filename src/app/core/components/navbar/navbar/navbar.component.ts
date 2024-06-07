import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navbarMenu: { name: string, route: string, icon: string, arrow: boolean }[] = [
    {
      name: 'Home',
      route: '/',
      icon: 'bi bi-house-fill ',
      arrow: false
    },
    {
      name: 'Gestão de UCs',
      route: '/gestao-de-ucs',
      icon: 'bi bi-buildings-fill',
      arrow: true
    },
    {
      name: 'Gestão de ciclos',
      route: '/gestao-de-ciclos',
      icon: 'bi bi-calculator-fill',
      arrow: true
    },
    {
      name: 'Gestão de rateios',
      route: '/gestao-de-rateios',
      icon: 'bi bi-people-fill',
      arrow: true
    },
    {
      name: 'Gestão de faturamento',
      route: '/gestao-de-faturamento',
      icon: 'bi bi-cash-stack',
      arrow: true
    },
    {
      name: 'Configurações',
      route: '/configuracoes',
      icon: 'bi bi-gear-fill',
      arrow: true
    }
  ]

  navMobileDisplay: string = 'none'

  openMenuMobile() {
    this.navMobileDisplay === 'none' ? this.navMobileDisplay = 'flex' : this.navMobileDisplay = 'none'
    console.log(this.navMobileDisplay)
  }
}
