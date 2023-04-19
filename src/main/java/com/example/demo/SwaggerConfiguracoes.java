/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *
 * @Configuration
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguracoes {
    
    @Bean
    public Docket docket(){
     return new Docket(DocumentationType.SWAGGER_2)
             .useDefaultResponseMessages(false)
             .select()
             .apis(RequestHandlerSelectors
             .basePackage("com.example.demo.controller"))
             .paths(PathSelectors.any())
             .build()
             .apiInfo(apiInfo());
    }
    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
        .title("API - PARA RESERVA DE MESAS!")
        .description("API Para Reserva de Mesas!")
        .version("1.0")
        .termsOfServiceUrl("https://https://github.com/vaquejano")
        .license("Alunos Carlos Bergamo, Bruno Mecca, Lohan, Heinrick, Caio")
        .build();
    }
}
