# Plano de Testes de Software


Os requisitos para realização dos testes de software são:

●	Site publicado na Internet;

●	A página de login deve estar funcional;

●	O banco de dados deve estar acessível e comunicando com o servidor.


Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


|Casos de Teste |CT-01 - Visualizar pedidos|
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-11 O sistema deve permitir a visualização dos status dos pedidos, apresentando a mesa, o nome do pedido, o horário e seu status.|
|Objetivo do Teste       | Verificar se os pedidos feitos estão sendo exibidos corretamente|
|Passos                  | 1) Fazer login no sistema com acesso de garçom;|
|                        | 2) Entrar na página do garçom e visualizar os status dos pedidos;|
|                        | 3) Verificar se os pedidos listados correspondem aos pedidos cadastrados no banco de dados para aquele dia.|
| Critérios de êxito     | Os pedidos listados na tela do garçom devem corresponder aos cadastrados no banco de dados (nº mesa, descrição, horário e status).



|Casos de Teste |CT-02 - Visualizar menu do restaurante|
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-02 O site deve apresentar um menu com os pratos e bebidas disponíveis no dia.|
|Objetivo do Teste       | Verificar se o cardápio cadastrado corresponde ao apresentado ao cliente.|
|Passos                  | 1) Fazer login no sistema com acesso de cliente;|
|                        | 2) Clicar na opção “cardápio” do menu lateral;|
|                        | 3) Verificar se os itens exibidos correspondem aos cadastrados no banco de dados.|
| Critérios de êxito     | Os itens listados na tela do cliente devem corresponder aos cadastrados no banco de dados com status de ativo.


## Ferramentas de Testes
### Checagem de Links "quebrados" global e localmente
- https://www.brokenlinkcheck.com/
- https://github.com/LukasHechenberger/broken-link-checker-local

### Teste de compatibilidade mobile
- https://search.google.com/test/mobile-friendly?hl=pt


***
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
***
> [<<< 07-Programação de Funcionalidades](./07-Programa%C3%A7%C3%A3o%20de%20Funcionalidades.md) ||| [09-Registro de Testes de Software >>>](./09-Registro%20de%20Testes%20de%20Software.md)