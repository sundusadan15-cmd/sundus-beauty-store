const request = require("supertest");
const app = require("../server");

test("getAll to show all product", async () => {
  const response = await request(app).get("/getAll");

  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);

  console.log("sundusadan15@gmail.com - getAll to show all product - 200 - PASSED");
});