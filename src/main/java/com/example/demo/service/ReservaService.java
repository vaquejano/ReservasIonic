package com.example.demo.service;

import com.example.demo.model.Reserva;
import java.util.List;
import java.util.Optional;

public interface ReservaService {
    public List<Reserva> listaReservas(); 
    
    public Optional<Reserva> getByIdReserva(Integer codReserva);
    
    public Reserva salvaReserva(Reserva reserva);
    
    public Reserva atualizaReserva(Reserva reserva);
    
    public void deleteByIdReserva(Integer codReserva); 
        
   }
