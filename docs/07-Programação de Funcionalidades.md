# 7 - Programação de Funcionalidades


Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Responsáveis:

## Elísia = Tela do Garçom
Primeiramente, clonei o repositório do github. Aproveitei o template para manter o mesmo style na página do garçom.
Criei uma página telagarçom.html, acrescentei as imagens e adaptei o menu lateral.
Depois iniciei o código JS, que mostra os status dos pedidos em formato de tabela.
Os pedidos são simulados por uma variável JSON.
O código JS recebe o JSON e cria uma tabela dinamicamente. 
Adicionei 2 filtros, um que filtra por número da mesa e outro que filtra pelo status do pedido.
Também adicionei um menu lateral para navegar para a página "HOME" e para fazer logout.

O resultado final da tela se encontra a seguir:


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t9-bares-restaurantes/blob/e5f1f4a4da45067d15a7d0ab2b47af21546c41f4/docs/img/Teladogar%C3%A7om2.PNG)

Vídeo da explicação da atividade está disponibilizado no youtube:

Vídeo etapa 3: https://youtu.be/7M3ytGxlrdM

Vídeo etapa 4: https://www.youtube.com/watch?v=wqqtpc7AE4w


## Geraldo = Tela Cliente

Foi feito o menu lateral, utilizando divs para a seleção posterior por meio de classes no CSS. Depois feito em tabelas os conteúdos da tela "comanda". Ainda não fiz a parte de JSON, pois ainda não cheguei nessa parte, mas espero fazer nessa próxima semana. Tive dificuldades na hora de fazer o script para o aparecimento e desaparecimento do menu hambúrguer, uma vez que ele deixa um pequeno bug na tela (deixando um espaço vazio). Foi tranquilo fazer o HTML e o CSS da tela!

Fiz um arquivo .json para armazenar os dados que seriam usados para a criação de uma tabela para os pedidos do cliente. Junto a isso fiz um algoritmo javascript para "parsear" os dados json e inserí-los na página html.

>>infelizmente minha implementação json só funciona com a extensão "live server" do VSCode. Pretendo arrumar isso, por enquanto ainda não sei o que está acontecendo.

![image](https://user-images.githubusercontent.com/70844369/204166694-7f0994c9-4a70-4806-a6da-58f473975912.png)



[Link de explicação 1 - Etapa 3](https://youtu.be/zIatWfAnyZQ)

[Link de explicação 2 - Etapa 4](https://www.youtube.com/watch?v=UBYaBenOtiQ)


## Geison Amrorim = Tela Login/Cadastro 

* Comecei clonando o repositorio do github e inciei criando o arquivo HTML e
comecei com o formulario de login  coloquei a <div> com id de login, acresentei a imagen
da logo e comecei fazer o form de login E-mail, senha e todos os inputs necessarios.
* Logo apos acresentei o formulario de cadastro utilizando as <div> e tag <>
apos realizar esse processo vim acresentando o CSS, dei um primeiro resert e fui removendo a decorações 
dos links, centralizei a logo pois  era um print usei o border-radius para eliminar o fundo
estilizei os botoes acresentei um efeito no login e um efeito no cadastra ate essa atepa achei tranquilo fazer. 
* Ainda nao utilizei o JSON pois enstou com dificuldade nao estou conseguindo saber se esta funcionando ou Nâo.

* [Tela login]  <img src="https://user-images.githubusercontent.com/70844369/194785964-43d40b3e-7062-4885-9a7b-f936523c13fe.png">

* Vídeo de explicação da atividade está disponivel no youtube: https://www.youtube.com/watch?v=A-_4wtHo7OI
* Etapa 4: https://youtu.be/iagZEBTBHa4


 ## Pedro fidelis = Tela Fluxo Cozinheiro
 *Iniciei criando duas tabelas uma na  horizontal e outra na vertical no arquivo index html,tiver certa dificuldade de  de obter o mesmo layout 
 dos outros amigos do grupo,
 *Linkei uma imagem do logo no canto superior esquerdo e estilizei tamanho e posição via css 
 
 <img src="https://user-images.githubusercontent.com/115049250/201232034-ebd5f9e0-4915-43a4-ac02-1f06fb32027b.png">
 
 link com o video gravado :https://youtu.be/P01sGRv5t0I
 
  link com o video gravado JS JSON : https://youtube.com/watch?v=Fj7zXBnCgXM&feature=share
 
 ## Samuel Oliveira = Landing Page
 Criei uma tela que conta com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente. 
 
 * Etapa 4: https://youtu.be/XNBBWkyF1go 
 * Etapa 4 : Manipulação JSON - https://youtu.be/QBGqE3Qna5E

  
> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
***
 > [<<< 06-Template padrão do site](./06-Template%20padr%C3%A3o%20do%20Site.md) ||| [08-Plano de Testes de Software >>>](./08-Plano%20de%20Testes%20de%20Software.md)
 
