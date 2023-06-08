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
@Table(name = "mesa")
public class Mesa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_mesa")
    private Integer codMesa;

    @ManyToOne
    @JoinColumn(name = "cod_empresa", referencedColumnName = "cod_empresa")
    private Empresa empresa;

    @Column(name = "quantidade_lugar")
    private double quantidadeLugar;

    @Column(name = "disponivel")
    private boolean disponivel;

    public Mesa(Integer codMesa, Empresa empresa, double quantidadeLugar, boolean disponivel) {
        this.codMesa = codMesa;
        this.empresa = empresa;
        this.quantidadeLugar = quantidadeLugar;
        this.disponivel = disponivel;
    }

    public Integer getCodMesa() {
        return codMesa;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public double getQuantidadeLugar() {
        return quantidadeLugar;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setCodMesa(Integer codMesa) {
        this.codMesa = codMesa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public void setQuantidadeLugar(double quantidadeLugar) {
        this.quantidadeLugar = quantidadeLugar;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }


    }