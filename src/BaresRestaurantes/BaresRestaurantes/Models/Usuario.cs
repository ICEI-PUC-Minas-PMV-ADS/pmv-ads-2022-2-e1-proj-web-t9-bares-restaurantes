using System.Collections.Generic;

namespace BaresRestaurantes.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public List<Usuario> GetUsuarios()
        {
            var users = new List<Usuario>();
            users.Add(new Usuario { Id = 1, Nome = "Administrador", Login = "admin", Email = "admin@gmail.com", Password = "123" });
            users.Add(new Usuario { Id = 2, Nome = "Elísia", Login = "elisia", Email = "elisia@gmail.com", Password = "123" });

            return users;
        }
    }
}
