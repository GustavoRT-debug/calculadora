![Workflow Status](https://github.com/GustavoRT-debug/C214-LAB/actions/workflows/main.yml/badge.svg)
# Calculadora Básica e Testes Unitários

Este repositório contém uma implementação simples de uma calculadora básica em TypeScript, juntamente com testes unitários usando Jest.

## Estrutura do Projeto

O projeto é organizado da seguinte maneira:

- `Interface_Calculator.ts`: Define a interface `Calculator` e a classe `BasicCalculator` que implementa essa interface.
- `MockCalculator.ts`: Fornece uma classe de teste mock para fins de teste.
- `calculator_tests.spec.ts`: Contém os testes unitários para a `BasicCalculator` e a `MockCalculator`.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter o Node.js e o TypeScript instalados globalmente em seu sistema.

## Como Executar

Siga as etapas abaixo para executar o projeto:

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/calculadora-basica.git

## Navegue até o diretório do projeto:

cd calculadora-basica

## Instale as dependências:

npm install

## Instale as definições de tipos TypeScript para as bibliotecas prop-types, react e scheduler:

npm install --save-dev @types/prop-types
npm install --save-dev @types/react
npm install --save-dev @types/scheduler

## Compilação do TypeScript
tsc calculator_tests.ts

## Execução do JavaScript
node calculator_tests.js

## Execute os testes:

npm test

## Notas Adicionais

O arquivo Interface_Calculator.ts contém a definição da interface Calculator e a implementação da classe BasicCalculator.
O arquivo MockCalculator.ts fornece uma implementação de mock da calculadora para testes.
```
