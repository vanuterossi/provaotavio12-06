////////----------------EXERCICIO 1-----------------------///////////
function primo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

/////////////---------------EXERCICIO 2-----------------------///////////////

function validarSenha(senha) {
  const TamanhoMinimo = senha.length >= 8;
  const LetraMaiuscula = /[A-Z]/.test(senha);
  const LetraMinuscula = /[a-z]/.test(senha);
  const TemNumero = /[0-9]/.test(senha);

  if (TamanhoMinimo & LetraMaiuscula & LetraMinuscula & TemNumero) {
    return "A senha é válida.";
  }

  let mensagem = "A senha não atende aos seguintes critérios:";
  if (!TamanhoMinimo) {
    mensagem += " deve ter pelo menos 8 caracteres;";
  }
  if (!LetraMaiuscula) {
    mensagem += " deve ter pelo menos uma letra maiúscula;";
  }
  if (!LetraMinuscula) {
    mensagem += " deve ter pelo menos uma letra minúscula;";
  }
  if (!TemNumero) {
    mensagem += " deve ter pelo menos um número;";
  }

  return mensagem;
}


////////////////----------------EXERCICIO 3--------------------////////////////

function calcularFatorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  }

  let fatorial = 1;

  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}


////////////////---------------EXERCICIO 4 ---------------------------//////////////////

function isQuadradoPerfeito(numero) {
  if (numero < 0) {
    return false;
  }

  const raizQuadrada = Math.sqrt(numero);
  return raizQuadrada = Math.floor(raizQuadrada);
}

// Exemplos de uso da função:
console.log(isQuadradoPerfeito(25)); // verdadeiro
console.log(isQuadradoPerfeito(26)); // falso
console.log(isQuadradoPerfeito(0)); // verdadeiro
console.log(isQuadradoPerfeito(-1)); // falso

