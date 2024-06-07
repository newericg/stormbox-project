import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ResponseData from '../../../../../ucs-response.json';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table.component';


@Component({
  selector: 'app-uc-list',
  standalone: true,
  imports: [ButtonComponent, CardComponent, TableComponent],
  templateUrl: './uc-list.component.html',
  styleUrl: './uc-list.component.scss',
})
export class UcListComponent implements OnInit {
  constructor(private _route: Router) {}

  // response = [];
  response = ResponseData

  tableHeaderList: any = {};
  totalUCs!: number;

  cardList: any[] = [
    {
      title: 'Total UCs',
      totalUCs: null,
    },
    {
      title: 'Status',
      ativos: null,
      inativos: null,
    },
    {
      title: 'Tipo',
      consumidor: null,
      gerador: null,
    },
    {
      title: 'Grupo',
      grupoA: null,
      grupoB: null,
    },
    {
      title: 'Dados de faturamento',
      comEndereco: null,
      semEndereco: null,
      comCPF: null,
      semCPF: null,
    },
  ];

  ngOnInit(): void {
    this.getResponseHeader();
    this.getCardsDatas();
    this.getActiveAndInactiveStatus();
    this.getTipo();
    this.getGrupo();
    this.getAddressAndCpfCount();
  }

  navigateTo(route: string) {
    this._route.navigate([route]);
  }

  getResponseHeader() {
    if(this.response.length) {
      this.tableHeaderList = Object.keys(this.response[0]);
    }
    }

  getCardsDatas() {
    if (this.response) {
      this.totalUCs = this.response.length;
      this.cardList[0].totalUCs = this.totalUCs;
    }
  }

  getActiveAndInactiveStatus() {
    let active: number = 0;
    let inactive: number = 0;
    if (this.response) {
      this.response.map((uc: any) => {
          uc.Status === false ? (inactive = inactive + 1) : (active = active + 1);
          this.cardList[1].ativos = active;
          this.cardList[1].inativos = inactive;
      });
      
    }
  }

  getTipo() {
    let consumidor: number = 0;
    let gerador: number = 0;
    if (this.response) {
      this.response.map((uc: any) => {
        uc.Tipo === 'Consumidor'
          ? (consumidor = consumidor + 1)
          : (gerador = gerador + 1);
      });
      this.cardList[2].gerador = gerador;
      this.cardList[2].consumidor = consumidor;
    }
  }

  getGrupo() {
    let grupoA: number = 0;
    let grupoB: number = 0;
    if (this.response) {
      this.response.map((uc: any) => {
        uc.Grupo === 'A1' || uc.Grupo === 'A2' || uc.Grupo === 'A3'
          ? (grupoA = grupoA + 1)
          : (grupoB = grupoB + 1);
      });
      this.cardList[3].grupoB = grupoB;
      this.cardList[3].grupoA = grupoA;
    }
  }

  getAddressAndCpfCount() {
    let withAddress: number = 0;
    let withoutAddress: number = 0;
    let withCPF: number = 0;
    let withoutCPF: number = 0;

    if (this.response) {
      this.response.map((uc: any) => {
        uc.UF
          ? (withAddress = withAddress + 1)
          : (withoutAddress = withoutAddress + 1);
        uc['CPF/CNPJ']
          ? (withCPF = withCPF + 1)
          : (withoutCPF = withoutCPF + 1);
      });

      this.cardList[4].comEndereco = withAddress;
      this.cardList[4].semEndereco = withoutAddress;
      this.cardList[4].comCPF = withCPF;
      this.cardList[4].semCPF = withoutCPF;
    }
  }
}
