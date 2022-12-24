let mostrador = document.getElementById("board");


const QTY = []; // ARREGLO AUXILIAR PARA EL MANEJO DE CANTIDAD DE ELEMENTOS DE UN MISMO PRODUCTO A COMPRAR
QTY.length = stock.length;
QTY.fill(0);

/*FUNCION QUE CALCULA UN DESCUENTO A PARTIR DE UN TOTAL Y UN PORCENTAJE A DESCONTAR*/
function descuento(total,desc){return (desc == 0) ? total : (total - ((total * desc)/100));}

/*FUCNION QUE MUSTRA LOS PRODUCTOS DEL STOCK DESEADOS*/
function filterProducts(tipo){
    let aux;
    if (tipo=='VERDURAS') aux = stock.filter(elemento => elemento.type == 'VERDURA');
    else if (tipo == 'FRUTAS') aux = stock.filter(elemento => elemento.type == 'FRUTA'); /* SE UTILIZA ESTRUCTURA ELSE IF PARA LUEGO SEGUIR AGREGANDO MAS ELEMENTOS DE FORMA SENCILLA*/
    return aux;
}

// FUNCION QUE DESPLIEGA EN LA PAGINA LOS PRODUCTOS 
function mostrarProductos(verProductos){
    let productos = filterProducts(verProductos);
    productos.forEach((producto) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="producto">
    <div >
        <img class="imagenProducto" src="${producto.img}" alt="">
    </div>
    <p class="productName">${producto.name}</p>
    <p class="productName">$ ${producto.price}</p>
    <div class="compraProducto">
        <button id="comprar${producto.id}" class="text">comprar</button>
        <button id="menos${producto.id}" class="masYmenos">-</button><p class="text">${producto.qty}</p><button id="mas${producto.id}" class="masYmenos">+</button>
        </div>
    </div>
  `;
    mostrador.append(content);
});
};

/*FUNCION QUE LIMPIA LA PANTALLA DE LOS PRODUCTOS*/
function clearMostrador(){mostrador.innerHTML = '';}



// DEJAR FUNCIONANDO BOTONES DE + Y - 
//DEJAR FUNCIONANDO EL CARRITO 

// AGREGAR STORAGE 
// AGREGAR LIBRERIAS 