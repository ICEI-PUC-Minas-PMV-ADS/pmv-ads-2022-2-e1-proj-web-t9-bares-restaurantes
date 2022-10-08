using BaresRestaurantes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaresRestaurantes.Controllers
{
    [Authorize]
    public class PedidoController : Controller
    {
        public IActionResult Index()
        {
            var pedidos = new Pedido().GetPedidos();
            return View(pedidos);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null)
                return NotFound();

            var pedidos = new Pedido().GetPedidos();

            return View(pedidos.FirstOrDefault(prod => prod.Id == id));
        }

        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind] Pedido pedido)
        {
            if (id == null)
                return NotFound();

            if (ModelState.IsValid)
            {
                var produto = new Produto().GetProdutos().FirstOrDefault(it => it.Id == pedido.Produto.Id);
                pedido.Produto = produto;
                pedido.SalvarPedido(pedido);
                return RedirectToAction(nameof(Index));
            }

            return View();
        }
    }
}
