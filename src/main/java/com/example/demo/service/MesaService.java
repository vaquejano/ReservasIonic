
package com.example.demo.service;

import com.example.demo.model.Mesa;
import java.util.List;
import java.util.Optional;


public interface MesaService {
    public List<Mesa> listaMesas();

    public Optional<Mesa> getByIdMesa(Integer codMesa);

    public Mesa salvaMesa(Mesa mesa);

    public Mesa atualizaMesa(Mesa mesa);

    public void deleteByIdMesa(Integer codMesa);  
}
