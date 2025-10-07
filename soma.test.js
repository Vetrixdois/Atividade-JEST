// Importa a função que queremos testar
const soma = require('./soma');

// 'describe' agrupa testes relacionados, dando um nome claro ao conjunto.
describe('Função soma', () => {
  // 'test' ou 'it' define um caso de teste individual.
  test('deve retornar 3 ao somar 1 e 2', () => {
    // expect(valor) -> O valor que você quer testar.
    // .toBe(valor_esperado) -> Um "matcher" (comparador) do Jest.
    expect(soma(1, 2)).toBe(3);
  });

  test('deve funcionar corretamente com números negativos, -1 e -2 devem somar -3', () => {
    expect(soma(-1, -2)).toBe(-3);
  });

  test('deve retornar o primeiro número quando o segundo for zero', () => {
    expect(soma(10, 0)).toBe(10);
  });

  test('deve retornar zero quando somar números opostos, como 5 e -5', () => {
    expect(soma(5, -5)).toBe(0);
  });
});
