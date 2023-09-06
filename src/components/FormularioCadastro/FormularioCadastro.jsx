import React, { useEffect, useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntega aoEnviar={coletarDados} />,
    <Typography mt={5} variant="h5">Obrigado pelos seu Cadastro</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoais</StepLabel></Step>
        <Step><StepLabel>Entega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;