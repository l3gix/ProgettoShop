package com.example.shopbk.Model;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class OrdiniDTO
{
    private int id;
    private int id_user;
    private int id_prodotti;
    private String nome_prodotti;
    private double prezzo;
    private String img_prodotti;


    public OrdiniDTO (int id, int id_user, int id_prodotti, String nome_prodotti, double prezzo , String img_prodotti)
    {
        this.id = id;
        this.id_user = id_user;
        this.id_prodotti = id_prodotti;
        this.nome_prodotti = nome_prodotti;
        this.prezzo = prezzo;
        this.img_prodotti = img_prodotti;

    }
}
