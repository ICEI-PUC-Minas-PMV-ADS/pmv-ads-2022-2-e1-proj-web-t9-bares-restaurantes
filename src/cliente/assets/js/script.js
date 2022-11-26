var listaMesa =
  '{ "pedidos": [{' +
  '"quantidade": 1,"nome": "Filé Parmegiana", "horario": "20:00", "preco": "R$69,59"},' +
  '{ "quantidade": 1, "nome": "Costela de Porco", "horario": "20:01", "preco": "R$72,99" },' +
  '{ "quantidade": 1, "nome": "Soda Italiana", "horario": "20:22", "preco": "R$7,50" },' +
  '{ "quantidade": 1, "nome": "Suco de Uva", "horario": "20:28", "preco": "R$4,50" }   ] }';

var json = JSON.parse(listaMesa);
function exibirComanda() {
  var minhaDiv = document.getElementById("tabela");
  var novaTabela = criarTabela(json.pedidos);
  minhaDiv.appendChild(novaTabela);
}
function criarTabela(pedidos) {
  var tabela = document.createElement("table");
    tabela.className = 'table';
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var thd = function (i) {
    return i == 0 ? "th" : "td";
  };

  var conteudo = [["Quantidade", "Pedido", "Horário", "Preço"]];
  for (var i = 0; i < pedidos.length; i++) {
    var nome = pedidos[i].nome;
    var quantidade = pedidos[i].quantidade;
    var horario = pedidos[i].horario;
    var preco = pedidos[i].preco;
    var item = [quantidade, nome, horario, preco];
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
