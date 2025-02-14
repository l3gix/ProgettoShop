package com.example.shopbk.Repository;

import com.example.shopbk.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer>
{
    User findByUsername(String username);
    User findById(@Param("id_user") int id_user);
}
