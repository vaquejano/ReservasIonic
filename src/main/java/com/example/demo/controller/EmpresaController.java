
package com.example.demo.controller;

import com.example.demo.model.Empresa;
import com.example.demo.service.EmpresaService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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

public class EmpresaController {
    @Autowired
    private EmpresaService empresaService;

    @GetMapping("/empresas")
    @ApiOperation("Listar empresas")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Empresa encontrada"),
        @ApiResponse(code = 404, message = "Empresa não encontrada")
    })
    public ResponseEntity <List<Empresa>> listaEmpresas(){
        return ResponseEntity.status(HttpStatus.OK). body(empresaService.listaEmpresas());

    }  
    @GetMapping("empresa/{codempresa}")
    @ApiOperation("Codigo id da empresa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Código de empresa encontrado!"),
        @ApiResponse(code = 404, message = "Código de empresa nao encontrado!")
    })
    public ResponseEntity<Optional<Empresa>> getByIdEmpresa(@PathVariable Integer codempresa){
        return ResponseEntity.status(HttpStatus.OK).body(empresaService.getByIdEmpresa(codempresa));
    }

    @PostMapping("empresa")
    @ApiOperation("Salvar dados da empresa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Dados da empresa salvo com sucesso"),
        @ApiResponse(code = 404, message = "Erro ao salvar os dados da empresa")
    })
    public ResponseEntity<Empresa> salvaEmpresa(@RequestBody Empresa empresa){
        return ResponseEntity.status(HttpStatus.CREATED).body(empresaService.salvaEmpresa(empresa));
    }

    @PutMapping("empresa")
    @ApiOperation("Atualizar Dados da empresa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Dados da empresa atualizados com sucesso"),
        @ApiResponse(code= 404, message = "Erro ao atualizar dados da empresa")
    })
    public ResponseEntity<Empresa> atualizaEmpresa(@RequestBody Empresa empresa){
        return ResponseEntity.status(HttpStatus.OK).body(empresaService.atualizaEmpresa(empresa));
    }

    @DeleteMapping("empresa/{codempresa}")
    @ApiOperation("Deletar empresa")
    @ApiResponses({
        @ApiResponse(code = 200, message = "Empresa deletada com sucesso"),
        @ApiResponse(code = 404, message = "Erro ao deletar a empresa")
    })
    public ResponseEntity<String> deleteByIdEmpresa(@PathVariable Integer codempresa){
        empresaService.deleteByIdEmpresa(codempresa);
        return ResponseEntity.status(HttpStatus.OK).body("Empresa removida com sucesso");
    }

}