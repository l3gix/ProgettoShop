import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminoperationService } from '../../service/adminoperation.service';
import { Prodotti } from '../../model/prodotti';

@Component({
  selector: 'app-adminnewprodotti',
  standalone: false,
  templateUrl: './adminnewprodotti.component.html',
  styleUrl: './adminnewprodotti.component.css'
})
export class AdminnewprodottiComponent {


    insertForm !: FormGroup;
    imageBase64 : String = '';
    //listprodotti : any;
    imgv : any = null;
    
    constructor(private op : AdminoperationService){ 
    this.insertForm = new FormGroup({
        nome_prodotti : new FormControl('',Validators.required),
        prezzo :new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/) ]) 
      });
    }

    submit()
    {
      let prodotti = new Prodotti(this.insertForm.value.nome_prodotti,this.insertForm.value.prezzo,String(this.imageBase64));
      console.log("prodotti",prodotti)
      this.op.insertProdotti(prodotti).subscribe((res:any) => {
        console.log(res)
        //this.imgv = res.img_prodotti;
        this.insertForm.reset();
      },error => console.log(error)
      );
    }

    
    onFileSelected(event: any): void {
        const file = event.target.files[0];
        this.imgv = file;
        this.convertFileToBase64(file);
      }

     // Converte il file in formato base64
    private convertFileToBase64(file: File)
    {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imageBase64 = reader.result as string;
    };
  }


    
} 
