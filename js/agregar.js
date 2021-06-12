const firebase = require("firebase");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey:  "AIzaSyAiLo3IJ4nJq9xFXuLqbyTKv2wf4TxOZNI",
    authDomain: "tienda-online-8efef.firebaseapp.com",
    projectId: "tienda-online-8efef",
});
  
  var db = firebase.firestore();
// Required for side-effects
require("firebase/firestore");

function agregarBalatas(){
    var db = firebase.firestore();
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

    //Agregamos a la coleccion de balatas
    db.collection("balatas").add({
        Marca: marca,
        Modelo: modelo,
        Precio: 0,
        Cantidad:precio
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("exito",docRef);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("fallo",error);
    });
}

// Add a second document with a generated ID.
