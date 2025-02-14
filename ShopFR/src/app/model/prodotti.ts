export class Prodotti{

    private nome_prodotti !: string;
    private prezzo !: number;
    private img_prodotti !: string;

    constructor(nome_prodotti : string, prezzo : number, img_prodotti : string)
    {
        this.nome_prodotti = nome_prodotti;
        this.prezzo = prezzo;
        this.img_prodotti = img_prodotti;
    }

    getNome_prodotti(){ return this.nome_prodotti; }
    getPrezzo(){ return this.prezzo; }
    getImg_prodotti(){ return this.img_prodotti; }


}