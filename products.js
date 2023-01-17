async function recoverStock(){
    let inventario = await fetch('stock.json')
    console.log(inventario)
    let stock = await inventario.json()
    console.log(stock)
    return stock;
}


let stock = recoverStock();
console.log('HOLAAAAAAAA')
console.log(stock)
console.log('holaaaa')
const carrito = [];
