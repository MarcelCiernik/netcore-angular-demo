export class NewProductDetail implements ProductDetail {
  id: string;
  animalCategory: string;
  name: string;
  price: number;
  description: string;
  constructor(animalCategory: string, name: string, price: number, description: string) {
    this.animalCategory = animalCategory;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
