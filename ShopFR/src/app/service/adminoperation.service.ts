import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prodotti } from '../model/prodotti';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminoperationService {

  private url : string = "http://localhost:8080/opadmin/"
  private isAdmin : boolean = false;

  constructor(private http : HttpClient) { }
  
    listProdotti()
    {
      return this.http.get(`${this.url}listprodotti`)
    }

    insertProdotti(prodotto : Prodotti)
    {
      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
      
      let body = JSON.stringify(prodotto);

      return this.http.post(`${this.url}insertprodotti`,body,{ headers });
    }

    deleteProdotto(id : number,img : string)
    {
      const params = new HttpParams().set('id',id).set('img',img);
      
      return this.http.get(`${this.url}deleteprodotto`,{params});
    }

    loginAdmin(id : number)
    {
      const params = new HttpParams().set('id',id);

      return this.http.get(`${this.url}login`,{params});
    }

    getIsAdmin()
    {
      
      return this.isAdmin;
    }

    setIsAdmin(isAdmin : boolean)
    {
      this.isAdmin = isAdmin;
    }




}
