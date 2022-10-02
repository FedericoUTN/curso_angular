import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetalleComponent } from './event-detalle/event-detalle.component';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaEventoGuard implements CanActivate, CanDeactivate<unknown> {
constructor(private serv: EventsService, private route: Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let event = this.serv.getEvent(route.paramMap.get('name'));
    return !!event
  }
  canDeactivate(
    component: EventDetalleComponent,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.reviewed;
  }
  
  
  
}
