function exercicio1() {
  let resposta = false;
  const entrada = prompt(
    "Digite um número inteiro para saber se é divisível por 2 ou 7: "
  );

  if (entrada.length === 0) {
    alert("Nada foi digitado");
    return;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("O texto digitado não é um número");
    return;
  }

  const divisivelPor2 = numero % 2 === 0;
  const divisivelPor7 = numero % 7 === 0;

  if (divisivelPor2 || divisivelPor7) {
    resposta = true;
  }

  alert(`O número ${numero} ${resposta ? "é" : "não é"} divisivel por 2 ou 7`);

  if (divisivelPor2) {
    alert("É divisivel por 2");
  }

  if (divisivelPor7) {
    alert("É divisivel por 7");
  }
}

function exercicio2() {
  let resposta = "";
  const entrada = prompt(
    "Digite um número de 1 a 7 para saber qual dia da semana corresponde: "
  );

  if (entrada.length === 0) {
    alert("Nada foi digitado");
    return;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("O texto digitado não é um número");
    return;
  }

  switch (numero) {
    case 1:
      resposta = "domingo";
      break;
    case 2:
      resposta = "segunda-feira";
      break;
    case 3:
      resposta = "terça-feira";
      break;
    case 4:
      resposta = "quarta-feira";
      break;
    case 5:
      resposta = "quinta-feira";
      break;
    case 6:
      resposta = "sexta-feira";
      break;
    case 7:
      resposta = "sábado";
      break;
    default:
      alert("O número deve estar entre 1 e 7");
      return;
  }

  alert(`O número ${numero} corresponde a(o): ${resposta}`);
}

function exercicio3() {
  let resposta = "";
  const entrada = prompt("Digite um número para calcular a tabuada: ");

  if (entrada.length === 0) {
    alert("Nada foi digitado");
    return;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("O texto digitado não é um número");
    return;
  }

  for (let i = 0; i <= 10; i++) {
    const produto = i * numero;
    resposta += `${numero} x ${i} = ${produto}\n`;
  }

  alert(`A tabuada do número ${numero} é: \n${resposta}`);
}

function exercicio4() {
  let resposta = 0;
  let precoPorFolha = 0.25;
  const entrada = prompt("Digite um número de folhas: ");

  if (entrada.length === 0) {
    alert("Nada foi digitado");
    return;
  }

  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("O texto digitado não é um número");
    return;
  }

  if (numero > 100) {
    precoPorFolha = 0.2;
  }

  resposta = precoPorFolha * numero;

  alert(
    `O total a ser pago por ${numero} folhas é: R$ ${resposta
      .toFixed(2)
      .replace(".", ",")}`
  );
}

function exercicio5() {
  const entradaSalario = prompt("Digite o salário de uma pessoa: ");

  if (entradaSalario.length === 0) {
    alert("Nada foi digitado");
    return;
  }

  const salario = parseFloat(entradaSalario);

  if (isNaN(salario)) {
    alert("O texto digitado não é um número");
    return;
  }

  if (salario < 0) {
    alert("O número deve ser positivo");
    return;
  }

  const entradaFinanciamento = prompt(
    "Digite o valor do financiamento pretendido: "
  );

  const financiamento = parseFloat(entradaFinanciamento);

  if (isNaN(financiamento)) {
    alert("O texto digitado não é um número");
    return;
  }

  if (financiamento < 0) {
    alert("O número deve ser positivo");
    return;
  }

  if (financiamento <= 5 * salario) {
    alert("Financiamento Concedido");
  } else {
    alert("Financiamento Negado");
  }

  alert(`Obrigado por nos consultar`);
}
