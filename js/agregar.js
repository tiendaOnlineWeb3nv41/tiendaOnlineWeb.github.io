var config = {
    apiKey: "AIzaSyAiLo3IJ4nJq9xFXuLqbyTKv2wf4TxOZNI",
    authDomain: "tienda-online-8efef.firebaseapp.com",
    projectId: "tienda-online-8efef",
    storageBucket: "tienda-online-8efef.appspot.com",
    messagingSenderId: "803951788712",
    appId: "1:803951788712:web:81f17a77691228f109789d"
  };
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);
  
  
// Required for side-effects
var firestore = firebase.firestore();
const docRef= firestore.doc("balatas/ofT5bwJOrqxVIDE1KnlI");

 function agregarBalatas(){
    
    
    var _modelo=document.getElementById('modelo').value;
    var _cantidad=Number(document.getElementById('cantidad').value);
    var _marca=document.getElementById('marca').value;
    var _producto=document.getElementById('nombre').value;
//    var precio=document.getElementById('precio').value;
    //salidas
    var salidaModelo=document.getElementById('salidaModelo'),
        salidaMarca=document.getElementById('salidaMarca'),
        salidaCantidad=document.getElementById('salidaCantidad'),
        salidaProducto=document.getElementById('salidaProducto'),
        salidaTotal=document.getElementById('salidaTotal');
    salidaMarca.innerHTML=_marca;
    salidaCantidad.innerHTML=_cantidad;
    salidaModelo.innerHTML=_modelo;
    salidaProducto.innerHTML=_producto;
  //  salidaTotal.innerHTML=precio*cantidad+" $";

    //Agregamos a la coleccion de balatas
    docRef.set({
        modelo:_modelo,
        marca: _marca,
        cantidad: _cantidad,
        producto:_producto
    }).then(function(){
        consosle.log("status saved");
    }).catch(function(error){
        console.log("Got an error:", error);
    })
}

// Add a second document with a generated ID.
