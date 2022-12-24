const verduras = document.getElementById("verVerduras");
const frutas = document.getElementById("verFrutas");

verduras.addEventListener("click",() => {
    verProductos = 'VERDURAS';
    clearMostrador();
    mostrarProductos(verProductos);
  });

frutas.addEventListener("click",() => {
    verProductos = 'FRUTAS';
    clearMostrador();
    mostrarProductos(verProductos);


  });

