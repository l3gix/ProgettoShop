package com.example.shopbk.Control;


import com.example.shopbk.Model.Prodotti;
import com.example.shopbk.Service.OperationAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/opadmin")
@CrossOrigin
public class OperationAdminController
{
    private OperationAdminService operationAdminService;
    @Autowired
    public OperationAdminController(OperationAdminService operationAdminService){ this.operationAdminService = operationAdminService; }


    @GetMapping("/login")
    public ResponseEntity<?> isAdmin(@RequestParam int id)
    {
        try
        {
            boolean user = operationAdminService.isAdmin(id);
            return ResponseEntity.ok(user);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/listprodotti")
    public ResponseEntity<?> listprodotti()
    {
        try
        {
            List<Prodotti> prodotti = operationAdminService.listprodotti();
            return ResponseEntity.ok(prodotti);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }



    @PostMapping("/insertprodotti")
    public ResponseEntity<?> insertprodotti(@RequestBody Prodotti prodotti)
    {
        try
        {
            Prodotti result = operationAdminService.insetprodotti(prodotti);
            return ResponseEntity.ok(result);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/deleteprodotto")
    public ResponseEntity<?> deleteProdotti(@RequestParam int id, String img)
    {
        try
        {
            operationAdminService.deleteProdotti(id,img);
            return ResponseEntity.ok(true);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
