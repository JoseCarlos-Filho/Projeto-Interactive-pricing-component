# Componente de preços interativo

![Componente de preços interativo](./design/mobile-design.jpg)

## Conteudos

- [Resumo](#Resumo)
  - [Descrição](#Descrição)
  - [Funcionalidade](#Funcionalidade)
  - [Links](#links)
- [O que aprendeu](#O-que-aprendeu)
  - [Construido com](#Construido-com)
  - [Continuar Desenvolvendo](#continuar-desenvolvendo)
- [Autor](#autor)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Resumo

Foco em utilizar as tecnologias HTML, CSS e JavaScript, colocando 
em pratica os conhecimentos adiquiridos para construção do slider 
de preço interativo, durante a participação da Comunidade Code.   

### Drescrição

Desenvolver componente interativo de preço que possa ter interação do usuário dia acordo
com a necessidade de leitura de livros e valor a ser pago aplicando tecnologia HTML, CSS e JavaScript.

### Funcionalidade

A aplicação possui uma barra com um botão no centro (Tag INPUT do tipo RANGE) na qual o usuário interage
vizualizando a quantidade de páginas (Tag SPAN ) dejada para leitura informação disposta logo acima da barra
e o valor do plano também é exibido (Tag SPAN) de acordo com a variação da quantidade de páginas desejada.

Aplicação também dispõe de um botão (Botão do tipo TOGGLE criada em CSS) logo abaixo do preço em que o usuário pode interagir escolhendo
seu plano de leitura anual ou mensal podendo mostrar os valores de acordo com a interação do usuário.


### Links

- Deploy da aplicação: [Componente de preços interativo](https://jose-calos-componente-preco-interativo.netlify.app/)

## O que aprendeu

#### HTML:
      Tags SPAN, INPUT<TYPE=""RANGE">, INPUT<TYPE="CHECKBOX">, LABEL.

#### SPAN: 
    Formas diferentes de manipular informação em uma página HTML. 
#### INPUT<TYPE="RANGE">: 
                    Montar a barra de progresso.
#### INPUT<TYPE="CHECKBOX">: 
                    Montar o componente do check.
#### LABEL: 
      Exibi a descrição das informações.
______________________________________________________________________

#### CSS: 
                 pseudo-elemento(-webkit-slider-thumb, -moz-range-thumb), 
                 Seletores(:first-of-type, :last-of-type, :hover, :checked + .slider).

#### pseudo-elemento: 
                 Um pseudoelemento CSS é uma palavra-chave adicionada a um seletor que 
                 permite estilizar uma parte específica do(s) elemento(s) selecionado(s).

#### pseudo-elemento -webkit-slider-thumb : 
                                       pseudo-elementos para estilizar entradas de intervalo. 
                                       Utilizado para o navegador chrome.

#### pseudo-elemento -moz-range-thumb : 
                                   pseudo-elementos para estilizar entradas de intervalo. 
                                   Utilizado para o navegador Firefox.

#### seletor :first-of-type -> 
                          seletor em CSS permite que você direcione a primeira ocorrência 
                          de um elemento dentro de seu contêiner.

#### seletor :last-of-type -> 
                         seletor representa o último irmão com o nome de elemento dado na lista 
                         de filhos de seu elemento pai.

#### seletor :hover -> 
                  seletor é usado para selecionar elementos quando você passa o mouse sobre eles.

#### :checked + .slider -> 
                      A pseudo-classe :checked de um seletor CSS representa um elemento 
                      radio (<input type="radio">), checkbox (<input type="checkbox">) 
                      ou option (<option> em um <select>)  que está marcada ou alternado 
                      para um estado ligado. O usuário pode mudar seu estado clicando no 
                      elemento, ou selecionando um valor diferente, nesse caso a 
                      pseudo-classe :checked não se aplica a esse elemento, mas vai para
                      um elemento relevante.
______________________________________________________________________

#### JavaScript:

#### document.querySelector -> 
                        método retorna o primeiro elemento que corresponde a um seletor CSS

#### Evento onclick -> 
                        evento ocorre quando o usuário clica em um elemento.

#### Função parseInt() -> 
                        analisa um argumento string e retorna um inteiro na base especificada.

#### DOM elemento textContent -> 
                          propriedade define ou retorna o conteúdo de texto do nó especificado
                          ####e todos os seus descendentes .

#### Método addEventListener() -> é usado para anexar um manipulador de eventos a um elemento 
                             específico. Ele não substitui os manipuladores de eventos existentes. 
                             Eventos são considerados uma parte essencial do JavaScript. 
                             Uma página da web responde de acordo com o evento que ocorreu. 
                             Os eventos podem ser gerados pelo usuário ou gerados por APIs. 
                             Um ouvinte de eventos é um procedimento de JavaScript que aguarda 
                             a ocorrência de um evento.

### Construido com

- HTML5
- CSS 
- Mobile-first workflow
- JavaScript


### Continuar Desenvolvendo

Aplicar CSS background: gradient  utilizando o evento addEventListener() para formatar a barra
do slider.

Tornar aplicação responsiva para desktop e outros dispositivos.

## Autor

- Copyright: [José Carlos Rodrigues Filho](https://jose-calos-componente-preco-interativo.netlify.app/)