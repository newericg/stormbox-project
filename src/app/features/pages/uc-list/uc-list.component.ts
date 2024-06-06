import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-uc-list',
  standalone: true,
  imports: [ ButtonComponent, CardComponent, TableComponent],
  templateUrl: './uc-list.component.html',
  styleUrl: './uc-list.component.scss'
})
export class UcListComponent implements OnInit {

  constructor(private _route:Router) {}


  cardList: { title: string}[] = [
    {
      title: 'Total UCs'
    },
    {
      title: 'Status'
    },
    {
      title: 'Tipo'
    },
    {
      title: 'Grupo'
    },
    {
      title: 'Dados de faturamento'
    }
  ]

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.routeConfig?.title)
  }
  

  navigateTo(route: string) {
    console.log(route)
    this._route.navigate([route]);
  }
}
