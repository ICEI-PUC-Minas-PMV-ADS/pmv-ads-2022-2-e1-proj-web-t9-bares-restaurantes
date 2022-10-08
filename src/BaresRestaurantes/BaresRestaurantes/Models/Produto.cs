using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
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
        public double Preco { get; set; }

        public List<Produto> GetProdutos()
        {
            var users = new List<Produto>();
            var fullPath = Directory.GetCurrentDirectory() + "\\Auxiliar\\Produtos.txt";
            var lines = File.ReadLines(fullPath);
            foreach (var item in lines)
            {
                var dados = item.Split('|');
                var id = Convert.ToInt32(dados[0]);
                var nome = dados[1];
                var desc = dados[2];
                var cat = dados[3];
                var preco = double.Parse(dados[4], CultureInfo.InvariantCulture.NumberFormat);
                users.Add(new Produto { Id = id, Nome = nome, Descricao = desc, Categoria = cat, Preco = preco });
            }
            
            return users;
        }

        public void SalvarProduto(Produto produto)
        {
            //4|Soda Italiana|Maçã verde, cranberry, limão, tangerina e morango.|Drinks|8
            var fullPath = Directory.GetCurrentDirectory() + "\\Auxiliar\\Produtos.txt";
            var produtos = produto.GetProdutos();

            using StreamWriter file = new(fullPath);

            foreach (var item in produtos)
            {
                if (item.Id == produto.Id)
                    file.WriteLine($"{produto.Id}|{produto.Nome}|{produto.Descricao}|{produto.Categoria}|{produto.Preco}");
                else
                    file.WriteLine($"{item.Id}|{item.Nome}|{item.Descricao}|{item.Categoria}|{item.Preco}");
            }                                                                                                        
        }
    }
}
