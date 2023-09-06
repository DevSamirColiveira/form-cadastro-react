function validarCPF(cpf) {
  if(cpf.length !== 11){
    return {valido:false, texto:"O CPF deve conter 11 dígitos."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarCNPJ(cnpj) {
  if(cnpj.length !== 14){
    return {valido:false, texto:"O CNPJ deve conter 14 dígitos."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarCEP(cep) {
  if(cep.length !== 8){
    return {valido:false, texto:"O CEP deve conter 8 dígitos."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarSenha(senha) {
  if(senha.length < 4 || senha.length > 64){
    return {valido:false, texto:"A senha deve ter 4 e 64 dígitos."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarCelular(phone) {
  if(phone.length !== 10){
    return {valido:false, texto:"O celular de deve ter 10 dígitos."}
  } else {
    return {valido:true, texto:""}
  }
}

export {validarCPF, validarCNPJ, validarCEP, validarSenha, validarCelular};