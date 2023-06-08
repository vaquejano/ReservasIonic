package com.example.demo.service;

import com.example.demo.model.Empresa;
import java.util.List;
import java.util.Optional;

public interface EmpresaService {
    public List<Empresa> listaEmpresas();
    
    public Optional<Empresa> getByIdEmpresa(Integer codEmpresa);

    public Empresa salvaEmpresa(Empresa empresa);

    public Empresa atualizaEmpresa(Empresa empresa);

    public void deleteByIdEmpresa(Integer codEmpresa);

    public Optional<Empresa> getByCnpjEmpresaAndSenhaEmpresa(String cnpjEmpresa, String senhaEmpresa);
}
