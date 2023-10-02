const { soma, subtracao, divisao, multiplicacao, media, percentual, maximo, minimo } = require('./contas.js');

test('Soma de dois números', () => {
  expect(soma(3, 5)).toBe(8);
});

test('Subtração de dois números', () => {
  expect(subtracao(8, 3)).toBe(5);
});

test('Divisão de dois números', () => {
  expect(divisao(6, 2)).toBe(3);
});

test('Multiplicação de dois números', () => {
  expect(multiplicacao(4, 7)).toBe(28);
});

test('Cálculo da média', () => {
  expect(media([2, 4, 6, 8, 10])).toBe(6);
});

test('Cálculo percentual', () => {
  expect(percentual(25, 50)).toBe(50);
});
test('valor máximo ', () => {
  expect(maximo([10, 5, 8, 20, 15])).toBe(20);
});

test('valor mínimo', () => {
  expect(minimo([10, 5, 8, 20, 15])).toBe(5);
});
