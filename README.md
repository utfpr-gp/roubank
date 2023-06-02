# GitHub Pages

<https://utfpr-gp.github.io/roubank/>

# Checkist

Caixas de Diálogo

- [x] prompt
- [x] alert
- [x] confirm

Temporizadores

- [x] setInterval
- [x] setTimeout

Funções

- [ ] Função anônima com argumento
- [ ] Função anônima sem argumento
- [ ] Função anônima com retorno
- [ ] Função auto-executável - não será aceita a mesma do Module Pattern
- [ ] Função com nome
- [ ] Função aninhada/local - declarar uma função dentro de outra
- [ ] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [ ] Função Flecha - Arrow Function

Eventos

- [x] Evento de carregamento do documento - onload
- [ ] Evento de movimento do mouse
- [ ] Evento de teclado - usar charCode ou keyCode
- [ ] Eventos de formulário - usar onfocus e onblur
- [ ] Imprimir alguma propriedade/atributo do objeto event recebido como parâmetro na função tratadora de evento
- [ ] <s>Propagação de eventos no modelo bolha (usar target e currentTarget, ou seja, disparar o evento em um elemento filho e capturar em um elemento pai)</s>

Acesso aos elementos DOM do HTML

- [ ] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [ ] Via getElementByID()
- [ ] Via getElementsByName()
- [ ] Via getElementsByTagName()
- [ ] Via seletores CSS usados na função querySelector() ou querySelectorAll()

Tratadores de Evento

- [ ] Especificar o tratador de evento inline - registro do evento no HTML
- [ ] Especificar o tratador de evento no modo tradicional - registro do evento no JS com prefixo on via atributo de um objeto DOM
- [ ] Especificar o tratador de evento com a função addEventListener - registro do evento no JS
- [ ] Usar o operador this em funções tratadoras de eventos.

Objetos Nativos

- [ ] Usar pelo menos 3 métodos de manipulação de array
- [ ] Usar laço de repetição (for..in ou for..of ou forEach)
- [ ] Usar pelo menos 3 métodos para manipulação de string
- [ ] String Template - a String com crase e ${}
- [ ] Manipulação do CSS de forma nativa via atributo style e classList

Objetos

- [ ] Criar objeto usando função construtora ou notação literal
- [ ] (Obrigatório) Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da classe em UpperCamelCase
- [ ] Usar herança prototipal nativa ou herança de classes do ES6

Qualidade do código

- [ ] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [ ] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [ ] Usar strict mode - em todos os arquivos
- [ ] Usar Module Pattern com função auto-executável ou o conceito de módulo do ES6 com operadores export e import
- [ ] Usar pasta assets e subpastas resources e libraries para organizar o código
- [ ] Usar let ou const ao invés de var
- [ ] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

Formulário

- [ ] Validação de formulário com onsubmit usando os métodos tradicionais - é a fase executada após a validação via HTML5
- [ ] Validação de formulário com HTML5 API
  - [ ] Customizar as mensagens nos balões de mensagem
  - [ ] Usar os atributos de validação dos inputs - required ou type="email" ou outros
  - [ ] Usar expressões regulares para validação - usar no atributo pattern do respectivo input
- [ ] Ler e escrever em elementos input com a propriedade value
- [ ] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [ ] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

jQuery

- [ ] Uso de seletores CSS - id, classe e tag
- [ ] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [ ] Uso de seletores hierárquicos dinâmicos - parent/children/next
- [ ] Efeitos fade ou slide
- [ ] Especificar o tratador de algum evento para um elemento DOM via jQuery - deve ser um evento diferente do ready
- [ ] Manipulação do CSS via função css() e addClass()/removeClass()
- [ ] Manipulação do conteúdo de um input e div usando jQuery
- [ ] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

Web Storage

- [ ] Leitura e escrita de dados simples - dados primivos como string, number, boolean
- [ ] Leitura e escrita de JSON - dado transformado a partir de um objeto
- [ ] Criar e atribuir um dado em um Cookie - opcionalmente, ler e apresentar o valor na tela

Requisições assíncronas

- [ ] Requisições AJAX para uma implementação funcional do backend em ExpressJS na plataforma Node
- [ ] (Obrigatório) Requisições AJAX para uma API Fake - JSON Server 
- [ ] Requisições AJAX para uma API Rest pública qualquer (Busca CEP API ou IBGE API ou outra).
