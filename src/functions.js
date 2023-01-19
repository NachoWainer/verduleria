
let compras = document.getElementById("articulosCarrito"); 

let productos = filterProducts('VERDURAS'); /*productos que se muestran en pantalla*/

const comprarButton = [];
const masButton = [];
const menosButton = [];
const eliminarDeCarrito = [];
let suma = 0;



/*FUNCION QUE CALCULA UN DESCUENTO A PARTIR DE UN TOTAL Y UN PORCENTAJE A DESCONTAR*/
function descuento(total,desc){return (desc == 0) ? total : (total - ((total * desc)/100));}

/*FUCNION QUE MUSTRA LOS PRODUCTOS DEL STOCK DESEADOS*/
function filterProducts(tipo){
    let aux;
    if (tipo=='VERDURAS') aux = stock.filter(elemento => elemento.type == 'VERDURA');
    else if (tipo == 'FRUTAS') aux = stock.filter(elemento => elemento.type == 'FRUTA'); /* SE UTILIZA ESTRUCTURA ELSE IF PARA LUEGO SEGUIR AGREGANDO MAS ELEMENTOS DE FORMA SENCILLA*/
    return aux;
}

async function getSeason(){
let season;
const resp = await fetch()

return season 
}




/*FUNCION QUE AGREGA UN PRODUCTO AL CARRITO, SUS PARAMETROS DE ENTRADA SON NOMBRE CANTIDAD  Y PRECIO */
function agregarACarrito(nombre,precio,cantidad,id){
    if (cantidad>0){
        if (carrito.find(elemento => elemento.name == nombre)) carrito.find(elemento => elemento.name == nombre).qty += cantidad;
        else{
        carrito.push({
            name: nombre,
            price: precio,
            qty: cantidad,
            id: id,
        })} 
        mostrarCarrito();
    }
    
}
    
/*FUNCION QUE MUESTRA LOS CONTENIDOS DEL CARRITO EN PANTALLA*/
function mostrarCarrito(){
    const total = document.getElementById("total");
  
    compras.innerHTML= "";
        suma = 0;
    if (carrito.length>0){carrito.forEach(elemento => {
        const checkout = document.createElement("li");
        checkout.classList.add("textCarrito");
        checkout.innerHTML = "";
        checkout.innerHTML = `<p> ${elemento.name} $${elemento.price}x${elemento.qty}  <button id="eliminar${elemento.id}"><img src="./public/images/icons/trash-can.png"></button><\p> `
        compras.append(checkout);
        suma = suma + (elemento.qty * elemento.price);
        
        

    })}
    total.innerHTML=`TOTAL = $${suma}`;
    
   
    for (let i = 0; i < carrito.length; i++) {
        eliminarDeCarrito[carrito[i].id] = document.getElementById(`eliminar${carrito[i].id}`)
        eliminarDeCarrito[carrito[i].id].addEventListener("click",() => {
            compras.innerHTML= "";
            carrito.splice(i,1)
            mostrarCarrito()
            storeSession()
            })
    }
    
    

   
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
        aux.push(elemento); 
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
async function recoverStorage(){
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
        let status = [elemento.name,elemento.price,elemento.qty,elemento.id];
       aux.push(status);
    })
    let storage = JSON.stringify(aux);
   sessionStorage.setItem('carrito',storage);
}


// FUNCION PARA OBTENER EL SESSION STORAGE 
function recoverSessionStorage(){
    if (sessionStorage.getItem('carrito')){
    let recover = sessionStorage.getItem('carrito');
    recover=JSON.parse(recover);
    if (recover.length != 0){
        recover.forEach(element => {
            agregarACarrito(element[0],parseInt(element[1]),parseInt(element[2]),parseInt(element[3]));
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

//FUNCIONES PARA DESPLEGAR ALERTS
function alertaCierreAuto(texto,tiempo){
Swal.fire({
  title: `${texto}`,
  timer: tiempo,
  timerProgressBar: true,
  customClass: {title: 'popUp-subTitle'}
})
}
function alertaCierreAutoBtn(texto,tiempo){
    Swal.fire({
        icon: 'success',
        title: `${texto}`,
        timer: tiempo,
        timerProgressBar: true,
        customClass: {title: 'popUp-subTitle'}
      })

}


