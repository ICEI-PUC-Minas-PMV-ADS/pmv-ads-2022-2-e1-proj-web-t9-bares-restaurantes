using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;

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
            var fullPath = Environment.CurrentDirectory + "\\Auxiliar\\Produtos.txt";
            var lines = File.ReadLines(fullPath);
            foreach (var item in lines)
            {
                var dados = item.Split('|');
                var id = Convert.ToInt32(dados[0]);
                var nome = dados[1];
                var desc = dados[2];
                var cat = dados[3];
                var preco = float.Parse(dados[4]);
                users.Add(new Produto { Id = id, Nome = nome, Descricao = desc, Categoria = cat, Preco = preco });
            }
            
            return users;
        }
    }
}
