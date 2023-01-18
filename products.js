async function recoverStock(){
    let inventario = await fetch('stock.json')
    console.log(inventario)
    let stock = await inventario.json()
    console.log(stock)
    return stock;
}


let stock = recoverStock();

const carrito = [];
