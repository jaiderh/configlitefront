import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  public client: Client;
  public title: string;
  public editing: boolean;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.client = this.route.snapshot.data.clientDetail;
    this.editing = this.client.id > 0;
    this.title = this.editing ? 'Editar Cliente' : 'Nuevo Cliente';
  }

  register() {
    this.clientService.saveClient(this.client).subscribe(result => {
      alert('Cliente creado exitosamente');
      this.router.navigate(['clients']);
    },
    error => {
      if (error.error.message) {
        alert(error.error.message);
      } else {
        console.error({error});
        alert('Error procesando la solicitud');
      }
    });
  }

}
