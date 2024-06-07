import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarTopComponent } from './core/components/navbar-top/navbar-top/navbar-top.component';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavbarTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stormbox';

}
