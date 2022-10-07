using System;
using System.Collections.Generic;

namespace BaresRestaurantes.Models
{
    public class Pedido
    {
        public int Id { get; set; }
        public Produto Produto { get; set; }
        public DateTime DataInicio { get; set; }
        public int TempoDePreparo { get; set; }
        public StatusPedido Status { get; set; }
        public bool EmAtraso { get; set; }

        public List<Pedido> GetPedidos()
        {
            var pedidos = new List<Pedido>();
            var produto1 = new Produto { Id = 1, Nome = "Filé a Parmegiana", Descricao = "Filé mignon à milanesa, gratinado com molho de tomate e queijo.", Categoria = "Pratos Alacarte", Preco = 99.90f };
            var produto2 = new Produto { Id = 3, Nome = "Moscow Mule", Descricao = "Vodka, espuma de gengbre,suco de limão, ginger Ale.", Categoria = "Drinks", Preco = 17f };
            var pedido1 = new Pedido() { Id = 1, Produto = produto1, DataInicio = new DateTime(2022, 10, 7, 20, 0, 0), TempoDePreparo = 30, Status = StatusPedido.EmAndamento };
            pedido1.EmAtraso = pedido1.DataInicio.AddMinutes(pedido1.TempoDePreparo) < DateTime.Now;
            var pedido2 = new Pedido() { Id = 2, Produto = produto2, DataInicio = new DateTime(2022, 10, 7, 20, 0, 0), TempoDePreparo = 5, Status = StatusPedido.EnviadoAoCliente };
            pedido2.EmAtraso = pedido2.DataInicio.AddMinutes(pedido2.TempoDePreparo) < DateTime.Now;
            pedidos.Add(pedido1);
            pedidos.Add(pedido2);

            return pedidos;
        }

        public enum StatusPedido
        {
            Aberto,
            RebidoNaCozinha,
            EmAndamento,
            Finalizado,
            EnviadoAoCliente
        }
    }
}
