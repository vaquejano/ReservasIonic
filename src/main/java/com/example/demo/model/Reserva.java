package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reserva")

public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_reserva")
    private Integer codReserva;
    
    @ManyToOne
    @JoinColumn(name = "cod_usuario", referencedColumnName = "cod_usuario")
    private Usuario usuario;
    
    @ManyToOne
    @JoinColumn(name = "cod_mesa", referencedColumnName = "cod_mesa")
    private Mesa mesa;
    
    @ManyToOne
    @JoinColumn(name = "cod_empresa", referencedColumnName = "cod_empresa")
    private Empresa empresa;

    @Column(name = "situacao")
    private boolean situacao;

    public Reserva() {
    }
    
    
    public Reserva(Integer codReserva, Usuario usuario, Mesa mesa, Empresa empresa, boolean situacao) {
        this.codReserva = codReserva;
        this.usuario = usuario;
        this.mesa = mesa;
        this.empresa = empresa;
        this.situacao = situacao;
    }

    public Integer getCodReserva() {
        return codReserva;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public Mesa getMesa() {
        return mesa;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public boolean isSituacao() {
        return situacao;
    }

    public void setSituacao(boolean situacao) {
        this.situacao = situacao;
    }
    
    
    
    
    
    
    
    
    
}

