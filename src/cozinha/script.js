
                        var dadosDaTabela = {
                          colunas: ["Pratos", "Horário", "Tempo de preparo", "Status"],
                          linhas: [
                            ["Filé Parmegiana", "20:00", "30 min", "Em andamento"],
                            ["Costela de Porco", "20:01", "42 min", "Finalizado"],
                            ["Moscow Mule", "20:15", "05 min", "Enviado"],
                            ["Soda italiana", "21:30", "06 min", "Recebido"],
                            ["Vinho do porto", "21:46", "02 min", "Finalizado"]
                          ]
                        }
                        

                        var tabela = document.createElement("table");

                        for (var i = 0; i < dadosDaTabela.colunas.length; i++) {
                          var th = document.createElement("th");
                          th.innerHTML = dadosDaTabela.colunas[i];
                          tabela.appendChild(th);
                        }
                        

                        for (var i = 0; i < dadosDaTabela.linhas.length; i++) {
                          var tr = document.createElement("tr");
   
                          for (var j = 0; j < dadosDaTabela.linhas[i].length; j++) {
                            var td = document.createElement("td");
                            td.innerHTML = dadosDaTabela.linhas[i][j];
                            tr.appendChild(td);
                          }
                        
                          tabela.appendChild(tr);
                        }
                        

                        var container = document.getElementById("tabela-container");
                        container.appendChild(tabela);