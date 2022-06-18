import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelos/experiencia';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia('','','','');
  
  constructor(
    private experienciaServicio: DatosPorfolioService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private rutas: Router
  ) { }

  ngOnInit(): void {
    const idExp = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(idExp);
    this.experienciaServicio.verExperiencia(`${idExp}`).subscribe(
      data => {
        this.experiencia = data;
        //console.log(this.experiencia);
      },
      err => {
        this.toaster.error('Fallo al cargar la experiencia', 'Fail', {
          timeOut: 3800, positionClass: 'toast-top-center'
        });
        this.rutas.navigate(['/experiencia']);
      }
    )
    
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.experienciaServicio.editarExperiencia('id', this.experiencia).subscribe(
      data => {
        this.toaster.success('Experiencia actualizada', 'OK', {
          timeOut: 3800, positionClass: 'toast-top-center'
        });
        this.rutas.navigate(['./experiencia']);
      },
      err => {
        this.toaster.error('Fallo al actualizar la experiencia', 'Fail', {
          timeOut: 3800, positionClass: 'toast-top-center'
        });
        this.rutas.navigate(['/experiencia']);
      }
    )
  }

}