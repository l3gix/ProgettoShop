import { Component } from '@angular/core';
import { ProdottiService } from '../../service/prodotti.service';
import { Ordini } from '../../model/ordini';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { ProdottoService } from '../../service/prodotto.service';

@Component({
  selector: 'app-prodotti',
  standalone: false,
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent {

  listProdotti : any;
  ListProdottiCercati : any;
  iduser : any;
  prodottoSchermata : boolean = false;

  constructor(private op : ProdottiService, private router : Router,private prodotto : ProdottoService)
  {  
  }

  ngOnInit(): void 
  {
    this.prodottoSchermata = false;
    //console.log(sessionStorage.getItem('user'));
    this.iduser = JSON.parse(localStorage.getItem('user')!).id_user;
    console.log(this.iduser);
    this.op.listProdotti().subscribe((res:any) => 
    {
      console.log("list",res);
      this.listProdotti = res;
      this.prodotto.setList(this.listProdotti);
    },error => console.log(error)
    );
    
  }


  addToCar(id : number)
  {
    let ordine = new Ordini(this.iduser,id);
    this.op.addOrdine(ordine).subscribe((res:any) => {
      console.log(res);
    },error => console.log(error));
    
    console.log(id);
  }

  search(event : any)
  {

    let cercare = event.target.value;
    if(!cercare)this.ListProdottiCercati = null;

    console.log(this.listProdotti);

    this.ListProdottiCercati = this.listProdotti.filter((prodotto: any) =>
      prodotto.nome_prodotti.toLowerCase().includes(cercare.toLowerCase()) 
    );

    
  }

  goToProdotto(id : any)
  {
    this.prodotto.setVisible();
    //console.log(this.prodottoSchermata)
    //console.log(this.prodottoSchermata);
    this.router.navigate(['homepage/prodotti',id]);
  }  

  getVisible()
  {
    return this.prodotto.getVisibile();
  }
}
