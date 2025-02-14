package com.example.shopbk.Repository;

import com.example.shopbk.Model.Ordini;
import com.example.shopbk.Model.OrdiniDTO;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrdiniRepository extends JpaRepository<Ordini, Integer>
{

    @Query("SELECT new com.example.shopbk.Model.OrdiniDTO(o.id,o.id_user,o.id_prodotti,p.nome_prodotti,p.prezzo,p.img_prodotti ) FROM Ordini o JOIN Prodotti p ON o.id_prodotti = p.id_prodotti WHERE o.id_user = :userId ")
    List<OrdiniDTO>  findOrdiniDTOByUser(Integer userId);


    @Transactional
    void deleteById(@Param("id_prodotti")int id_prodotti);
}
