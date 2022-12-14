let mostrador = document.getElementById("board");
let compras = document.getElementById("articulosCarrito"); 

let productos = filterProducts('VERDURAS'); /*productos que se muestran en pantalla*/

const comprarButton = [];
const masButton = [];
const menosButton = [];

/*FUNCION QUE CALCULA UN DESCUENTO A PARTIR DE UN TOTAL Y UN PORCENTAJE A DESCONTAR*/
function descuento(total,desc){return (desc == 0) ? total : (total - ((total * desc)/100));}

/*FUCNION QUE MUSTRA LOS PRODUCTOS DEL STOCK DESEADOS*/
function filterProducts(tipo){
    let aux;
    if (tipo=='VERDURAS') aux = stock.filter(elemento => elemento.type == 'VERDURA');
    else if (tipo == 'FRUTAS') aux = stock.filter(elemento => elemento.type == 'FRUTA'); /* SE UTILIZA ESTRUCTURA ELSE IF PARA LUEGO SEGUIR AGREGANDO MAS ELEMENTOS DE FORMA SENCILLA*/
    return aux;
}
function mostrarTodos(){
    stock.forEach((producto) => {
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
    
    for (let i = 0; i < stock.length; i++) {
        comprarButton[i] = document.getElementById(`comprar${i}`);
        comprarButton[i].addEventListener("click",() => {
            agregarACarrito(stock[i].name,stock[i].price,stock[i].qty);
            const cantidad = document.getElementById(`cantidad${i}`);
            stock[i].qty=0; 
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

}

// FUNCION QUE DESPLIEGA EN LA PAGINA LOS PRODUCTOS 
function esconderProductos(verProductos){
    productos = document.getElementsByClassName(verProductos);
    for (let i = 0; i < productos.length; i++) {
        productos[i].style.display = "none";
      }
};

function mostrarProductos(verProductos){
    productos = document.getElementsByClassName(verProductos);
    for (let i = 0; i < productos.length; i++) {
        productos[i].style.display = "block";
      }
};


/*FUNCION QUE AGREGA UN PRODUCTO AL CARRITO, SUS PARAMETROS DE ENTRADA SON NOMBRE CANTIDAD  Y PRECIO */
function agregarACarrito(nombre,precio,cantidad){
    if (cantidad>0){
        if (carrito.find(elemento => elemento.name == nombre)) carrito.find(elemento => elemento.name == nombre).qty += cantidad;
        else{
        carrito.push({
            name: nombre,
            price: precio,
            qty: cantidad,
        })} 
        mostrarCarrito();
    }
    
}
    
/*FUNCION QUE MUESTRA LOS CONTENIDOS DEL CARRITO EN PANTALLA*/
function mostrarCarrito(){
    const total = document.getElementById("total");
  
    compras.innerHTML= "";
    let suma = 0;
    if (carrito.length>0){carrito.forEach(elemento => {
        const checkout = document.createElement("li");
        checkout.classList.add("textCarrito");
        checkout.innerHTML = "";
        checkout.innerHTML = `<p> ${elemento.name} $${elemento.price}x${elemento.qty}<\p>`
        compras.append(checkout);
        suma = suma + (elemento.qty * elemento.price);
    })}
    total.innerHTML=`TOTAL = $${suma}`;

}

/*FUNCION QUE ACTUALIZA EL STOCK RESTANTE DE LOS PRODUCTOS LUEGO DE UNA COMPRA EXITOSA*/

function actualiazrStock(){
    carrito.forEach(element => {
        stock.find(elemento => elemento.name == element.name).stock = stock.find(elemento => elemento.name == element.name).stock - element.qty;
        const actStock = document.getElementById(`stockProduct${stock.find(elemento => elemento.name == element.name).id}`);
        actStock.innerHTML=`(stock: ${stock.find(elemento => elemento.name == element.name).stock})`        
    });
}

/*FUNCION QUE RESETEA EL CONTADOR DE STOCK DE TODOS LOS ELEMENTOS EN EL MOSTRADOR*/
function resetStockCounter(){
    stock.forEach(elemento => {
        const actStock = document.getElementById(`stockProduct${elemento.id}`);
        actStock.innerHTML=`(stock: ${elemento.stock})`
    })
}

/*GUARDO INFORMACION DEL ID Y STOCK RESTANTE DE LOS PRODUCTOS EN EL LOCAL STORAGE*/
function store(){
    const aux = [];
    stock.forEach(elemento => {
        let status = [elemento.id,elemento.stock];
        aux.push(status);
    })
    let storage = JSON.stringify(aux);
    localStorage.setItem('stock',storage);
}

/*FUNCION QUE LIMPIA EL CARRITO*/
function limpiarCarrito(){
    carrito.length = 0;
    mostrarCarrito();
}

/*FUNCION QUE RECUPERA INFORMACION DEL STOCK RESTANTE DEL LOCAL STORAGE*/
function recoverStorage(){
    if (localStorage.getItem('stock')){
        let store = localStorage.getItem('stock');
        store=JSON.parse(store);
        store.forEach(element => {
            if(stock.find(elemento => elemento.id == element[0]))stock.find(elemento => elemento.id == element[0]).stock=element[1];
        })
    }
}

/*FUNCION QUE GUARDA INFORMACION DEL CONTENIDO DEL CARRITO EN LA SESSION STORAGE*/
function storeSession(){
    const aux=[];
    carrito.forEach(elemento => {
        let status = [elemento.name,elemento.qty];
       aux.push(status);
    })
    let storage = JSON.stringify(aux);
   sessionStorage.setItem('carrito',storage);
}

/*FUNCION QUE MUESTRA CONTENIDO DEL CARRITO A PARTIR DE LO QUE HAY GUARDADO EN LA SESSION STORAGE*/
function recoverSessionStorage(){
    if (sessionStorage.getItem('carrito')){
    let recover = sessionStorage.getItem('carrito');
    recover=JSON.parse(recover);
    if (recover.length != 0){
        recover.forEach(element => {
            agregarACarrito(element[0],parseInt(stock.find(elemento => elemento.name == element[0]).price),parseInt(element[1]));
        })
    }
    mostrarCarrito();}
}
/*REESTABLECE LOS VALORES DEL STOCK*/
function resetStock(){
    stock.forEach(element => {
        element.qty = 0;
        element.stock=100;
    })
}