package com.example.shopbk.Control;

import com.example.shopbk.Model.Ordini;
import com.example.shopbk.Model.OrdiniDTO;
import com.example.shopbk.Model.Prodotti;
import com.example.shopbk.Service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/op")
@CrossOrigin
public class OperationController
{
    private OperationService operationService;
    @Autowired
    public OperationController (OperationService operationService) { this.operationService = operationService; }

    @GetMapping("/listprodotti")
    public ResponseEntity<?> listprodotti()
    {
        try
        {
            List<Prodotti> prodotti = operationService.listprodotti();
            return ResponseEntity.ok(prodotti);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/addordine")
    public ResponseEntity<?> addordine (@RequestBody Ordini ordini)
    {
        try
        {
            Ordini result = operationService.addordine(ordini);
            return ResponseEntity.ok(result);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("/viewcarello")
    public ResponseEntity<?>  viewcarello (@RequestParam int id)
    {
        try
        {
            List<OrdiniDTO> result = operationService.viewcarello(id);
            return ResponseEntity.ok(result);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/detelteordine")
    public ResponseEntity<?> detelteordine (@RequestParam int id)
    {
        try
        {
             operationService.detelteordine(id);
            return ResponseEntity.ok(true);
        }catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
