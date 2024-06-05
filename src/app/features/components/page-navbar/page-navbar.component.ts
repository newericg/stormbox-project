import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-navbar',
  standalone: true,
  imports: [],
  templateUrl: './page-navbar.component.html',
  styleUrl: './page-navbar.component.scss'
})
export class PageNavbarComponent {

    @Input() pageName: string = ''
}
