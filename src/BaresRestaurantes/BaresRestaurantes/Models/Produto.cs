using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BaresRestaurantes.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Categoria { get; set; }
        [DisplayFormat(DataFormatString = "{0:C}")]
        public float Preco { get; set; }

        public List<Produto> GetProdutos()
        {
            var users = new List<Produto>();
            users.Add(new Produto { Id = 1, Nome = "Filé a Parmegiana",Descricao= "Filé mignon à milanesa, gratinado com molho de tomate e queijo.", Categoria = "Pratos Alacarte", Preco = 99.90f });
            users.Add(new Produto { Id = 2, Nome = "Costela de Porco", Descricao="Costela de porco no barbecue com fritas.", Categoria="Pratos Alacarte", Preco=79.90f});
            users.Add(new Produto { Id = 3, Nome = "Moscow Mule", Descricao= "Vodka, espuma de gengbre,suco de limão, ginger Ale.", Categoria="Drinks", Preco = 17f });
            users.Add(new Produto { Id = 4, Nome = "Soda Italiana", Descricao= "Maçã verde, cranberry, limão, tangerina e morango.", Categoria="Drinks", Preco = 8f });

            return users;
        }
    }
}
