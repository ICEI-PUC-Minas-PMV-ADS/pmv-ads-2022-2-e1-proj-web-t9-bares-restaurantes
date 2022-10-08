using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;

namespace BaresRestaurantes.Models
{
    public class Mesa
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public bool Aberta { get; set; }
        public List<Pedido> Pedidos { get; set; }
        [DisplayFormat(DataFormatString = "{0:C}")]
        public double Total { get; set; }

        public List<Mesa> GetMesas()
        {
            var users = new List<Mesa>();
            var fullPath = Directory.GetCurrentDirectory() + "\\Auxiliar\\Mesas.txt";
            var lines = File.ReadLines(fullPath);
            foreach (var item in lines)
            {
                var dados = item.Split('|');
                var id = Convert.ToInt32(dados[0]);
                var numero = Convert.ToInt32(dados[1]);
                var aberta = Convert.ToBoolean(dados[2]);
                var pedidos = GetPedidos(dados[3]);
                users.Add(new Mesa { Id = id, Numero = numero, Aberta = aberta, Pedidos = pedidos, Total = pedidos.Sum(it =>it.Produto.Preco) });
            }
            
            return users;
        }

        private List<Pedido> GetPedidos(string pedidosString)
        {
            var pedidos = new List<Pedido>(); 
            var idPedidos = pedidosString.Split(',');
            foreach (var item in idPedidos)
            {
                var idPedido = Convert.ToInt32(item);
                var pedido = new Pedido().GetPedidos().FirstOrDefault(it => it.Id == idPedido);
                pedidos.Add(pedido);
            }

            return pedidos;
        }

        //public void SalvarProduto(Mesa produto)
        //{
        //    //4|Soda Italiana|Maçã verde, cranberry, limão, tangerina e morango.|Drinks|8
        //    var fullPath = Directory.GetCurrentDirectory() + "\\Auxiliar\\Produtos.txt";
        //    var produtos = produto.GetProdutos();

        //    using StreamWriter file = new(fullPath);

        //    foreach (var item in produtos)
        //    {
        //        if (item.Id == produto.Id)
        //            file.WriteLine($"{produto.Id}|{produto.Nome}|{produto.Descricao}|{produto.Categoria}|{produto.Preco}");
        //        else
        //            file.WriteLine($"{item.Id}|{item.Nome}|{item.Descricao}|{item.Categoria}|{item.Preco}");
        //    }                                                                                                        
        //}
    }
}
