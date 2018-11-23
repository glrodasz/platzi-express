const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  MongoLibMock,
  getAllStub,
  createStub
} = require("../utils/mocks/mongoLib");

const {
  productsMock,
  filteredProductsMock
} = require("../utils/mocks/products");

describe("services - products", function() {
  const ProductsService = proxyquire("../services/products", {
    "../lib/mongo": MongoLibMock
  });

  const productsService = new ProductsService();

  describe("when getProducts method is called", async function() {
    it(" should call the getAll MongoLib method", async function() {
      await productsService.getProducts({});
      assert.strictEqual(getAllStub.called, true);
    });

    it("should return an array of products", async function() {
      const result = await productsService.getProducts({});
      const expected = productsMock;
      assert.deepEqual(result, expected);
    });
  });

  describe("when getProducts method is called with tags", async function() {
    it("should all the getAll MongoLib method with tags args", async function() {
      await productsService.getProducts({ tags: ["expensive"] });
      const tagQuery = { tags: { $in: ["expensive"] } };
      assert.strictEqual(getAllStub.calledWith("products", tagQuery), true);
    });

    it("should return an array of products filtered by the tag", async function() {
      const result = await productsService.getProducts({ tags: ["expensive"] });
      const expected = filteredProductsMock("expensive");
      assert.deepEqual(result, expected);
    });
  });
});
