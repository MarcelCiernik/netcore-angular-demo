using Moq;
using NUnit.Framework;
using Server.Controllers;
using Server.DB.DBModels;
using Server.DB.Repositories;

namespace ServerTest.Controller
{
    public class Tests
    {
        private Mock<IProductRepository> _productRepositoryMock;


        private ProductController systemUnderTest;

        [SetUp]
        public void Setup()
        {
            _productRepositoryMock = new Mock<IProductRepository>();
            systemUnderTest = new ProductController(_productRepositoryMock.Object);
        }

        [Test]
        public void CreateProduct_DataInserted()
        {
            var producttocreat = new Product(){AnimalCategory = "test"};
            systemUnderTest.CreateProduct(producttocreat);
            _productRepositoryMock.Verify(_=>_.InsertOrder(producttocreat),Times.Once);
        }
    }
}