using BaresRestaurantes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaresRestaurantes.Controllers
{
    [Authorize]
    public class CardapioController : Controller
    {
        public IActionResult Index()
        {
            var produtos = new Produto().GetProdutos();
            return View(produtos);
        }
    }
}
