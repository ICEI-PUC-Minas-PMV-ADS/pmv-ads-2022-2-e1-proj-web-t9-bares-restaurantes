# 2 - Especificação do Projeto

Levantamos a necessidade da criação de um sistema que atendesse às demandas de bares e restaurantes. Os membros da equipe passaram alguns dias em estabelecimentos a fim de entender, através de observações e entrevistas, quais eram os problemas enfrentados no dia a dia de um cliente, dono de um  grande restaurante em Belo Horizonte. 

Passando por todos os ambientes de trabalho entendemos as necessidades de cada usuário, como por exemplo: os clientes, gerentes, chefs de cozinha e garçons, cada um com sua problemática, o que nos possibilitou o levantamento das personas e consolidação das histórias dos usuários.

## 2.1 - Personas
- Jubileu (Empresario/Gerente) - 54 anos - divorciado - 9 filhos. Empresário no ramo de gastronomia há mais de 27 anos.
- Creonilde (Cliente) - 22 anos - trabalha com revenda de cosméticos e é frequentadora assídua do estabelecimento há pelo menos 3 anos.
- Huliete (Chef de Cozinha) - 51 anos - divorciada (ex-esposa do Jubileu) - 6 filhos. Empresária e sócia no ramo de gastronomia há mais de 24 anos. 
- Geriscreidon (Garçom) - 43 anos - 15 anos trabalhando no estabelecimento. Se orgulha de nunca ter recibo reclamação dos clientes pelos seus serviços e que as gorjetas ajudam ele a pagar as contas em casa.

## 2.2 - Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Jubileu (empresário/gerente)|Cadastrar, editar e remover opções de produtos ofertados pelo estabelecimento.|atualizar os produtos oferecidos no cardápio.|
|Jubileu (gerente)|Cadastrar, editar e remover colaboradores.|realizar cadastro de colaboradores  em suas respectivas repartições.|
|Jubileu (gerente)|Acompanhar o status dos pedidos em tempo real.|auxiliar na logística de solicitação, preparo e envio dos pedidos à mesa.|
|Jubileu (gerente)|Visualizar as informações de quantidade, descrição e valor de cada pedido em uma mesa, além do valor total consumido.|monitorar o consumo dos clientes.|
|Creonilde (cliente)|Verificar opções do cardápio por categoria.|facilitar na escolha dos pedidos.|
|Creonilde (cliente)|Solicitar um item do cardápio, podendo escolher características e detalhes do pedido.|para poder utilizar o autoatendimento.|
|Creonilde (cliente)|Fechar e visualizar os detalhes da conta|agilizar o tempo de finalização e pagamento do atendimento recebido.|
|Creonilde (cliente)|Acompanhar o status dos pedidos em tempo real.|para ter conhecimento do andamento do seu pedido.|
|Huliete (chef de cozinha)|Visualizar os pedidos na ordem cronológica que foram feitos.|auxiliar na logística de preparo dos pedidos à mesa.|
|Huliete (chef de cozinha)|Alterar situação do pedido (recebido, fazendo, finalizado)|dar o feedback do status do pedido ao garçom e cliente.|
|Geriscreidon (garçom)|Visualizar situação do pedido (recebido, em andamento, finalizado)|auxiliar na logística de envio dos pedidos à mesa.|
|Geriscreidon (garçom)|verificar para qual mesa deve ser enviado cada pedido|enviar o pedido para a mesa correta.|


## 2.3 - Requisitos do Projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos serão apresentados a seguir.


### 2.3.1 Requisitos Funcionais

|ID       | Descrição do Requisito  | Prioridade |
|----------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que o usuário realize o cadastro da mesa.| Média|
|RF-02| O site deve apresentar um menu com os pratos e bebidas disponíveis no dia.|Alta| 
|RF-03| O cliente deve conseguir escolher itens no cardápio por quantidade e inserir no pedido da mesa (comanda virtual).|Alta|
|RF-04| O sistema deve permitir o encerramento do pedido.|Alta|
|RF-05| O sistema deve permitir omitir um produto caso indisponível.|Baixa|
|RF-06| O sistema deve permitir cadastrar, alterar e excluir  produtos.|Alta|
|RF-07| O sistema deve permitir selecionar uma mesa e conferir histórico de consumo.|Baixa|
|RF-08|O sistema deve permitir finalizar a compra.|Alta|
|RF-09| O sistema deve permitir realizar pagamento.|Baixa| 
|RF-10| O sistema deve permitir realizar cadastro  de colaborador e  permitir categorizar os seus respectivos sistemas.|Média|


### 2.3.2 - Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01 |O sistema deve fornecer descrição de cada produto selecionado pelo usuário. |Baixa|
|RNF-02| Os produtos devem ser separados por categorias. |Média|
|RNF-03| A confirmação do pedido feito pelo cliente deve acontecer em menos de 5 segundos. |Baixa|
|RNF-04| O pedido feito pelo cliente deve chegar até a cozinha em menos de 10 segundos. |Baixa| 
|RNF-05|A confirmação do tempo de preparo do pedido deve chegar ao gerente em até 5 segundos.|Média|
|RNF-07|O sistema deve gerar histórico de itens selecionados pelo usuário.|Alta|
|RNF-08|O sistema deve validar a forma  de pagamento.|Média|
|RNF-09|O sistema deverá atualizar status do pedido (assíncrona com a cozinha)|Alta|
|RNF-10|O sistema deverá mostrar elementos oculto ao passar cursor|Média|
|RNF-11|O sistema deve permitir recuperar senha através do E-mail.|Alta|
|RNF-12|O sistema deve identificar o número da mesa ao ler QR code.|Alta|

### 2.3.3 -Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|O sistema não deverá ficar fora do ar por mais de 2 horas.|
|RE-02|O sistema não deverá ter linguagens diferentes na parte da APIs.|
|RE-03|O Sistema deverá ter comunicação com apenas um gateway de pagamento.|
|RE-04|O sistema deverá ter apenas um banco de dados.|
|RE-05|O sistema não deverá repassar informações para plataformas externas.|
