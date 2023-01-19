const verduras = document.getElementById("verVerduras");//BOTON PARA CAMBIAR Y VER VERDURAS
const frutas = document.getElementById("verFrutas");//BOTON PARA CAMBIAR Y VER FRUTAS 
const finalizarCompra = document.getElementById("finalizarCompra");//BOTON PARA FINALIZAR COMPRA
const reset = document.getElementById("resetStock");//BOTON DE RESETEO

// BOTON SELECCIONADOR DE VERDURAS
verduras.addEventListener("click",() => {
    verProductos = 'VERDURA';
    mostrarProductos(verProductos);
    esconderProductos('FRUTA');
  });
// BOTON SELECCIONADOR DE FRUTAS
frutas.addEventListener("click",() => {
  verProductos = 'FRUTA';
  mostrarProductos(verProductos);
  esconderProductos('VERDURA');
});

// BOTON PARA FINALIZAR COMPRA 
finalizarCompra.addEventListener("click",() => {
  if (carrito.length>0){
    actualiazrStock();
    store();
    limpiarCarrito();
    storeSession();
    recoverStorage();
    alertaCierreAutoBtn("compra exitosa!",3000)}

    else{alertaCierreAuto("Tu carrito esta vacío!",1500);}
});

//BOTON DE AYUDA PARA LA SIMULACION, RESTABLECE LOS VALORES DE STOCK Y LIMPIA LOS STORAGES
reset.addEventListener("click",() => {  
    limpiarCarrito();
    resetStock();
    resetStockCounter();
    mostrarProductos('FRUTA');
    esconderProductos('VERDURA');
    sessionStorage.clear();
    localStorage.clear();}  
);





  

