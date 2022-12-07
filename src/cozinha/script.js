var data = {
                            "fluxo": [
                                {
                                    "pratos":"Filé Parmegiana",
                                    "horario":"20:00",
                                    "TempPrep":"30 Min",
                                    "status":"Em andamento" 
                                },
                                {
                                    "pratos":"Costela de Porco",
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
                                }
                            
                            ]
                        }
    
    var data = JSON.stringify(data);
    
    var list = document.createElement("p");
    for (let i of data) {
    let item = document.createElement("p");
    item.innerHTML = data;
    list.innerHTML = data;
    
    }
    
    document.getElementById("conteudo").appendChild(list);
   