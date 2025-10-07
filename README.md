# Exercício: Testando uma Função Simples de Soma com Jest

Este projeto demonstra como implementar testes unitários básicos usando Jest para uma função simples de soma.

## 📁 Estrutura do Projeto

```
jest-iniciante/
├── package.json      # Configurações do projeto e dependências
├── soma.js          # Função que será testada
├── soma.test.js     # Arquivo de testes
└── README.md        # Este arquivo
```

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar os Testes
```bash
npm test
```

### 3. Executar Testes em Modo Watch (opcional)
```bash
npm run test:watch
```

### 4. Executar Testes com Coverage (opcional)
```bash
npm run test:coverage
```

## 📋 Casos de Teste Implementados

A função `soma(a, b)` é testada com os seguintes cenários:

1. **Soma básica**: `1 + 2 = 3`
2. **Números negativos**: `-1 + (-2) = -3`
3. **Soma com zero**: `10 + 0 = 10`
4. **Números opostos**: `5 + (-5) = 0`

## 🧪 Conceitos de Teste Demonstrados

- **`describe()`**: Agrupa testes relacionados
- **`test()` ou `it()`**: Define um caso de teste individual
- **`expect()`**: Função para fazer asserções
- **`.toBe()`**: Matcher para comparação de igualdade
- **Módulos CommonJS**: `require()` e `module.exports`

## 🎯 Desafio Sugerido

Para entender como o Jest detecta falhas:

1. Modifique a função em `soma.js`:
   ```javascript
   function soma(a, b) {
      return a - b; // Mude de + para -
   }
   ```

2. Execute os testes novamente:
   ```bash
   npm test
   ```

3. Observe como o Jest mostra exatamente quais testes falharam e por quê!

## 📊 Resultado Esperado (Testes Passando)

```
PASS  ./soma.test.js
  Função soma
✓ deve retornar 3 ao somar 1 e 2 (2ms)
✓ deve funcionar corretamente com números negativos, -1 e -2 devem somar -3 (0ms)
✓ deve retornar o primeiro número quando o segundo for zero (0ms)
✓ deve retornar zero quando somar números opostos, como 5 e -5 (0ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        ... s
Ran all test suites.
```

## 🔧 Próximos Passos

- Adicione mais casos de teste (números decimais, strings, etc.)
- Implemente testes para outras funções matemáticas
- Explore outros matchers do Jest (`.toBeGreaterThan()`, `.toContain()`, etc.)
- Aprenda sobre mocks e spies para testes mais avançados
