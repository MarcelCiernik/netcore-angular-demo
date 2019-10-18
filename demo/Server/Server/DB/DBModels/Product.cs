using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.DB.DBModels
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string AnimalCategory { get; set; }
        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }
    }
}
