const productsMock = [
  {
    name: "Brown t-shirt",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1533025625706-f321868a1e6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=924b11607083a7d154547c4853d3eaa5&auto=format&fit=crop&w=800&q=60",
    tags: ["expensive", "brown"]
  },
  {
    name: "White chair",
    price: "20",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=800&q=60",
    tags: ["white", "cheap"]
  },
  {
    name: "White camera",
    price: "100",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df4d2256d54f07d2d40ce7cda76c7ebf&auto=format&fit=crop&w=800&q=60",
    tags: ["expensive", "white"]
  },
  {
    name: "Black bike",
    price: "399",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53d820e6622fadd53b8638d60f468ccd&auto=format&fit=crop&w=800&q=60",
    tags: ["expensive", "black"]
  },
  {
    name: "Red shoes",
    price: "30",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e44599932dce6b8440e26fb91e10a69&auto=format&fit=crop&w=800&q=60",
    tags: ["red", "expensive"]
  },
  {
    name: "Black headphones",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9f0fdc18a215ec725f8ca61dc6fcbdf&auto=format&fit=crop&w=800&q=60",
    tags: ["black", "expensive"]
  },
  {
    name: "Green plant",
    price: "10",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f845f73f09557d1a5d5b938de98e4392&auto=format&fit=crop&w=800&q=60",
    tags: ["green", "cheap"]
  },
  {
    name: "Red phone",
    price: "999",
    image:
      "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87a01c4351a5046d05b84894506fbb7d&auto=format&fit=crop&w=800&q=60",
    tags: ["red", "expensive"]
  },
  {
    name: "Brown boots",
    price: "90",
    image:
      "https://images.unsplash.com/photo-1521001750463-5f3e18f2da2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=819e9dcb75b84114278a7163ff38a91c&auto=format&fit=crop&w=800&q=60",
    tags: ["brown", "expensive"]
  }
];

function filteredProductsMock(tag) {
  return productsMock.filter(product => product.tags.includes(tag));
}

class ProductsServiceMock {
  async getProducts() {
    return Promise.resolve(productsMock);
  }

  async createProduct() {
    return Promise.resolve("6bedb1267d1ca7f3053e2875");
  }
}

module.exports = {
  productsMock,
  filteredProductsMock,
  ProductsServiceMock
};
