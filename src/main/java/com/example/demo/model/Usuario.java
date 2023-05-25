package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_usuario")
   private int codUsuario;
    @Column(name="nome_usuario")
   private String nomeUsuario;
    @Column(name="cpf_usuario")
   private String cpfUsuario;
    @Column(name="senha_usuario")
   private String senhaUsuario;
    @Column(name="email_usuario")
   private String emailUsuario;
    @Column(name="telefone_usuario")
   private String telefoneUsuario;
    
    public Usuario() {
    }

    public Usuario(int codUsuario, String nomeUsuario, String cpfUsuario, String senhaUsuario, String emailUsuario, String telefoneUsuario) {
        this.codUsuario = codUsuario;
        this.nomeUsuario = nomeUsuario;
        this.cpfUsuario = cpfUsuario;
        this.senhaUsuario = senhaUsuario;
        this.emailUsuario = emailUsuario;
        this.telefoneUsuario = telefoneUsuario;
    }

    public String getTelefoneUsuario() {
        return telefoneUsuario;
    }

    public void setTelefoneUsuario(String telefoneUsuario) {
        this.telefoneUsuario = telefoneUsuario;
    }

    public int getCodUsuario() {
        return codUsuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public String getCpfUsuario() {
        return cpfUsuario;
    }

    public String getSenhaUsuario() {
        return senhaUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public void setCpfUsuario(String cpfUsuario) {
        this.cpfUsuario = cpfUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

     
    }
