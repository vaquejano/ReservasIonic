package com.example.demo.service;

import com.example.demo.model.Usuario;
import java.util.List;
import java.util.Optional;

public interface UsuarioService {

public List<Usuario> listaUsuarios();

public Optional<Usuario> getByIdUsuario(Integer codUsuario);

public Usuario salvaUsuario(Usuario usuario);

public Usuario atualizaUsuario(Usuario usuario);

public void deleteByIdUsuario(Integer codUsuario);

public Optional<Usuario> getByCpfUsuarioAndSenhaUsuario(String cpfUsuario, String senhaUsuario);
}