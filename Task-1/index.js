const axios = require("axios");
const fs = require("fs");

const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

axios
  .get(url)
  .then((res) => {
    const data = res.data;
    let products = res.data.products;

    if (!Array.isArray(products)) {
      // Convert object to array
      products = Object.values(products);
    }

    // Filter out empty objects
    const validProducts = products.filter((product) => Object.keys(product).length > 0);

    const sortedProducts = validProducts.sort((a, b) => b.Popularity - a.Popularity);

    const formattedProducts = sortedProducts.map((product) => ({
      title: product.Title,
      price: product.Price,
    }));

    const jsonData = JSON.stringify(formattedProducts, null, 2);

    fs.writeFile("pro.json", jsonData, "utf8", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Data has been written to pro.json");
      }
    });
  })
  .catch((err) => {
    console.log("Failed!", err.message);
  });
