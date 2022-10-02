import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetalleComponent } from './event-detalle/event-detalle.component';
import { EventResolver } from './event.resolver';
import { EventsListComponent } from './events-list/events-list.component';
import { GuardaEventoGuard } from './guarda-evento.guard';

const routes: Routes = [
  { path: '', component: EventsListComponent },
   { path: 'detalles/:name', component: EventDetalleComponent, canActivate: [GuardaEventoGuard], canDeactivate: [GuardaEventoGuard], resolve: [EventResolver]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
