const verduras = document.getElementById("verVerduras");
const frutas = document.getElementById("verFrutas");
const finalizarCompra = document.getElementById("finalizarCompra");
const voucher = document.getElementById("voucher");

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
    limpiarCarrito();}
});

voucher.addEventListener("click",() => {
 desplegarINPUT();// falta hacer 
 verificarValides();// falta hacer
 aplicarDescuento();//falta hacer
});


/*JSON Y STORAGE 

GUARDAR EN LOCAL STORAGE STOCK DE PRODUCTOS !!! Y CANTIDAD DE COMPRAS EFECTUADAS POR EL USUARIO!
AL FINALIZAR COMPRA DESPLEGAR INPUT PARA INGRESAR CEDULA !, CUANDO UNA CEDULA YA COMPRO AUMENTAR CHANCES PARA OBTENER VOUCHER   
EN SESSION STORAGE EL CONTENIDO DEL CARRITO DE COMPRAS DE LA SESSION !! 

!!! --- IMPORTANTE
!! --- MAS O MENOS
! --- NO TAN IMPORTANTE AHORA


*/

  

