const verduras = document.getElementById("verVerduras");//BOTON PARA CAMBIAR Y VER VERDURAS
const frutas = document.getElementById("verFrutas");//BOTON PARA CAMBIAR Y VER FRUTAS 
const finalizarCompra = document.getElementById("finalizarCompra");//BOTON PARA FINALIZAR COMPRA
const reset = document.getElementById("resetStock");//BOTON DE RESETEO
//const voucher = document.getElementById("voucher"); BOTON PARA APLICAR DESCUENTO A COMPRA

verduras.addEventListener("click",() => {
    verProductos = 'VERDURA';
    mostrarProductos(verProductos);
    esconderProductos('FRUTA');
  });

frutas.addEventListener("click",() => {
  verProductos = 'FRUTA';
  mostrarProductos(verProductos);
  esconderProductos('VERDURA');
});

finalizarCompra.addEventListener("click",() => {
  if (carrito.length>0){
    actualiazrStock();
    store();
    limpiarCarrito();
    storeSession();
    recoverStorage()}
});

reset.addEventListener("click",() => {
    limpiarCarrito();
    resetStock();
    resetStockCounter();
    mostrarProductos('FRUTA');
    esconderProductos('VERDURA');
    sessionStorage.clear();
    localStorage.clear();}
    
);



/* BOTON PARA APLICAR CUPON DE DESCUENTO A COMPRA
voucher.addEventListener("click",() => {
 desplegarINPUT();// falta hacer 
 verificarValides();// falta hacer
 aplicarDescuento();//falta hacer
});
*/


  

