import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Client } from './client';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailResolverService implements Resolve<Client>  {

  constructor(private clientService: ClientService) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Client> {
    const id = +route.paramMap.get('id');

    if (id > 0) {
      return this.clientService.getClient(id);
    } else {
      return of( new Client() );
    }
  }
}
