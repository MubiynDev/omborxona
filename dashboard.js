const fs = require("fs/promises");
const path = require("path");

module.exports = async function dashboard () {
  const dbPath = path.join(__dirname, "data.json");
  const data = await fs.readFile(dbPath, "utf-8")
  const { products } = JSON.parse(data)

  console.table(products)
}