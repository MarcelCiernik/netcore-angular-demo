using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.DB.DBModels
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public decimal TotalPrice { get; set; }

        public string Product { get; set; }

        public int ProductCount { get; set; }

        public DateTime Time { get; set; }
    }
}
