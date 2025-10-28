package br.edu.ifpb.bancoDigital.controller;

import br.edu.ifpb.bancoDigital.config.security.SecurityConfig;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private SecurityConfig securityConfig;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        String cpf = body.get("cpf");
        String senha = body.get("senha");
        String bank = body.get("bank");

        boolean success = securityConfig.authenticate(cpf, senha, bank);

        if (success) {
            return Map.of(
                "success", true,
                "message", "Login bem-sucedido",
                "bank", bank
            );
        } else {
            return Map.of(
                "success", false,
                "message", "CPF ou senha incorretos"
            );
        }
    }
}
