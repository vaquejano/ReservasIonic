package com.example.demo.service;

import com.example.demo.model.Empresa;
import com.example.demo.repository.EmpresaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpresaServiceImpl implements EmpresaService{

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<Empresa> listaEmpresas(){
     return empresaRepository.findAll();
    }

    @Override
    public Optional<Empresa> getByIdEmpresa(Integer codEmpresa){
        return empresaRepository.findById(codEmpresa);
    }

    @Override
    public Empresa salvaEmpresa(Empresa empresa){
        return empresaRepository.save(empresa);
    }   

    @Override
    public Empresa atualizaEmpresa(Empresa empresa){
        return empresaRepository.save(empresa);
}

    @Override
    public void deleteByIdEmpresa(Integer codEmpresa){
        empresaRepository.deleteById(codEmpresa);
    }

    @Override
public Optional<Empresa> getByCnpjEmpresaAndSenhaEmpresa(String cnpjEmpresa, String senhaEmpresa) {
    return empresaRepository.findByCnpjEmpresaAndSenhaEmpresa(cnpjEmpresa, senhaEmpresa);
}

}
