// var listaMesa =  '{   "mesas" :   [   {   "numero": 1,   "pedidos": [     {       "nome": "Filé Parmegiana",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     },     {       "nome": "Costela de Porco",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     }   ] },   {   "numero": 2,   "pedidos": [     {       "nome": "Filé Parmegiana",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     },     {       "nome": "Costela de Porco",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     }   ] } ] }';
//
//Simulação de resposta de uma API que retorna uma lista de pedidos 
var listaMesa = '{ "pedidos": [{' +
'"numeroMesa": 1,"nome": "Filé Parmegiana", "horario": "20:00", "status": "Em Andamento"},' +
'{ "numeroMesa": 1, "nome": "Soda Italiana", "horario": "20:00", "status": "Enviado ao Cliente" },' +
'{ "numeroMesa": 2, "nome": "Costela de Porco", "horario": "21:00", "status": "Recebido" },' +
'{ "numeroMesa": 2, "nome": "Suco de Uva", "horario": "19:00", "status": "Finalizado" }   ] }';

//converte a string em Json
var json = JSON.parse(listaMesa);

//Função chamado ao carregar a página, para atualizar o status dos pedidos
function ExibirStatusPedidos() {
    //Pega o elemento html cujo id = tabela
    var minhaDiv = document.getElementById("tabela");

    //Cria uma tabela html de pedidos a partir do json
    var novaTabela = criarTabela(json.pedidos);

    //Adiciona uma elemento filho ao elemento capturado
    minhaDiv.appendChild(novaTabela);
}

//Função para criar uma tabela html dinâmicamente
function criarTabela(pedidos) {
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var thd = function (i) {
    return i == 0 ? "th" : "td";
  };

  var conteudo = [["N° Mesa", "Pedido", "Horário", "Status"]];
  for (var i = 0; i < pedidos.length; i++) {
    var nome = pedidos[i].nome;
    var mesa = pedidos[i].numeroMesa;
    var horario = pedidos[i].horario;
    var status = pedidos[i].status;
    var item = [mesa, nome, horario, status];
    conteudo.push(item);
  }

  for (var i = 0; i < conteudo.length; i++) {
    var tr = document.createElement("tr");
    for (var o = 0; o < conteudo[i].length; o++) {
      var t = document.createElement(thd(i));
      var texto = document.createTextNode(conteudo[i][o]);
      t.appendChild(texto);
      tr.appendChild(t);
    }
    i == 0 ? thead.appendChild(tr) : tbody.appendChild(tr);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}
