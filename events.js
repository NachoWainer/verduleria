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
  actualiazrStock();//falta hacer 
  guardarStockJSON();//falta hacer 
  limpiarCarrito();//falta hacer
});

  

