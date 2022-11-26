// var listaMesa =  '{   "mesas" :   [   {   "numero": 1,   "pedidos": [     {       "nome": "Filé Parmegiana",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     },     {       "nome": "Costela de Porco",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     }   ] },   {   "numero": 2,   "pedidos": [     {       "nome": "Filé Parmegiana",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     },     {       "nome": "Costela de Porco",       "horario": "2022-10-29T20:00:00",       "status": "Em Andamento"     }   ] } ] }';
//
//Simulação de resposta de uma API que retorna uma lista de pedidos
var listaMesa =
  '{ "pedidos": [{' +
  '"numeroMesa": 1,"nome": "FILÉ PARMEGIANA: Filé de peito de frango empanado crocante, muçarela, orégano, molho pomodoro e parmesão. Acompanha: purê de batata.", "horario": "20:00", "status": "Em Andamento"},' +
  '{ "numeroMesa": 1, "nome": "SODA ITALIANA: maçã verde", "horario": "20:15", "status": "Enviado ao Cliente" },' +
  '{ "numeroMesa": 1, "nome": "COSTELA DE PORCO: 1kg de costela suína ao molho barbecue, acompanha batatas assadas e queijo cheddar", "horario": "20:30", "status": "Recebido" },' +
  '{ "numeroMesa": 2, "nome": "ESTROGONOFFE GRATINADO - FRANGO:Estrogonofe de sobrecoxa de frango em tiras com champignon e parmesão gratinado. Acompanha: Arroz branco com cebola dourada no azeite e batata palha.", "horario": "19:55", "status": "Recebido" },' +
  '{ "numeroMesa": 2, "nome": "TILÁPIA FIT: 300g de tilápia assada, acompanhada de purê e legumes.", "horario": "20:10", "status": "Em andamento" },' +
  '{ "numeroMesa": 2, "nome": "CAESAR SALAD:Filé de sobrecoxa de frango grelhado em tiras, alface americana, tomate uva, bacon crocante, parmesão, croutons e molho caesar.", "horario": "20:33", "status": "Recebido" },' +
  '{ "numeroMesa": 5, "nome": "REFRIGERANTE: coca-zero lata", "horario": "19:30", "status": "Finalizado" },' +
  '{ "numeroMesa": 5, "nome": "CERVEJA: Heineken (330ml)", "horario": "19:35", "status": "Recebido" },' +
  '{ "numeroMesa": 5, "nome": "COSTELA DE PORCO: 1kg de costela suína ao molho barbecue, acompanha batatas assadas e queijo cheddar", "horario": "19:45", "status": "Em Andamento" },' +
  '{ "numeroMesa": 9, "nome": "PETIT GATEAU ESPECIAL DE NUTELLA:Acompanha sorvete de creme e farofa crocante de castanhas.", "horario": "20:50", "status": "Recebido" },' +
  '{ "numeroMesa": 9, "nome": "SUCO 300ml: Maracujá", "horario": "21:00", "status": "Finalizado" }   ] }';

//converte a string em Json
var json = JSON.parse(listaMesa);

//window.location.href = "http://www.devmedia.com.br";

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

function Redirecionar() {
  window.location.href = "tela2.html";
}

function meuFiltro() {
    var inputStatus, status, mesa, table, tr, tdStatus, tdMesa, i;
    inputStatus = document.getElementById("filterByStatus");
    inputMesa = document.getElementById("filterByMesa");
    status = inputStatus.value.toUpperCase();
    mesa = inputMesa.value.toUpperCase();
    table = document.getElementById("tabela");
    tr = table.getElementsByTagName("tr");   

    for (i = 0; i < tr.length; i++) {
        tdMesa = tr[i].getElementsByTagName("td")[0];
        tdStatus = tr[i].getElementsByTagName("td")[3];

        if (tdMesa && tdStatus ) {
            if (tdStatus.innerHTML.toUpperCase().indexOf(status) > -1 && tdMesa.innerHTML.toUpperCase().indexOf(mesa) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        } else {
            tr[i].style.display = "";
        }
    }
}
