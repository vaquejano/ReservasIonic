
package com.example.demo.service;

import com.example.demo.model.Mesa;
import com.example.demo.repository.MesaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MesaServiceImpl implements MesaService{

    @Autowired
    private MesaRepository mesaRepository;
    
    @Override
    public List<Mesa> listaMesas(){
        return mesaRepository.findAll();   
    }
    @Override
    public Optional<Mesa> getByIdMesa(Integer codMesa){
        return mesaRepository.findById(codMesa);
    }

    @Override
    public Mesa salvaMesa(Mesa mesa){
        return mesaRepository.save(mesa);
    }   

    @Override
    public Mesa atualizaMesa(Mesa mesa){
        return mesaRepository.save(mesa);
}

    @Override
    public void deleteByIdMesa(Integer codMesa){
        mesaRepository.deleteById(codMesa);
}
}