import { Component } from '@angular/core';
import { ProdottiService } from '../../service/prodotti.service';

@Component({
  selector: 'app-carello',
  standalone: false,
  templateUrl: './carello.component.html',
  styleUrl: './carello.component.css'
})
export class CarelloComponent {

  listCarello !: any;
  gruppiPerProdotto : any;

  constructor(private op : ProdottiService){}
  ngOnInit(): void {
    
    let id_user = JSON.parse(localStorage.getItem('user')!).id_user;
    console.log(id_user);

    this.op.viewCarello(id_user).subscribe((res:any) => {
      console.log(res);
      this.listCarello = res;
      console.log("lista " ,this.listCarello);
      this.gruppiPerProdotto = [];
      
      // this.gruppiPerProdotto = this.listCarello.reduce((acc : any, prodotto : any) => {
      //   // Se il gruppo per id_prodotti non esiste, lo creiamo
      //   if (!acc[prodotto.id_prodotti]) {
      //     acc[prodotto.id_prodotti] = [];
      //   }
      //   // Aggiungiamo l'oggetto prodotto al gruppo
      //   acc[prodotto.id_prodotti].push(prodotto.id_prodotti);
      //   acc[prodotto.nome_prodotti].push(prodotto.id_nome_prodotti);
      //   acc[prodotto.prezzo].push(prodotto.prezzo);
      //   return acc;
      // }, {});
      this.raggruppaPerProdotto();

      //console.log(this.gruppiPerProdotto);

      this.prova();
      
    },error => console.log(error));


  }

  raggruppaPerProdotto() {
    this.gruppiPerProdotto = this.listCarello.reduce((acc : any, prodotto : any) => {
      const key = prodotto.id_prodotti; // Chiave di raggruppamento
  
      if (!acc[key]) {
        acc[key] = {
          id_prodotti: prodotto.id_prodotti,
          nome_prodotti: prodotto.nome_prodotti,
          prezzo: prodotto.prezzo,
          img_prodotti: prodotto.img_prodotti,
          prodotti: [] // Array per raggruppare tutti gli elementi con lo stesso id_prodotti
        };
      }
  
      acc[key].prodotti.push(prodotto); // Aggiunge il prodotto al gruppo corrispondente
      return acc;
    }, {});

    this.gruppiPerProdotto = Object.entries(this.gruppiPerProdotto);
  }

  prova()
  {
    console.log(this.gruppiPerProdotto);
  }

  delteOrdine(id : number)
  {
    this.op.deleteOrdine(id).subscribe((res:any) => {
      console.log(res);
      this.listCarello = this.listCarello.filter((prodotto : any) => prodotto.id != id);
      this.raggruppaPerProdotto();
    },error => console.log(error));
  }

  getSaldoTotale()
  {
    let totale = 0;
    if (this.listCarello == null) return 0;
    this.listCarello.forEach((prodotto : any) => totale += prodotto.prezzo);
    return totale;
  }

  
}
