var Pedidos ={"FluxoCozinha":[
                              {
                                 "pratos":"Filé Parmegiana",
                                "horario":"20:00",
                                "TempPrep":"30 Min",
                                "status":"Em andamento" 
                            },
                      
                             {
                              "Pratos":"Costela de Porco",
                              "horario":"20:00",
                              "TempPrep":"40 min",
                              "status":"Finalizado"
                             },
                            { 
                             "pratos":"Moscow Mule",
                             "horario":"20:15",
                             "TempPrep":"02 min",
                             "status":"Enviado Ao Cliente" 
                            },
                            {
                              "pratos":"Soda italiana",
                              "horario":"21:00",
                              "TempPrep":"03 min",
                              "status":"Recebido"
                            },
                            {
                              "pratos":"Vinho do porto",
                              "horario":"21:30",
                              "TempPrep":"02 min",
                              "status":"Finalizado"
                            },
                         ] };
                         function ExibirPedidos(){ 
                          var TextoHTML = "";
                          for (let x =0; x<Pedidos.length;x++){
                            textohtml = 'FluxoCozinha: ${Pedidos[x].pratos}<br>';
                            
                          };
                          var conteudo = document.getElementById('#conteudo');
                          TELA.innerHTML = textohtml;
                         };











    