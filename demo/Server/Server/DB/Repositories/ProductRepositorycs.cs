using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Server.DB.DBModels;

namespace Server.DB.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMongoCollection<Product> _table;

        public ProductRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDb"));
            var database = client.GetDatabase("WebShop");
            _table = database.GetCollection<Product>("Product");
        }

        public void InsertOrder(Product newProduct)
        {
            _table.InsertOne(newProduct);
        }

        public Product[] GetProducts()
        {
            List<Product> waterManagements = new List<Product>();

            var cursor = _table.FindAsync(_=>true);
            while (cursor.Result.MoveNext())
            {
                waterManagements.AddRange(cursor.Result.Current);
            }
            return waterManagements.ToArray();
        }

        public Product GetProductsbyId(string productId)
        {
            List<Product> waterManagements = new List<Product>();

            var cursor = _table.FindAsync(_=>_.Id==productId);
            while (cursor.Result.MoveNext())
            {
                waterManagements.AddRange(cursor.Result.Current);
            }
            return waterManagements.ToArray().Single();
        }
    }
}
