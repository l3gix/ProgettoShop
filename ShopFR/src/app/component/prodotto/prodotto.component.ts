import { Component, viewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProdottoService } from '../../service/prodotto.service';

@Component({
  selector: 'app-prodotto',
  standalone: false,
  templateUrl: './prodotto.component.html',
  styleUrl: './prodotto.component.css'
})
export class ProdottoComponent {

  prodotto : any = null;

  id!: string;
  constructor(private route : ActivatedRoute,private pro : ProdottoService,private router : Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      console.log(this.id);
      this.prodotto = this.pro.searchInList(this.id);
      console.log("list nel componente " , this.prodotto);
    });
    
  }

  esc()
  {
    this.pro.setNoVisibile()
    this.router.navigate(['homepage/prodotti']);
  }
}
