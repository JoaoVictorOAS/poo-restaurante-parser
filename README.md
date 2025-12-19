
# Trabaho de Programação Orientada a Objetos (POO)


---

## 🚀 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [ts-node](https://www.npmjs.com/package/ts-node) (para execução direta de arquivos TS)

---

## 📂 Estrutura de Arquivos Recomendada

Para organizar o projeto, recomenda-se a seguinte estrutura:

```text
projeto-poo/
├── src/
│   ├── questao1.ts   # Código da solução do Restaurante
│   └── questao2.ts   # Código da solução do Parser de Dados
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🛠️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento (Windows ou Linux).

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** instalado. Você pode verificar digitando no terminal:

```bash
node -v

```

### 2. Inicializar o Projeto

Abra o terminal na pasta onde deseja criar o projeto e inicie o gerenciador de pacotes:

```bash
npm init -y

```

### 3. Instalar Dependências

Instale o TypeScript e o executor `ts-node` como dependências de desenvolvimento:

```bash
npm install -D typescript ts-node @types/node

```

### 4. Configurar o TypeScript

Gere o arquivo de configuração `tsconfig.json`:

```bash
npx tsc --init

```

*Dica: Certifique-se de que a opção `"target": "es2016"` (ou superior) está ativa no arquivo gerado para suportar as funcionalidades modernas.*

---

## ▶️ Como Executar

Não é necessário compilar o código manualmente para JavaScript antes de rodar. Utilizamos o `ts-node` para execução direta.

### Executar a Questão 1 (Restaurante)

Para verificar a saída da implementação do diagrama de classes e o teste do "Bistro UFR":

```bash
npx ts-node src/questao1.ts

```

### Executar a Questão 2 (Parser Genérico)

Para verificar a transformação de dados JSON e CSV utilizando Generics:

```bash
npx ts-node src/questao2.ts

```

---

## 📝 Detalhes da Implementação

### Questão 1: Sistema de Restaurante

Implementação estrita do diagrama de classes fornecido:

* 
**Genéricos:** A classe `SecaoCardapio<T>` garante a tipagem segura dos itens.


* 
**Encadeamento:** Utilização de *Optional Chaining* (`?.`) para alteração segura de preços.


* 
**Formatação:** Métodos `detalhes()` personalizados para Pratos e Bebidas.



### Questão 2: Parser Genérico

Sistema agnóstico ao formato de entrada:

* 
**Interfaces:** `IParser<T>` define o contrato para parsers.


* 
**Parsers:** `JsonUserParser` e `CsvProductParser` implementam a lógica específica de conversão.



---

## 👨‍💻 Autor

**João Victor dos Santos Assis de Oliveira**

* Curso: Engenharia de Software
* Desenvolvedor Full Stack
