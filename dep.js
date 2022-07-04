const fs = require("fs/promises");
const path = require("path");

module.exports = async function dep(productName, count) {
    const dbPath = path.join(__dirname, "data.json");
    const data = await fs.readFile(dbPath, "utf-8")
    const { products } = JSON.parse(data)

    const productIndex = products.findIndex(el => el.nomi.toLowerCase() === productName.toLowerCase());
    
    if(productIndex > -1){
        products[productIndex].jami += count
        products[productIndex].qoldi += count
    }else{
        products.push({
            nomi: productName,
            jami: count,
            sotildi: 0,
            qoldi: count
        })
    }

    await fs.writeFile(dbPath, JSON.stringify({ products }))
    console.log(`${count} ta ${productName} omborga qo'shildi`)
}