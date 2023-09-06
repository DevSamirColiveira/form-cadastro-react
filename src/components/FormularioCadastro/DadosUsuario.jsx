import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contex/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
        id="email"
        name="email"
        label="E-mail"
        type="email"
        variant="filled"
        placeholder="Digite um e-mail válido"
          multiline
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        placeholder="Sua senha"
          multiline
        variant="filled"
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <Button
        type="submit"
        sx={{ m: 1 }}
        size="large"
        variant="contained">
        Proximo
      </Button>
    </form>
  )
}

export default DadosUsuario;