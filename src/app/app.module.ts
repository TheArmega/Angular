import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule} from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> formulario-reactivo

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoCorreoComponent } from './components/nuevo-correo/nuevo-correo.component';
import { CorreoComponent } from './components/correo/correo.component';
import { ListaCorreosComponent } from './components/lista-correos/lista-correos.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoCorreoComponent,
    CorreoComponent,
    ListaCorreosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> formulario-reactivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
