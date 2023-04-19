package com.example.demo.service;

import com.example.demo.model.Reserva;
import com.example.demo.repository.ReservaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaServiceImpl implements ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;
    
    @Override
    public List<Reserva> listaReservas() {
        return reservaRepository.findAll();
    }
    
    @Override
    public Optional<Reserva> getByIdReserva(Integer codReserva) {
        return reservaRepository.findById(codReserva);
    }
    
    @Override
    public Reserva salvaReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }
    
    @Override
    public Reserva atualizaReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    public void deleteByIdReserva(Integer codReserva) {
        reservaRepository.deleteById(codReserva);
    }
    
 
    
    
    
    
    
    
    
    
    
    
}
    
    
    
    
