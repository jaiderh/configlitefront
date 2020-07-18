import { Injectable } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientListResolverService implements Resolve<Array<Client>> {

  constructor(private clientService: ClientService) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Array<Client>> {
    return this.clientService.getClients();
  }
}
