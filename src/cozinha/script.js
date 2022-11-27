var PedidosCozinha ={"Pedidos":[
                              {
                                 "nome":"Filé Parmegiana",
                                "horario":"20:00",
                                "TempPrep":"30 Min",
                                "status":"Em andamento" 
                            },
                             {
                              "nome":"Costela de Porco",
                              "horario":"20:00",
                              "TempPrep":"40 min",
                              "status":"Finalizado"
                             },
                            {
                             "nome":"Moscow Mule",
                             "horario":"20:15",
                             "TempPrep":"02 min",
                             "status":"Enviado Ao Cliente"
                            },
                            {
                              "nome":"Soda italiana",
                              "horario":"21:00",
                              "TempPrep":"03 min",
                              "status":"Recebido"
                            },
                            {
                              "nome":"Vinho do porto",
                              "horario":"21:30",
                              "TempPrep":"02 min",
                              "status":"Finalizado"
                            },
                         ]
                        }
function PedidosCozinha(){
 var textihtml = "";
  for(let x=0; x < PedidosCozinha.length;x++){
    textoHTML +='nome:${PedidosCozinha[x].nome}\n ';
  }
};
alert (textoHTML);






    