package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity
@Table(name="empresa")
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_empresa")
   private int codEmpresa;
    @Column(name="nome_fantasia")
   private String nomeFantasia;
    @Column(name="cnpj_Empresa")
   private String cnpjEmpresa;
    @Column(name="senha_empresa")
   private String senhaEmpresa;
    @Column(name="email_empresa")
   private String emailEmpresa;
    @Column(name="ramo_empresa")
   private String ramoEmpresa;
    @Column(name="porte_empresa")
   private String porteEmpresa;

    public Empresa() {
}
    
   
    public Empresa(int codEmpresa, String nomeFantasia, String cnpjEmpresa, String emailEmpresa, String senhaEmpresa, String ramoEmpresa, String porteEmpresa) {
        this.codEmpresa = codEmpresa;
        this.nomeFantasia = nomeFantasia;
        this.cnpjEmpresa= cnpjEmpresa;
        this.senhaEmpresa = senhaEmpresa;
        this.emailEmpresa = emailEmpresa;
        this.ramoEmpresa = ramoEmpresa;
        this.porteEmpresa = porteEmpresa;
}

    public int getCodEmpresa() {
        return codEmpresa;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public String getCnpjEmpresa() {
        return cnpjEmpresa;
    }

    public String getSenhaEmpresa() {
        return senhaEmpresa;
    }

    public String getEmailEmpresa() {
        return emailEmpresa;
    }

    public String getRamoEmpresa() {
        return ramoEmpresa;
    }

    public String getPorteEmpresa() {
        return porteEmpresa;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public void setCnpjEmpresa(String cnpjEmpresa) {
        this.cnpjEmpresa = cnpjEmpresa;
    }

    public void setSenhaEmpresa(String senhaEmpresa) {
        this.senhaEmpresa = senhaEmpresa;
    }

    public void setEmailEmpresa(String emailEmpresa) {
        this.emailEmpresa = emailEmpresa;
    }

    public void setRamoEmpresa(String ramoEmpresa) {
        this.ramoEmpresa = ramoEmpresa;
    }

    public void setPorteEmpresa(String porteEmpresa) {
        this.porteEmpresa = porteEmpresa;
    }


}
