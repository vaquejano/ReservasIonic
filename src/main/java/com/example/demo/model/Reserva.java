package com.example.demo.model;

import java.time.LocalDate;
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

    @Column(name = "quantidade_lugar")
    private double quantidadeLugar;

    @Column(name = "data_reserva")
    private LocalDate dataReserva;

    @Column(name = "horario")
    private String horario;

public Reserva() {
}

    public Reserva(Integer codReserva, Usuario usuario, Mesa mesa, Empresa empresa, double quantidadeLugar, LocalDate dataReserva, String horario) {
        this.codReserva = codReserva;
        this.usuario = usuario;
        this.mesa = mesa;
        this.empresa = empresa;
        this.quantidadeLugar = quantidadeLugar;
        this.dataReserva = dataReserva;
        this.horario = horario;
    }

    public void setCodReserva(Integer codReserva) {
        this.codReserva = codReserva;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void setMesa(Mesa mesa) {
        this.mesa = mesa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public void setQuantidadeLugar(double quantidadeLugar) {
        this.quantidadeLugar = quantidadeLugar;
    }

    public void setDataReserva(LocalDate dataReserva) {
        this.dataReserva = dataReserva;
    }

    public void setHorario(String horario) {
        this.horario = horario;
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

    public double getQuantidadeLugar() {
        return quantidadeLugar;
    }

    public LocalDate getDataReserva() {
        return dataReserva;
    }

    public String getHorario() {
        return horario;
    }

    }