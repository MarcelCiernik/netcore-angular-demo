using Server.DB.DBModels;

namespace Server.DB.Repositories
{
    public interface IProductRepository
    {
        void InsertOrder(Product newProduct);
        Product[] GetProducts();
        Product GetProductsbyId(string productId);
    }
}