package com.example.shopbk.Service;


import com.example.shopbk.Model.User;
import com.example.shopbk.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;

    public User login(User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("user is null");
        }
        User userfound = userRepository.findByUsername(user.getUsername());
        if(userfound != null)
        {
            if(userfound.getPassword().equals(user.getPassword()))return userfound;
            else
            {
                throw new IllegalArgumentException("password error");
            }
        }else
        {
            throw new IllegalArgumentException("user not found");
        }
    }

    public User register (User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("user is null");
        }
        if(userRepository.findByUsername(user.getUsername()) != null)
        {
            throw new IllegalArgumentException("username already exists");
        }
        return userRepository.save(user);
    }
}
