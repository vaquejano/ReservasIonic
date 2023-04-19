
package com.example.demo.repository;

import com.example.demo.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmpresaRepository extends JpaRepository <Empresa, Integer> {
    public static class findAll{

        public findAll(){ 
        
        }
    }   
}
