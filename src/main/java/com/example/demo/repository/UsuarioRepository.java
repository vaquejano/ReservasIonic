package com.example.demo.repository;
import com.example.demo.model.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsuarioRepository extends JpaRepository <Usuario, Integer>{
    
    @Query("SELECT u FROM Usuario u WHERE u.cpfUsuario = :cpfUsuario AND u.senhaUsuario = :senhaUsuario")
    public Optional<Usuario> findByCpfUsuarioAndSenhaUsuario(String cpfUsuario, String senhaUsuario);
 
    public static class findAll{

        public findAll(){ 

        }
    }
}