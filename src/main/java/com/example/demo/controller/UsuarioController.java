package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*", maxAge = 3600)

public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/usuarios")
    @ApiOperation("Listar Usuarios")
    @ApiResponses({
        @ApiResponse(code=200,message="Lista de Usuarios Encontrado"),
        @ApiResponse(code=404,message="Lista Usuario Nao Encontrado")
    })
    public ResponseEntity <List<Usuario>> listaUsuarios(){
        return ResponseEntity.status(HttpStatus.OK). body(usuarioService.listaUsuarios());
    }
   
    @GetMapping("/usuario/{codusuario}")
    @ApiOperation("Codigo id do usuario")
    @ApiResponses({
        @ApiResponse(code=200,message="Usuario Encontrado"),
        @ApiResponse(code=404,message="Usuario Nao Encontrado")
    })
    public ResponseEntity<Optional<Usuario>> getByIdUsuario(@PathVariable Integer codusuario){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.getByIdUsuario(codusuario));
    }
    
    @PostMapping("/usuario")
    @ApiOperation("Salvar dados do usuario")
    @ApiResponses({
        @ApiResponse(code=200,message="Usuario Salvo Com Maestria"),
        @ApiResponse(code=404,message="Nao Foi Possivel Salvar Usuario")
    })
    public ResponseEntity<Usuario> salvaUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.salvaUsuario(usuario));
    }
    
    @PutMapping("/usuario")
    @ApiOperation("Atualizar Dados do usuario")
    @ApiResponses({
        @ApiResponse(code=200,message="Dados do usuario atualizado com sucesso"),
        @ApiResponse(code=404,message="Erro ao atualizar dados do usuario")
    })
    public ResponseEntity<Usuario> atualizaUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.atualizaUsuario(usuario));
    }
    
    @DeleteMapping("/usuario/{codusuario}")
    @ApiOperation("Deletar usuario")
    @ApiResponses({
        @ApiResponse(code=200,message="Usuario deletado com sucesso"),
        @ApiResponse(code=404,message="Erro ao deletar o usuario")
    })
    public ResponseEntity<String> deleteByIdUsuario(@PathVariable Integer codusuario){
        usuarioService.deleteByIdUsuario(codusuario);
        return ResponseEntity.status(HttpStatus.OK).body("Usuario removido com sucesso");
    }
    
   @PostMapping("/loginusuario")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Login realizado com sucesso"),
        @ApiResponse(code = 401, message = "Credenciais inválidas")
    })
    public ResponseEntity<Usuario> getByCpfUsuarioAndSenhaUsuario(@RequestBody Usuario usuario) {
        String cpfUsuario = usuario.getCpfUsuario();
        String senhaUsuario = usuario.getSenhaUsuario();

        Optional<Usuario> optionalUsuario = usuarioService.getByCpfUsuarioAndSenhaUsuario(cpfUsuario, senhaUsuario);

        if (optionalUsuario.isPresent()) {
            Usuario usuarioLogado = optionalUsuario.get();

            return ResponseEntity.ok().body(usuarioLogado);
        } else {
            return ResponseEntity.ok().body(null);
        }
    }
}

