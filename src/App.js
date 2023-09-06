import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/400.css';

import ValidacoesCadastro from "./contex/ValidacoesCadastro";
import { validarCPF, validarCNPJ, validarCEP, validarSenha, validarCelular } from "./models/cadastro"

class App extends Component {
  render() {
    return (
      <Container
        component="article"
        maxWidth="sm">

        <Typography
          variant="h3"
          mt={2}
          component="h1"
          align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, cnpj: validarCNPJ, cep: validarCEP, senha: validarSenha, phone: validarCelular }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
