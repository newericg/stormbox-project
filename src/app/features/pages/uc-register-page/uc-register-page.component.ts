import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import responses from '../../../../../responses-form.json';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-uc-register-page',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
  ],
  providers: [
    provideNgxMask({
    }),
  ],
  templateUrl: './uc-register-page.component.html',
  styleUrl: './uc-register-page.component.scss',
})
export class UcRegisterPageComponent implements OnInit {
  private _route = inject(Router);

  private formBuilderService = inject(FormBuilder);

  toast = inject(ToastrService)

  concessionariaList = responses.concessionaria;
  ufList = responses.UF;
  tipoList = responses.Tipo;
  modalidadeList = responses.Modalidade;
  clienteRuralList = responses['Cliente rural'];
  organizacaoList = responses['Tipo de organização'];
  ligacaoList = responses['Tipo de ligação'];

  ngOnInit(): void {
    // console.log(responses)
  }

  protected UCForm = this.formBuilderService.group({
    vigenciaInicial: ['', Validators.required],
    concessionaria: ['', Validators.required],
    UF: ['', Validators.required],
    unidade: ['', Validators.required],
    cliente: ['', Validators.required],
    empresa: ['', Validators.required],
    descricaoUnidade: ['', Validators.required],
    tipo: ['', Validators.required],
    modalidade: ['', Validators.required],
    clienteRural: ['', Validators.required],
    organizacao: ['', Validators.required],
    ligacao: ['', Validators.required],
    cpfOuCnpj: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    console.log(this.UCForm.value);
    this.toast.success('UC cadastrada!', 'Successo!')
    this._route.navigate(['/gestao-de-ucs']);
  }

  navigateTo(route: string) {
    this._route.navigate([route]);
  }
}
