import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import useErros from "../../hooks/useErros";
import ValidacoesCadastro from "../../contex/ValidacoesCadastro";

function DadosEntega({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const validacoes = useContext(ValidacoesCadastro)
  const[erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ cep, endereco, numero, complemento, cidade, estado });
        }
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
        id="cep"
        name="cep"
        required
        label="CEP"
        type="number"
        placeholder="Qual cep?"
          multiline
        variant="filled"
        margin="normal"
        sx={{ m: 1 }}
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        name="endereco"
        label="Endereço"
        placeholder="Seu endereço"
          multiline
        type="text"
        variant="filled"
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        name="numero"
        label="Número"
        type="text"
        variant="filled"
        placeholder="Seu numero"
          multiline
        margin="normal"
        sx={{ m: 1, width: '15ch' }}
      />
      <TextField
        value={complemento}
        onChange={(event) => {
          setComplemento(event.target.value);
        }}
        id="complemento"
        name="complemento"
        label="Complemento"
        placeholder="Tem complemento?"
          multiline
        type="text"
        variant="filled"
        margin="normal"
        sx={{ m: 1, width: '42ch' }}
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        variant="filled"
        placeholder="Sua cidade"
          multiline
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="Estado"
        name="estado"
        label="Estado"
        type="text"
        variant="filled"
        placeholder="Seu estado"
          multiline
        margin="normal"
        sx={{ m: 1 }}
      />
      <Button
        type="submit"
        sx={{ m: 1 }}
        size="large"
        fullWidth
        variant="contained">
        Finalizar o Cadastro
      </Button>
    </form>
  )
}
export default DadosEntega;