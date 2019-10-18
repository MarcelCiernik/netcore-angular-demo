using System;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Server.DB.DBModels;
using Server.Models;

namespace Server.DB.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IMongoCollection<Order> _table;

        public OrderRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDb"));
            var database = client.GetDatabase("WebShop");
            _table = database.GetCollection<Order>("Order");
        }

        public void InsertOrder(OrderModel order)
        {
            _table.InsertOne(new Order(){Product = order.ProductId,ProductCount = order.Amount,TotalPrice = order.ItemPrice*order.Amount,Time = DateTime.Now});
        }
    }
}
