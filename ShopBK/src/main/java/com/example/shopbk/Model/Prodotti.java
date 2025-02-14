package com.example.shopbk.Model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="prodotti")
public class Prodotti {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id_prodotti;

    private String nome_prodotti;
    private double prezzo;
    private String img_prodotti;

}
