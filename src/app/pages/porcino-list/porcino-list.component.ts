import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PorcinoService } from '../../services/porcino.service';
import { ClienteService } from '../../services/cliente.service';
import { RazaService } from '../../services/raza.service';
import { AlimentacionService } from '../../services/alimentacion.service';
import { Porcino } from '../../interfaces/porcino';
import { PorcinoSumary } from '../../interfaces/porcinoSumary';
import { Cliente } from '../../interfaces/cliente';
import { Raza } from '../../interfaces/raza';
import { Alimentacion } from '../../interfaces/alimentacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porcino-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './porcino-list.component.html',
  styleUrl: './porcino-list.component.css',
})

export class PorcinoListComponent implements OnInit { 
  private readonly porcinoService = inject(PorcinoService);
  private readonly clienteService = inject(ClienteService);
  private readonly razaService = inject(RazaService);
  private readonly alimentacionService = inject(AlimentacionService);
  private readonly router = inject(Router);

  public porcinoList$!: Porcino[];
  public porcinoSumaryList$!: PorcinoSumary[];
  public clienteList$!: Cliente[];
  public razaList$!: Raza[];
  public alimentaacionList$!: Alimentacion[];

  public editPig!: Porcino;

  formGroupPorcino!: UntypedFormGroup;
  idPorcino = new FormControl('');
  identificacion = new FormControl('');
  raza = new FormControl('');
  alimentacion = new FormControl('');
  edad = new FormControl();
  peso = new FormControl();
  isEditPig = false;
  isLoader = false;

  ngOnInit(): void {
    this.initializeFormGroup();
    this.getListPorcinos();
    this.getListPorcinoSumary();
    this.getListClientes();
    this.getListRazas();
    this.getListAlimentaciones();
  }
    
  initializeFormGroup() {
    this.formGroupPorcino = new UntypedFormGroup({
      idPorcino: new UntypedFormControl(''),
      identificacion: new UntypedFormControl(''),
      raza: new UntypedFormControl(''),
      alimentacion: new UntypedFormControl(''),
      edad: new UntypedFormControl(''),
      peso: new UntypedFormControl(''),
    });
    this.idPorcino.disable();
  }

  getListPorcinos() {
    this.porcinoService.getPorcinoList().subscribe({
      next: (response) => {
        console.log(response);
        this.porcinoList$ = response;
      },
    });
  }

  getListPorcinoSumary(){
    this.porcinoService.getPorcinoSumaryList().subscribe({
      next: (response) => {
        console.log(response);
        this.porcinoSumaryList$ = response;
      },
    });
  }

  getListClientes() {
    try {
      this.clienteService.getClienteList().subscribe({
        next: (response) => {
          console.log(response);
          this.clienteList$ = response;
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  getListRazas() {
    this.razaService.getRazaList().subscribe({
      next: (response) => {
        console.log(response);
        this.razaList$ = response;
      },
    });
  }

  getListAlimentaciones() {
    this.alimentacionService.getAlimentacionList().subscribe({
      next: (response) => {
        console.log(response);
        this.alimentaacionList$ = response;
      },
    });
  }

  newPorcino(editPorcino: boolean) {
    this.limpiarCampos();
    this.isEditPig = editPorcino;
  }

  public savePorcino() {
    const newPorcino: any = {
      'idCliente': this.identificacion.value,
      'idRaza': this.raza.value,
      'idAlimentacion': this.alimentacion.value,
      'edad': this.edad.value,
      'peso': this.peso.value,
    };
    try {
      this.porcinoService.savePorcino(newPorcino).subscribe ({
        next: (response) => {
          if(response){
            this.limpiarCampos();
            console.log(response);
            window.location.reload();
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  limpiarCampos() {
    this.idPorcino.setValue('');
    this.identificacion.setValue('0');
    this.raza.setValue('0');
    this.alimentacion.setValue('0');
    this.edad.setValue('');
    this.peso.setValue('');
  }

  getPorcino(idPorcino: any) {
    try {
      this.isEditPig = true;
      this.porcinoService.getPorcino(idPorcino).subscribe({
        next: (response) => {
          if(response){
            console.log(response);
            this.editPig = response;
            this.idPorcino.setValue(this.editPig.idPorcino);
            this.identificacion.setValue(this.editPig.idCliente);
            this.raza.setValue(this.editPig.idRaza);
            this.alimentacion.setValue(this.editPig.idAlimentacion);
            this.edad.setValue(this.editPig.edad);
            this.peso.setValue(this.editPig.peso);
          }
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  editPorcino() {
    this.isLoader = true;
    const editPorcino: Porcino = {
      'idPorcino': this.idPorcino.value,
      'idCliente': this.identificacion.value,
      'idRaza': this.raza.value,
      'idAlimentacion': this.alimentacion.value,
      'edad': this.edad.value,
      'peso': this.peso.value,
    };
    try {
      this.porcinoService.editPorcino(editPorcino).subscribe ({
        next: (response) => {
          if(response){
            this.isLoader = false;
            console.log(response);
            window.location.reload();
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  deletPorcino(idPorcino: any) {
    try {
      this.porcinoService.deletePorcino(idPorcino).subscribe({
        next: (response) => {
          window.location.reload();
          if(response){
            window.location.reload();
            console.log(response);
          }
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
