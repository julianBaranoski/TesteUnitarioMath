const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const divisao = (a, b) => (b !== 0 ? a / b : "Divisão por zero não permitida");
const multiplicacao = (a, b) => a * b;

const media = (notes) => {
  const value = notes.reduce((acc, valor) => acc + valor, 0);
  return notes.length > 0 ? value / notes.length : 0;
};

const percentual = (valor, total) => (valor / total) * 100;

const maximo = (valores) => Math.max(...valores);
const minimo = (valores) => Math.min(...valores);

module.exports = { soma, subtracao, divisao, multiplicacao, media, percentual, maximo, minimo };
