using Microsoft.AspNetCore.Mvc;

namespace MyFirstASPNETBlankProjectFun.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            // write our code here
            return View();
        }
    }
}
