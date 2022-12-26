let mostrador = document.getElementById("board");
let compras = document.getElementById("articulosCarrito"); 

let productos = filterProducts('VERDURAS'); /*productos que se muestran en pantalla*/

const comprarButton = [];
const masButton = [];
const menosButton = [];



const QTY = []; // ARREGLO AUXILIAR PARA EL MANEJO DE CANTIDAD DE ELEMENTOS DE UN MISMO PRODUCTO A COMPRAR
QTY.length = stock.length;
QTY.fill(0);

/*FUNCION QUE CALCULA UN DESCUENTO A PARTIR DE UN TOTAL Y UN PORCENTAJE A DESCONTAR*/
function descuento(total,desc){return (desc == 0) ? total : (total - ((total * desc)/100));}

function restarQty(cantidad){ return(cantidad > 0) ?  (cantidad--) : cantidad;};
function sumarQty(cantidad,stock){ return (cantidad < stock) ? cantidad++ : stock;};

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
        <div >
            <img class="imagenProducto" src="${producto.img}" alt="">
        </div>
        <p class="productName">${producto.name}</p>
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
        comprarButton[i].addEventListener("click",() => {agregarACarrito(stock[i].name,stock[i].price,stock[i].qty); });

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

/*FUNCION QUE LIMPIA LA PANTALLA DE LOS PRODUCTOS*/
function clearMostrador(){/*mostrador.innerHTML = '';*/}

/*FUNCION QUE AGREGA UN PRODUCTO AL CARRITO, SUS PARAMETROS DE ENTRADA SON NOMBRE CANTIDAD  Y PRECIO */
function agregarACarrito(nombre,precio,cantidad){
    if (cantidad>0){
        if (carrito.find(elemento => elemento.name == nombre)) carrito.find(elemento => elemento.name == nombre).qty += cantidad;
        else{
        carrito.push({
            name: nombre,
            price: precio,
            qty: cantidad,
        });
        console.log(nombre) //
        console.log(carrito.find(elemento => elemento.name == nombre).name)} //
        mostrarCarrito();
    }
    
}
    
    /*FUNCION QUE MUESTRA LOS CONTENIDOS DEL CARRITO EN PANTALLA*/
function mostrarCarrito(){
    const total = document.getElementById("total");
  
    compras.innerHTML= "";
    let suma = 0;
    carrito.forEach(elemento => {
        const checkout = document.createElement("li");
        checkout.classList.add("textCarrito");
        checkout.innerHTML = "";
        checkout.innerHTML = `<p> ${elemento.name} $${elemento.price}x${elemento.qty}<\p>`
        compras.append(checkout);
        suma = suma + (elemento.qty * elemento.price);
    })
    total.innerHTML=`TOTAL = $${suma}`;
    console.log(carrito.length) 

};



//DEJAR FUNCIONANDO EL CARRITO 

// AGREGAR STORAGE 
// AGREGAR LIBRERIAS 