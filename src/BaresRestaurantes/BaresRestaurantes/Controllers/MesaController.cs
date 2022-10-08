using BaresRestaurantes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaresRestaurantes.Controllers
{
    [Authorize]
    public class MesaController : Controller
    {
        public IActionResult Index()
        {
            var mesas = new Mesa().GetMesas();
            return View(mesas);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null)
                return NotFound();

            var mesas = new Mesa().GetMesas();

            return View(mesas.FirstOrDefault(prod => prod.Id == id));
        }

        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind] Mesa mesa)
        {
            if (id == null)
                return NotFound();

            if (ModelState.IsValid)
            {
                //pedido.SalvarPedido(pedido);
                return RedirectToAction(nameof(Index));
            }

            return View();
        }
    }
}
