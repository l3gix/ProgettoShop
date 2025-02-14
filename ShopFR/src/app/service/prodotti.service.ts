import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordini } from '../model/ordini';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private url : string = "http://localhost:8080/op/"
  constructor(private http : HttpClient) { }

  listProdotti()
  {
    return this.http.get(`${this.url}listprodotti`)
  }

  addOrdine(ordine : Ordini)
  {
    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
    
    let body = JSON.stringify({id_prodotti:ordine.getId_prodotti(),id_user:ordine.getId_user()});

    return this.http.post(`${this.url}addordine`,body,{ headers });
  }

  viewCarello(id : number)
  {
    const params = new HttpParams().set('id',id);

    return this.http.get(`${this.url}viewcarello`,{params});
  }

  deleteOrdine(id : number)
  {
    const params = new HttpParams().set('id',id);
    
    return this.http.get(`${this.url}detelteordine`,{params});
  }
}
