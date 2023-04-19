package com.example.demo.repository;

import com.example.demo.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository <Usuario, Integer>{
    public static class findAll{
        
        public findAll(){
            
        }
    }
}
