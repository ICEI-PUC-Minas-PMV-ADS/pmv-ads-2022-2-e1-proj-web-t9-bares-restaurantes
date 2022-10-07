using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace BaresRestaurantes.Models
{
    public class Pedido
    {
        public int Id { get; set; }
        public Produto Produto { get; set; }
        public DateTime DataInicio { get; set; }
        public int TempoDePreparo { get; set; }
        public string Status { get; set; }
        public bool EmAtraso { get; set; }

        public List<Pedido> GetPedidos()
        {
            var pedidos = new List<Pedido>();
            var prod = new Produto();
            var fullPath = Environment.CurrentDirectory + "\\Auxiliar\\Pedidos.txt";
            var lines = File.ReadLines(fullPath);
            foreach (var item in lines)
            {
                var dados = item.Split('|');
                var id = Convert.ToInt32(dados[0]);
                var idProd = Convert.ToInt32(dados[1]);
                var data = MontarData(dados[2]);
                var tempo = Convert.ToInt32(dados[3]);
                var status = dados[4];
                var produto1 = prod.GetProdutos().FirstOrDefault(it => it.Id == idProd);
                var pedido = new Pedido() { Id = id, Produto = produto1, DataInicio = data, TempoDePreparo = tempo, Status = status };
                pedido.EmAtraso = pedido.DataInicio.AddMinutes(pedido.TempoDePreparo) < DateTime.Now;
                pedidos.Add(pedido);
            }

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

        public DateTime MontarData(string dataString)
        {
            var dataSplit = dataString.Split(',');
            var ano = Convert.ToInt32(dataSplit[0]);
            var mes = Convert.ToInt32(dataSplit[1]);
            var dia = Convert.ToInt32(dataSplit[2]);
            var hora = Convert.ToInt32(dataSplit[3]);
            var min = Convert.ToInt32(dataSplit[4]);
            var s = Convert.ToInt32(dataSplit[5]);
            return new DateTime(ano,mes,dia,hora,min,s);
        }
    }
}
