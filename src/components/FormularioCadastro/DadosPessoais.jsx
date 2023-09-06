import React, { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import ValidacoesCadastro from "../../contex/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState("");
  const [razaosocial, setRazaosocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, nascimento, phone, cpf, razaosocial, cnpj, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        name="nome"
        label="Nome"
        variant="filled"
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="filled"
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={nascimento}
        onChange={(event) => {
          setNascimento(event.target.value);
        }}
        id="date"
        name="nascimento"
        required
        type="date"
        variant="filled"
        label="Data de Nascimento"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        sx={{ m: 1, width: '25ch' }}
      />
      <TextField
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.phone.valido}
        helperText={erros.phone.texto}
        id="phone"
        name="phone"
        required
        variant="filled"
        type="number"
        label="Celular"
        margin="normal"
        sx={{ m: 1, width: '30ch' }}
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        required
        label="CPF"
        variant="filled"
        margin="normal"
        type="number"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={razaosocial}
        onChange={(event) => {
          setRazaosocial(event.target.value);
        }}
        id="nome"
        name="razaosocial"
        label="Razão social"
        variant="filled"
        margin="normal"
        fullWidth
        sx={{ m: 1 }}
      />
      <TextField
        value={cnpj}
        onChange={(event) => {
          setCnpj(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cnpj.valido}
        helperText={erros.cnpj.texto}
        id="cnpj"
        name="cnpj"
        required
        label="CNPJ"
        variant="filled"
        margin="normal"
        type="number"
        fullWidth
        sx={{ m: 1 }}
      />
      <FormControlLabel control={
        <Switch
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked)
          }}
          nome="promocoes"
          color="warning"
        />
      }
        label="Promoções"
        sx={{ m: 1 }}
      />
      <FormControlLabel control={
        <Switch
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked)
          }}
          nome="novidades"
          color="secondary"
        />
      }
        label="Novidades"
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
  );
}
export default DadosPessoais;