import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosPorfolioService } from './servicios/datos-porfolio.service';
import { interceptorProvider } from './servicios/interceptor.service';

//NG2charts
import { NgChartsModule } from 'ng2-charts';

//Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditarFormacionComponent } from './componentes/formacion/editar-formacion.component';
import { NuevaFormacionComponent } from './componentes/formacion/nueva-formacion.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarHabilidadComponent } from './componentes/habilidades/editar-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    PageNotFoundComponent,
    IniciarSesionComponent,
    EditarAcercaDeComponent,
    EditarExperienciaComponent,
    NuevaExperienciaComponent,
    EditarFormacionComponent,
    NuevaFormacionComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent,
    EditarHabilidadComponent,
    NuevaHabilidadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    DatosPorfolioService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
