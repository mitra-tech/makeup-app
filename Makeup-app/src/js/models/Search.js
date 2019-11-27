import axios from 'axios';

// Search by brand name
export class Brand {
  constructor(brand) {
    this.brand = brand;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.brand}`);
      this.products = res.data;
      // console.log(this.products);
    } catch(error) {
      alert(error);
    }
  }
};


// Search by product name
export class Product {
  constructor(product) {
    this.product = product;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${this.product}`);
      this.productResults = res.data;
    } catch (error) {
      alert(error);
    }
  }
};


// Search by price 
export class Price {
  constructor(price) {
    this.price = price;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=${this.price}`);
      this.priceResults = res.data;
      console.log(this.priceResults);
    } catch(error) {
      alert(error);
    }
  }
};

// Search by brand and product
export class BrandProduct {
  constructor(brand, product) {
    this.brand = brand;
    this.product = product;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.brand}&product_type=${this.product}`);
      this.brandProductResults = res.data;
      // console.log(this.products);
    } catch(error) {
      alert(error);
    }
  }
};

// Search by brand and price
export class BrandPrice {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.brand}&price_less_than=${this.price}`);
      this.brandPriceResults = res.data;
      // console.log(this.products);
    } catch(error) {
      alert(error);
    }
  }
};

// Search by product and price
export class ProductPrice {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${this.product}&price_less_than=${this.price}`);
      this.productPriceResults = res.data;
      // console.log(this.products);
    } catch(error) {
      alert(error);
    }
  }
};

// Search by brand, product and price
export class BrandProductPrice {
  constructor(brand, product, price) {
    this.brand = brand;
    this.product = product;
    this.price = price;
  }

  async getResults() {
    try {
      const res = await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.brand}&product_type=${this.product}&price_less_than=${this.price}`);
      this.brandProductPriceResults = res.data;
      // console.log(this.products);
    } catch(error) {
      alert(error);
    }
  }
};
