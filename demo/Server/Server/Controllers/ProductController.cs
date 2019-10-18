using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.DB.DBModels;
using Server.DB.Repositories;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        // GET api/values
        [HttpGet]
        public Product[] Get()
        {
            return _productRepository.GetProducts();
        }

        [HttpGet, Route("GetProductDetails")]

        public Product GetProductDetails(string productId)
        {
            return _productRepository.GetProductsbyId(productId);
        }

        [HttpPost]
        [Route("CreateProduct")]
        public  ActionResult CreateProduct(Product productId)
        {
            _productRepository.InsertOrder(productId);
            return Ok();
        }
    }
}