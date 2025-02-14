package com.example.shopbk.Repository;

import com.example.shopbk.Model.Prodotti;
import jdk.dynalink.Operation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdottiRepository extends JpaRepository<Prodotti, Integer>
{

}
