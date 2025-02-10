
# Bem vindo! 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) <br>
Esse repositório vai acompanhar minha evolução nessa linguagem.

## Um pouco sobre JS
<ul>
  <li>Tipagem dinâmica</li>
  <li>Linguagem mais popular</li>
  <li>Criada por Brendan Eich em 1995 para a Netscape</li>


## Visão Geral

- Tipos de Dados 🎲 <br>

Number • Null • Undened • String • Boolean • Object • BigInt • Symbolol <br>

### Number <br>

 - Não há separação entre números inteiros e números reais <br>

 -NaN - Not a Number<br>

## Operadores aritméticos:
 - + , -, *, /, %, **, ++, --, +=, -=, *=, /=, %=, **= <br>

## Operadores de comparação
  - > Maior que
  - >= Maior que ou igual a
  - < Menor que
  - <= Menor que ou igual a
  - == Igualdade
  - != Diferente
  - === Igualdade sem coerção
  - !== Igualdade com coerção

## Operadores lógicos
 - && e
 - || ou
 - ! Negação



## BigInt
 - Números acrescidos de n ao final <br>
 - Números maiores de 2ˆ23 
 - Ao comparar com um number a conversão é necessária


## Variáveis
 - Variáveis podem ser declaradas usando três palavras chaves
 - var, let (ECMA6) e const
 - O tipo da variável não é especicado
 - As função typeof retorna o tipo de dados de objeto
 

 • Var =  Global (hoisting) / Função, pode ser alterada
 • Let = Bloco, pode ser alterada
 • Const = Bloco, não pode ser alterada


## Null e Undefined
 • Null =  existe, mas foi atribuída como vazio
 • UNDEFINED = Variáveis não inicializadas, membros do obj ou array que não existem

## String
 • Length = Propriedade que contém o tamanho da string
 • indexOf = Retorna a primeira ocorrência de um caractere     na   string


## Vetores
 - Não são tipados
 - Cada valor é chamado de elemento
 - Cada elemento tem sua posição chamada de indice 
 - Split: Quebra a string em partes utilizando um delimitador
 - Join: Transforma um vetor em uma string, utilizando um delimitador entre os
elementos
 - Vetores esparsos: não possuí indeces contínuos


## Estrutura de dados
- Pilhas: push e pop
- Fila: unshift e shift


## Estruturas de Repetição
 - WHILE:
     - Condição testada antes, o bloco de código só executado se for verdadeiro
 - DO/WHILE:
     - Condição testada ápos a execução, o laço é executado ao menos uma vez e continuado se for verdadeira a condição
 - For:
     - Instrução 1 - Executada antes de iniciar o bloco
     - Instrução 2 - Executadas antes de cada iteração do laço
     - Instrução 3 - Executadas após a iteração do laço
 - For/in e for/of:
     - Utilizada para percorrer propriedades enumeráveis, Filtrar elementos, Transformar o vetor, Processar e resumir o vetor em um resultado
 • break
 • continue
 • return
 • throw


## Objetos
 - É o tipo fundamental de dados em JavaScript é o objeto
 - São manipulados por referência e não por valor
 -  em JavaScript é possível remover e adicionar propriedades
 - É uma lista separada com vírgulas de pares nome:valor separados por dois-pontos, colocados entre chaves
 - É possível criar objetos usando o operador new
 - É possível acessar os propriedade usando duas notações
     • Dot notation, por meio do operador .
     • Bracket notation, por meio do operador [ ] (vetor associativo)
 - Classes - ECMA 6
     • Nova sintaxe adicionada no ECMA 6


## Funções
  - Em JavaScript funções são objetos, logo possuem propriedades e métodos
      • Métodos: apply( ) e call( )
      • Propriedades: length e constructor
 - É possível passar qualquer quantidade de parâmetro  para qualquer função
 - Os parâmetros são armazenados em uma estrutura similar a um vetor chamada de arguments
 - A propriedade length de uma função armazena a quantidade de parâmetros da função


## Promises
 - Um objeto que representa a eventual completude ou falha de uma operação assíncrona
 - Uma promise funciona como uma ligação entre o código produtor e o consumidor
 - Registramos consumidores por dos métodos then(principal) e catch(útil para casos de falha)
 - Estados:
     • pending
         - Estado inicial, nesse estado a promise não foi rejeitada e nem resolvida
     • fullled
          - Indica que a operação foi realizada com sucesso, i.e, a promise resolvida
     • rejected
          - Indica que a operação falou, i.e, a promise foi rejeitada
      • settled
          -  É o estado final. Indica que a promise foi resolvida ou rejeitada

 - Finally 
    • Geralmente é utilizado para “limpeza” após a execução da operação
     - Não possui argumento. É executado independente resultado da operação
 - Os três métodos apresentados, then, catch, finally, retornam uma promise, permitindo o encadeamento de promises.
 
 - Independente do tratamento que damos a Promise, ele sempre vai buscar o primeiro tratamento de erros disponível
 -  catch não é universal, quando encadeados em outros then, o primeiro erro que acontece consome o primeiro catch e assim por diante


## Async/Await
 - Asycn:
     -  A função sempre retorna uma promise, assim que o corpo da função retorna algo, essa promessa é resolvida, se lançar uma exceção, a promessa é rejeitada
     - Uma função assíncrona pode esperar (await) uma ou mais promises 
 - Await:
     -    A palavra-chave await faz com que o interpretador JS espere até que apromise alcance o estado settle  


# JS na web
 • No contexto web eles apenas respondem a ações do usuário que são chamados de eventos

## Document Object Model
  - A maioria dos códigos JS são utilizados para manipular a DOM:
      • Para consultar estados. Ex: se um checkbox está marcado
      • Para alterar a estrutra. Ex: Inserir um novo texto dentro de uma parágrafo
      • Para alterar o estilo de algum elemento. Ex: mudar a cor de texto de um parágrafo
 -  Algumas Propriedades:
     - addEventListener() -  Anexa um tratador de eventos ao elemento especificado
     - getAttribute()  - Retorna o valor de atributo especificado do elemento 
     - innerHTML  - Define ou retorna o conteúdo do elemento
     - setAttribute()  - Define ou altera o atributo especificado para o valor especificado
 - Acessando elementos: 
     • document.querySelector(selector): Element
     • document.querySelectorAll(selector): NodeList
     • document.getElementById(id: string): Element
     • document.getElementsByClassName(classname: string): HTMLCollection
     • document.getElementsByTagName(tag: string): HTMLCollection
     • document.getElementsByName(name: string): NodeList
 - Nós do DOM do tipo Element tem seus atributos expostos
     - Podemos acessar essa coleção usando a “dot notation” 
      element.getAttribute('class')
     • element.setAttribute('class', 'new-classname')
     • element.setAttributeNode(attributeNode)
     • element.removeAttribute('class')
 - Existem duas maneiras de denir o texto de um elemento, dependendo do seu tipo:
        • innerHTML : texto entre a abertura e fechamento de tags (elementos regulares)
        • value : Elementos parte de formulários
            • Define o valor que será submetido via esse elemento
            • Válido até mesmo para <textarea>
 - É possível alterar a árvore DOM através do Js
     • document.createElement(tag: string): Element
     • document.createAttribute(name: string): Attr
     • document.createTextNode(text: string): Text
     • document.createComment(comment: string): Comment
     • removeChild
     • remove 


## Browser Object Model (BOM)
  • Permite a troca de informação não relacionadas ao conteúdo com o navegador
  - A janela do browser, o objeto de nível superior na hierarquia DOM
  - Propriedades:
      - history: Fornece informações do histórico do navegador
      - open(url): Abre uma nova janela no navegador
      - alert(string): Exibe uma mensagem para o usuário e espera que ele a feche


## Manipulando eventos
  - Interação do JavaScript com HTML é feita através de eventos que ocorrem quando o usuário ou o navegador manipula uma página.
  - Primeiro passo é registar um handler (função “tratadora” de eventos)
      • Inline
     • Tradicional
     • W3C - Mais recomendada
  - Objeto event
      - As funções usadas para tratar eventos sempre recebem como argumento, o objeto event 
  - O método stopPropagation do objeto de evento pode ser chamado para impedir sua propagação
 - A propriedade de target do objeto evento se refere ao nó onde ele se originou
 - Para evitar que o comportamento padrão ocorra podemos chamar o método preventDefault no objeto de evento
 - Temos também eventos de teclado, mouse

## Temporizadores
  • setTimeout e setInterval retornam um ID que representa o cronômetro
  • O ID é utilizado pelas funções clearTimeout e clearInterval

  

