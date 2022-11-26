fetch("produtos.json")
.then(function(response){
   return response.json();
})
.then(function(produtos){
   let placeholder = document.querySelector("#saidaDados");
   let saida = "";
   for(let produto of produtos){
      saida += `
         <tr>
            <td>${produto.quantidade} </td>
            <td>${produto.nome}</td>
            <td>${produto.horario}</td>
            <td>${produto.preco}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = saida;
});
