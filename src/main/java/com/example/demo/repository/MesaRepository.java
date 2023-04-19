
package com.example.demo.repository;

import com.example.demo.model.Mesa;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MesaRepository extends JpaRepository<Mesa, Integer> {
    
}
