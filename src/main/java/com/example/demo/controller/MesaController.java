package com.example.demo.controller;

import com.example.demo.model.Mesa;
import com.example.demo.service.MesaService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins="*", maxAge = 3600)

public class MesaController {

    @Autowired
    private MesaService mesaService;

    @GetMapping("/mesas")
    @ApiOperation("Listagem de mesa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Mesa liberada"),
        @ApiResponse(code = 404, message = "Mesa Bloqueada")
    })
    public ResponseEntity<List<Mesa>> listaMesas() {
        return ResponseEntity.status(HttpStatus.OK).body(mesaService.listaMesas());
    }

    @GetMapping("mesa/{codmesa}")
    @ApiOperation("Verificação de mesa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Código mesa encontrada"),
        @ApiResponse(code = 404, message = "Código mesa não encontrado")
    })
    public ResponseEntity<Optional<Mesa>> getByIdMesa(@PathVariable Integer codmesa) {
        return ResponseEntity.status(HttpStatus.OK).body(mesaService.getByIdMesa(codmesa));
    }

    @PostMapping("mesa")
    @ApiOperation("Verificação de liberação")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Mesa disponivel"),
        @ApiResponse(code = 404, message = "Mesa indisponivel")
    })
    public ResponseEntity<Mesa> salvaMesa(@RequestBody Mesa mesa) {
        return ResponseEntity.status(HttpStatus.CREATED).body(mesaService.salvaMesa(mesa));
    }

    @PutMapping("mesa")
    @ApiOperation("Atualização de informação da mesa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Mesa atualizada"),
        @ApiResponse(code = 404, message = "Mesa Padrão")
    })
    public ResponseEntity<Mesa> atualizaMesa(@RequestBody Mesa mesa) {
        return ResponseEntity.status(HttpStatus.OK).body(mesaService.atualizaMesa(mesa));
    }

    @DeleteMapping("mesa/{codmesa}")
    @ApiOperation("Exclusão de mesa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Exclusão de mesa"),
        @ApiResponse(code = 404, message = "Mesa não excluida")
    })
    public ResponseEntity<String> deleteByIdMesa(@PathVariable Integer codmesa) {
        mesaService.deleteByIdMesa(codmesa);
        return ResponseEntity.status(HttpStatus.OK).body("Mesa removida com sucesso");
    }
}
