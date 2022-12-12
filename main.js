/*IGNACIO WAINER- CURSO JAVASCRIPT*/
/*
Verduleria
*/
/*Funcion que recibe un parametro y evalua si se puede comvertir, en caso afirmativo realiza la conversion y la devuelve*/

/*Variables*/
let aux;
let menu = '';
let info = '';
let total = 0;
let cantidad = 0;
let respuesta = '';

// programa pricipal 
function descuento(total,desc){ return (desc == 0) ? total : (total - ((total * desc)/100));}

alert('Hola, bienvenido a la verdulería');
do {
    respuesta = prompt('Que desea comprar frutas o verduras?').toUpperCase();
    /*QUE VA A COMPRAR*/
    if (respuesta=='VERDURAS'|| respuesta == 'VERDURA') aux = stock.filter(elemento => elemento.type == 'VERDURA');
    else if (respuesta == 'FRUTAS' || respuesta == 'FRUTA' ) aux = stock.filter(elemento => elemento.type == 'FRUTA');
    else alert('Por favor intentalo de nuevo');

    /*Desplego menu de compra*/
    aux.forEach(element => {menu = menu + element.name + '\n';});

    /*Elige producto a comprar*/
    respuesta = prompt('Que desea comprar?'+ '\n'+ menu);
    menu = ''; /*limpio el menu para siguiete iteracion*/
    respuesta = respuesta.toUpperCase();
    producto = aux.find(elemento => elemento.name == respuesta);
    aux=[]; /*limpio arreglo auxiliar*/
    precio = producto.price;
    /*CUANTOS VA A COMPRAR*/
    cantidad = parseInt(prompt('El precio de ' + respuesta + ' ' +'es de: $' + precio + ' ' + 'por unidad, cuantos desea comprar?'));
    
    producto.qty += cantidad;

    /*Se agrega producto al carrito*/
    if (producto==carrito.find(elemento => elemento.name == producto.name)) carrito.find(elemento => elemento.name == producto.name).qty += cantidad -1;
    else carrito.push(producto);
    aux = [];
} while (confirm('desea agregar algo mas a su compra?')); 


/*Veo el total de la compra*/
carrito.forEach(element => {
    info = info + element.name + 'x' + element.qty + '\n'
    total = total + (element.price * element.qty); 
    
});
if (confirm('desea agregar un cupon de descuento?')){
desc=parseInt(prompt('Que porcentaje de descuento desea realizar, debe ser un numero entero entre 0 y 100'));
total = descuento(total,desc);
}
info = info + 'El total de la compra es: ' + ' ' + '$' + total;
alert(info);
console.log(info);

