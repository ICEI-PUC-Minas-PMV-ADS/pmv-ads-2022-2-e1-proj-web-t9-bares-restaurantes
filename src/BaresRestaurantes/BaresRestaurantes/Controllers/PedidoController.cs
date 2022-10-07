using BaresRestaurantes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

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
    }
}
