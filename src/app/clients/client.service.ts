import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiBaseURL}/clients/`;
  }

  public getClient(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseUrl}${id}`);
  }

  public getClients(): Observable<Array<Client>>{
    return this.httpClient.get<Array<Client>>(this.baseUrl);
  }

  public deleteClient(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}${id}`);
  }

  public saveClient(client: Client): Observable<any>{
    if (client.id > 0) {
      return this.updateClient(client);
    } else {
      return this.createClient(client);
    }
  }

  private updateClient(client: Client): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}${client.id}`, client);
  }

  private createClient(client: Client): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, client);
  }
}
