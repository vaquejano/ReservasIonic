package com.example.demo.repository;
import com.example.demo.model.Empresa;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

    @Query("SELECT e FROM Empresa e WHERE e.cnpjEmpresa = :cnpjEmpresa AND e.senhaEmpresa = :senhaEmpresa")
    public Optional<Empresa> findByCnpjEmpresaAndSenhaEmpresa(String cnpjEmpresa, String senhaEmpresa);
 
    public static class findAll{

        public findAll(){ 
        
        }
    }   
}
