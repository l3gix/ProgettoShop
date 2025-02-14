package com.example.shopbk.Control;

import com.example.shopbk.Model.User;
import com.example.shopbk.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthControl
{
    private AuthService authService;
    @Autowired
    public AuthControl(AuthService authService){this.authService = authService;}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user)
    {
        try
        {
            User result = authService.login(user);
            return ResponseEntity.ok(result);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user)
    {
        try
        {
            User result = authService.register(user);
            return ResponseEntity.ok(result);
        } catch (IllegalArgumentException e ) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
