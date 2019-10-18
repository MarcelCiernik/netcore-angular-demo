using Server.Models;

namespace Server.DB.Repositories
{
    public interface IOrderRepository
    {
        void InsertOrder(OrderModel order);
    }
}