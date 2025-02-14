package com.example.shopbk.Service;

import com.example.shopbk.Model.Ordini;
import com.example.shopbk.Model.OrdiniDTO;
import com.example.shopbk.Model.Prodotti;
import com.example.shopbk.Repository.OrdiniRepository;
import com.example.shopbk.Repository.ProdottiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OperationService
{
    @Autowired
    ProdottiRepository prodottiRepository;
    @Autowired
    OrdiniRepository ordiniRepository;

    public List<Prodotti> listprodotti()
    {
        return  prodottiRepository.findAll();

    }

    public Ordini addordine(Ordini ordini)
    {


        return ordiniRepository.save(ordini);
    }

    public List<OrdiniDTO> viewcarello(int id)
    {
        //List<OrdiniDTO> ordinidto = ordiniRepository.findOrdiniById_user(id_user);
        List<OrdiniDTO> ordinidto = ordiniRepository.findOrdiniDTOByUser(id);
        return ordinidto;

    }


    @Transactional
    public void detelteordine(int id)
    {
        ordiniRepository.deleteById(id);
    }
}
