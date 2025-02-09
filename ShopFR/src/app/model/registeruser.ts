export class RegisterUser{
    private username !: string;
    private password !: string;
    private nome !: string;
    private cognome !: string;

    constructor(username: string, password: string, nome: string, cognome: string) {
        this.username = username;
        this.password = password;
        this.nome = nome;
        this.cognome = cognome;
    }

    getUsername() {
        return this.username;
    }   

    getPassword() {  
        return this.password;
    }

    getNome() {
        return this.nome;
    }

    getCognome() {
        return this.cognome;
    }
}