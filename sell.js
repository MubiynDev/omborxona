const fs = require("fs/promises");
const path = require("path");

module.exports = async function sell(productName, count) {
    const dbPath = path.join(__dirname, "data.json");
    const data = await fs.readFile(dbPath, "utf-8")
    const { products } = JSON.parse(data)

    const productIndex = products.findIndex(el => el.nomi.toLowerCase() === productName.toLowerCase());
    
   if(productIndex > -1){
    if(count > products[productIndex].qoldi - 0){
        return console.log("siz ombordagi mavjud tovar sonidan kop son kiritdingiz. faqatgina omborda bor maxsulotni sota olasiz.")
    }


     products[productIndex].sotildi += count;
     products[productIndex].qoldi -= count



    }else{
        return console.log("mavjud bo'lmagan maxsulot nomi kiritildi!")
    }
    await fs.writeFile(dbPath, JSON.stringify({ products }))
    console.log(`${count} ta ${productName} muvaffaqiyatli sotildi !`)
}