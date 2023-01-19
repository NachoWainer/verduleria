const stock = [];
let mostrador = document.getElementById("board");

// FUNCION QUE OCULTA PRODUCTOS EN LA PAGINA  
function esconderProductos(verProductos){
    productos = document.getElementsByClassName(verProductos);
    for (let i = 0; i < productos.length; i++) {
        productos[i].style.display = "none";
      }
};

// FUNCION QUE MUESTRA AL USUARIO PRODUCTOS EN LA PAGINA
function mostrarProductos(verProductos){
    productos = document.getElementsByClassName(verProductos);
    for (let i = 0; i < productos.length; i++) {
        productos[i].style.display = "block";
      }
};


// FUNCION QUE OBTIENE DATOS DEL JSON CON LOS PRODUCTOS Y LOS DESPLIEGA EN LA PAGINA
async function recoverStock(){
    const resp = await fetch("stock.json")
    const data = await resp.json()

    data.forEach(element => {stock.push(element)  
    });

    if (localStorage.getItem("stock") === null){
   stock.forEach((producto) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="producto ${producto.type}">
    <div>
        <img class="imagenProducto" src="./public/${producto.img}" alt="">
    </div>
    <div class="productNameStock">
    <p class="productName">${producto.name}</p>
    <p id="stockProduct${producto.id}" class="productStock">(stock: ${producto.stock})</p>
    </div>
    <p class="productName">$ ${producto.price}</p>
    <div class="compraProducto">
        <button id="comprar${producto.id}" class="text">comprar</button>
        <button id="menos${producto.id}" class="masYmenos">-</button><p id="cantidad${producto.id}" class="text">${producto.qty}</p><button id="mas${producto.id}" class="masYmenos">+</button>
        </div>
    </div>
  `;
    mostrador.append(content);
});

for (let i = 0; i < stock.length; i++) {
    comprarButton[i] = document.getElementById(`comprar${i}`);
    comprarButton[i].addEventListener("click",() => {
        agregarACarrito(stock[i].name,stock[i].price,stock[i].qty,stock[i].id);
        const cantidad = document.getElementById(`cantidad${i}`);
        stock[i].qty=1; 
        cantidad.innerHTML=`${stock[i].qty}`;
        storeSession();});//reseteo contador de item

    menosButton[i] = document.getElementById(`menos${i}`);
    menosButton[i].addEventListener("click",() => {
        if(stock[i].qty > 0){stock[i].qty--};
        const cantidad = document.getElementById(`cantidad${i}`);
        cantidad.innerHTML=`${stock[i].qty}`;});

    masButton[i] = document.getElementById(`mas${i}`);
    masButton[i].addEventListener("click",() => {
        if(stock[i].qty < stock[i].stock){stock[i].qty++};
        const cantidad = document.getElementById(`cantidad${i}`);
        cantidad.innerHTML=`${stock[i].qty}`;
        
    }); 
}
store();
}
else {
    let stockAux = localStorage.getItem('stock');
    stockAux = JSON.parse(stockAux);
    stockAux.forEach((producto) => {
        const content = document.createElement("div");
        content.innerHTML = `
        <div class="producto ${producto.type}">
        <div>
            <img class="imagenProducto" src="${producto.img}" alt="">
        </div>
        <div class="productNameStock">
        <p class="productName">${producto.name}</p>
        <p id="stockProduct${producto.id}" class="productStock">(stock: ${producto.stock})</p>
        </div>
        <p class="productName">$ ${producto.price}</p>
        <div class="compraProducto">
            <button id="comprar${producto.id}" class="text">comprar</button>
            <button id="menos${producto.id}" class="masYmenos">-</button><p id="cantidad${producto.id}" class="text">${producto.qty}</p><button id="mas${producto.id}" class="masYmenos">+</button>
            </div>
        </div>
      `;
        mostrador.append(content);
    });
    
    for (let i = 0; i < stockAux.length; i++) {
        comprarButton[i] = document.getElementById(`comprar${i}`);
        comprarButton[i].addEventListener("click",() => {
            agregarACarrito(stockAux[i].name,stockAux[i].price,stockAux[i].qty,stockAux[i].id);
            const cantidad = document.getElementById(`cantidad${i}`);
            stockAux[i].qty=1; 
            cantidad.innerHTML=`${stockAux[i].qty}`;
            storeSession();});//reseteo contador de item
    
        menosButton[i] = document.getElementById(`menos${i}`);
        menosButton[i].addEventListener("click",() => {
            if(stockAux[i].qty > 0){stockAux[i].qty--};
            const cantidad = document.getElementById(`cantidad${i}`);
            cantidad.innerHTML=`${stockAux[i].qty}`;});
    
        masButton[i] = document.getElementById(`mas${i}`);
        masButton[i].addEventListener("click",() => {
            if(stockAux[i].qty < stockAux[i].stock){stockAux[i].qty++};
            const cantidad = document.getElementById(`cantidad${i}`);
            cantidad.innerHTML=`${stockAux[i].qty}`;
            
        }); 
    }
}
mostrarProductos("FRUTA");
esconderProductos("VERDURA");
}

recoverStock();
const carrito = [];


 
