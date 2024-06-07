import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss'
})
export class NavbarItemComponent implements OnInit {
  constructor(private _route: Router){}

  @Input() itemName: string = ''
  @Input() itemIcon: string = ''
  @Input() route: string = ''
  @Input() arrowIcon: boolean = false


  ngOnInit() {
    
  }

  navigateTo(route: string) {
    this._route.navigate([route]);
  }
}
