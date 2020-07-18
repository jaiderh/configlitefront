import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clients: Array<Client>;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clients = this.route.snapshot.data.clientList;
  }

  public deleteClient(client: Client) {
    if (confirm(`Esta seguro de borrar el client '${client.idclient}'`)) {
      this.clientService.deleteClient(client.id).subscribe( result => {
        alert(result.message);
        this.clientService.getClients().subscribe(result => this.clients = result);
      });
    }
  }

}
