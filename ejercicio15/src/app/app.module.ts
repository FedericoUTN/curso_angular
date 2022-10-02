import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventDetalleComponent } from './event-detalle/event-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
