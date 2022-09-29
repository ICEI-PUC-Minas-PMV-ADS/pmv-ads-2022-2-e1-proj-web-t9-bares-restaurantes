using System.Collections.Generic;

namespace BaresRestaurantes.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Categoria { get; set; }

        public List<Produto> GetProdutos()
        {
            var users = new List<Produto>();
            users.Add(new Produto { Id = 1, Nome = "Filé a Parmegiana",Descricao= "Filé mignon à milanesa, gratinado com molho de tomate e queijo", Categoria ="Cantina Italiana"});
            users.Add(new Produto { Id = 2, Nome = "Costela de Porco", Categoria="Costela de porco no barbecue com fritas"});

            return users;
        }
    }
}
