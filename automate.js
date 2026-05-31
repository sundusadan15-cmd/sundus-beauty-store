const https = require("https");
const http = require("http");

const endpoints = [
  {
    email: "sundusadan15@gmail.com",
    url: "https://sundus-beauty-store.onrender.com/getAll"
  },
  {
    email: "havva@email.com",
    url: "https://evastoreproject.onrender.com/getAll"
  },
  {
    email: "zineb@email.com",
    url: "https://zinebstoreproject-1.onrender.com/getAll"
  }
];

function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    const client = endpoint.url.startsWith("https") ? https : http;

    client
      .get(endpoint.url, (res) => {
        const statusCode = res.statusCode;

        res.on("data", () => {});
        res.on("end", () => {
          if (statusCode === 200) {
            console.log(`${endpoint.email} - getAll to show all product - ${statusCode} - PASSED`);
          } else {
            console.log(`${endpoint.email} - getAll to show all product - ${statusCode} - FAILED`);
          }
          resolve();
        });
      })
      .on("error", () => {
        console.log(`${endpoint.email} - getAll to show all product - ERROR - FAILED`);
        resolve();
      });
  });
}

async function runTests() {
  for (const endpoint of endpoints) {
    await testEndpoint(endpoint);
  }
}

runTests();