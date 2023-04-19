package com.example.demo.controller;

import com.example.demo.model.Reserva;
import com.example.demo.service.ReservaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @GetMapping("/reservas")
    public ResponseEntity <List<Reserva>> listaReservas(){
        return ResponseEntity.status(HttpStatus.OK). body(reservaService.listaReservas());

}  
    @GetMapping("reserva/{codreserva}")
    public ResponseEntity<Optional<Reserva>> getByIdReserva(@PathVariable Integer codreserva){
        return ResponseEntity.status(HttpStatus.OK).body(reservaService.getByIdReserva(codreserva));
}

    @PostMapping("reserva")
    public ResponseEntity<Reserva> salvaReserva(@RequestBody Reserva reserva){
        return ResponseEntity.status(HttpStatus.CREATED).body(reservaService.salvaReserva(reserva));
}

    @PutMapping("reserva")
    public ResponseEntity<Reserva> atualizaReserva(@RequestBody Reserva reserva){
        return ResponseEntity.status(HttpStatus.OK).body(reservaService.atualizaReserva(reserva));
}

    @DeleteMapping("reserva/{codreserva}")
    public ResponseEntity<String> deleteByIdReserva(@PathVariable Integer codreserva){
        reservaService.deleteByIdReserva(codreserva);
        return ResponseEntity.status(HttpStatus.OK).body("Reserva removida com sucesso");
}

}
    
    

