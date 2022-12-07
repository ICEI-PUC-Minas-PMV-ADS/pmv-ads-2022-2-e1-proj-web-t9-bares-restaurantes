# 5 - Arquitetura da Solução

Nesta seção serão apresentados os detalhes técnicos da solução criada pela equipe de projeto, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução de software.

O projeto será desenvolvido utilizando o padrão de arquitetura em camadas por meio de uma aplicação ASP.NET Core MVC. No front-end serão utilizados razor pages (.Net), html, css e javaScript. No back-end utilizaremos C# e a construção de API Rest para comunicação com banco de dados SQL Server.


## 5.1 Diagrama de componentes

A arquitetura da solução consiste em uma aplicação web, uma API Rest e um banco de dados SQL Server hospedados em um servidor web na AWS. O sistema pode ser acessado através de interfaces web instaladas em desktops, notebooks, dispositivos móveis e painéis televisores.

Na figura a seguir são apresentados os componentes do sistema.

![image](https://user-images.githubusercontent.com/70844369/194785571-a27d4a25-ad36-4a88-bdd5-71a2d041130f.png)

A tecnologia utilizada em cada componente e sua funcionalidade são descritas abaixo.

- Interface Web

Conjunto de arquivos Razor Pages, HTML, CSS e JavaScript criados com design responsivo para rodar nos principais dispositivos desktop, móveis e painéis, que permitem aos usuários fazer requisições a aplicação web.

- Aplicação Web

Corresponde a plataforma web para bares e restaurantes que fornece todas as funcionalidades descritas neste trabalho. Será desenvolvida com ASP.NET Core MVC utilizando C#. 

- API Rest

É uma aplicação específica para comunicação com banco de dados Sql Server. Esta API recebe requisições da aplicação web para acesso ao banco e responde por meio de mensagens em formato JSON.

- Banco de dados

O banco de dados utilizado será o SQL Server.


## 5.2 - Hospedagem

Será utilizado os serviços de nuvem da AWS para a hospedagem do sistema. Serão criados dois serviços Elastic Beanstalk para hospedar a aplicação web e a API Rest. O serviço RDS (Relational Database Service) será criado para hospedar o banco de dados SQL Server.
***
>[<<< 02-Projeto de Interface](./04-Projeto%20de%20Interface.md) ||| [06-Template padrão do Site >>>](./06-Template%20padr%C3%A3o%20do%20Site.md)