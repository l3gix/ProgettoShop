export class Ordini {

    private id_user !: number;
    private id_prodotti !: number;

    constructor(id_user: number, id_prodotti: number) {
        this.id_user = id_user;
        this.id_prodotti = id_prodotti;
    }

    getId_user(): number {
        return this.id_user;
    }

    getId_prodotti(): number {        
        return this.id_prodotti;
    }

}