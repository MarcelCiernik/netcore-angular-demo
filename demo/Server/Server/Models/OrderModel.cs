namespace Server.Models
{
    public class OrderModel
    {
        public int Amount { get; set; }
        public string ProductId { get; set; }

        public decimal ItemPrice { get; set; }
    }
}
