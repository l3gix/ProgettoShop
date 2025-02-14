package com.example.shopbk.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="ordini")
public class Ordini {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;


    private int id_user;
    private int id_prodotti;
}
