const { argv } = require("process");
const dashboard = require("./dashboard");
const dep = require("./dep");
const sell = require("./sell");



const action = process.argv[2]

async function app () {
    switch (action) {
        case undefined : 
            await dashboard()
            break
        

        case "--dep" : {
        const productName = process.argv[3];
        const count = Number(process.argv[4]);
        await dep(productName, count)
        break
        }

        case "--sell" : {
        const productName = process.argv[3];
        const count = Number(process.argv[4]);
       
        await sell(productName, count)

        }

        default:
            break;
    }
}
app()