package com.example.shopbk.Service;

import com.example.shopbk.Model.Prodotti;
import com.example.shopbk.Model.User;
import com.example.shopbk.Repository.OrdiniRepository;
import com.example.shopbk.Repository.ProdottiRepository;
import com.example.shopbk.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class OperationAdminService
{
    @Value("${upload.path}")
    private String uploadDir;

    @Autowired
    ProdottiRepository prodottiRepository;
    @Autowired
    OrdiniRepository ordiniRepository;
    @Autowired
    UserRepository userRepository;


    public boolean isAdmin(int id_user)
    {
        User user = userRepository.findById(id_user);
        if(user.getRole() == null) return false;
        if(user.getRole().equals("ADMIN")) return true;
        else return false;
    }

    public List<Prodotti> listprodotti()
    {
        return  prodottiRepository.findAll();

    }

    public Prodotti insetprodotti(Prodotti prodotti)
    {
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        byte[] imgBytes = Base64.getDecoder().decode(prodotti.getImg_prodotti().split(",")[1]);

        String fileName = System.currentTimeMillis() + ".jpg";  // Usa .jpg o .png in base al tipo di immagine
        Path imagePath = Paths.get(uploadDir + File.separator + fileName);

        // Salva l'immagine su disco
        try {
            Files.write(imagePath, imgBytes);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        String imageUrl = "/images/" + fileName;

        Prodotti result = prodotti;
        result.setImg_prodotti(imageUrl);

        return prodottiRepository.save(result);

    }

    @Transactional
    public void deleteProdotti(int id,String imageUrl)
    {
        try {
            Path filePath = Paths.get(uploadDir  + imageUrl.substring(imageUrl.lastIndexOf("/")));
            System.out.println(filePath);
             if(Files.deleteIfExists(filePath) ) System.out.println("File deleted successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
        ordiniRepository.deleteById(id);
        prodottiRepository.deleteById(id);
    }

}
