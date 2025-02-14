import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  list !: any;
  visible : boolean = false;
  constructor() { 

  }

  setList(list : any){this.list = list;}

  searchInList(id : any){
    if(this.list == null) return null;
    return this.list.find((a : any) => a.id_prodotti == id);
  }

  setVisible()
  {
    return this.visible =  true;
  }

  setNoVisibile()
  {
    return this.visible =  false;
  }

  getVisibile()
  {
    console.log(this.visible)
    return this.visible;
  }

}
