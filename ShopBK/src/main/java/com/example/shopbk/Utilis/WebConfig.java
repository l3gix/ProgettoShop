package com.example.shopbk.Utilis;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Definisci il percorso per accedere alle immagini
        registry.addResourceHandler("/images/**")  // Accedi tramite /images/
                .addResourceLocations("file:./uploads/products/");  // Percorso fisico delle immagini
    }
}
