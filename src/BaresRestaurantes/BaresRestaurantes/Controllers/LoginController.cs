using BaresRestaurantes.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BaresRestaurantes.Controllers
{
    public class LoginController : Controller
    {
        private readonly IConfiguration configuration;

        public LoginController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        [HttpGet]
        public ActionResult UsuarioLogin()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> UsuarioLogin([Bind] Usuario _usuario)
        {
            var listUsers = _usuario.GetUsuarios();

            if (listUsers.Any(user => user.Login == _usuario.Login && user.Password == _usuario.Password))
            {
                var userClaims = new List<Claim>()
                {
                    //define o cookie
                    new Claim(ClaimTypes.Name, _usuario.Login),
                    new Claim(ClaimTypes.Email, "lelisolutions@gmail.com"),
                };

                var minhaIdentity = new ClaimsIdentity(userClaims, "Usuario");

                var userPrincipal = new ClaimsPrincipal(new[] { minhaIdentity });
                //cria o cookie
                await HttpContext.SignInAsync(userPrincipal);

                return RedirectToAction("Index", "Home");
            }

            ViewBag.Message = "Credenciais inválidas...";

            return View(_usuario);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
