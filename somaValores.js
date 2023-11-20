const somaValores = (numero) => { // Função que soma os valores divisíveis por 3 ou 5 inferiores ao número escolhido
  let soma = 0;

  for(let counter = 0; counter < numero; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      soma += counter;
    }
  }

  return soma;
}


const numero = process.argv[2]; // Recebe número como argumento


if (numero !== undefined && numero !== null && numero !== "") {
  // Converte o argumento para um número inteiro
  const numeroInteiro = parseInt(numero);

  if(numeroInteiro < 0) {
    console.log("Por favor, forneça um número inteiro positivo como argumento.");
    return;
  }

  if (!isNaN(numeroInteiro)) {
    const resultado = somaValores(numeroInteiro);
    console.log(resultado);
  } else {
    console.log("Por favor, forneça um número inteiro válido como argumento.");
  }
} else {
  console.log("Por favor, forneça um número inteiro como argumento.");
}


