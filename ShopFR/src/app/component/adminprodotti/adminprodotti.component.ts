import { Component } from '@angular/core';
import { AdminoperationService } from '../../service/adminoperation.service';

@Component({
  selector: 'app-adminprodotti',
  standalone: false,
  templateUrl: './adminprodotti.component.html',
  styleUrl: './adminprodotti.component.css'
})
export class AdminprodottiComponent {

  listProdotti !: any;
  listProdottiCercati : any;
  iduser : any;

  constructor(private op : AdminoperationService)
  {  
  }

  ngOnInit(): void 
  {

    //console.log(sessionStorage.getItem('user'));
    this.iduser = JSON.parse(localStorage.getItem('user')!).id_user;
    console.log(this.iduser);
    this.op.listProdotti().subscribe((res:any) => 
    {
      console.log("list",res);
      this.listProdotti = res;
    },error => console.log(error)
    );
    
  }

  deleteProdotto(id : number, img : string)
  {
    this.op.deleteProdotto(id,img).subscribe((res:any) => {
      console.log(res);
      this.listProdotti = this.listProdotti.filter((prodotto : any) => prodotto.id_prodotti != id);
    },error => console.log(error));
  }

  search(event : any)
  {

    let cercare = event.target.value;
    if(!cercare)this.listProdottiCercati = null;

    console.log(this.listProdotti);

    this.listProdottiCercati = this.listProdotti.filter((prodotto: any) =>
      prodotto.nome_prodotti.toLowerCase().includes(cercare.toLowerCase()) 
    );

    
  }

}
