
function comprarBalatas(){
    var modelo=document.getElementById('modelo').value;
    var cantidad=Number(document.getElementById('cantidad').value);
    var marca=document.getElementById('marca').value;
    var producto=document.getElementById('nombre').value;
    var precio=document.getElementById('precio').value;
    //salidas
    var salidaModelo=document.getElementById('salidaModelo'),
        salidaMarca=document.getElementById('salidaMarca'),
        salidaCantidad=document.getElementById('salidaCantidad'),
        salidaProducto=document.getElementById('salidaProducto'),
        salidaTotal=document.getElementById('salidaTotal');
    salidaMarca.innerHTML=marca;
    salidaCantidad.innerHTML=cantidad;
    salidaModelo.innerHTML=modelo;
    salidaProducto.innerHTML=producto;
    salidaTotal.innerHTML=precio*cantidad+" $";

}
