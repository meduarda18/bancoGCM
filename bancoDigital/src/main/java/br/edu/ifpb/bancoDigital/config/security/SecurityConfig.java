package br.edu.ifpb.bancoDigital.config.security;

import org.springframework.stereotype.Component;

@Component
public class SecurityConfig {
    // Configuração de segurança
    public boolean authenticate(String cpf, String senha, String bank){
        return cpf.equals("123.456.789-00") && senha.equals("1234");
    }
}
