import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-top',
  standalone: true,
  imports: [],
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.scss'
})

export class NavbarTopComponent {

  constructor(
    public titleService: Title,
    router: Router
  ) {
    router.events.subscribe(() => {
      console.log(titleService.getTitle())
    });
  }

  
  
 
  
 
}
