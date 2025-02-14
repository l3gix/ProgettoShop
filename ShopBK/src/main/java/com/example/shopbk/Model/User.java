package com.example.shopbk.Model;


import jakarta.persistence.*;
import lombok.Data;
import org.springframework.core.annotation.AliasFor;
import org.springframework.data.repository.query.Param;

@Data
@Entity
@Table(name="utenti")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id_user;

    private String nome;
    private String cognome;
    private String username;
    private String password;
    private String role;


}
