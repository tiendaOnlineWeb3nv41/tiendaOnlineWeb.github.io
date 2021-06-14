var firebaseConfig = {
  apiKey: "AIzaSyAiLo3IJ4nJq9xFXuLqbyTKv2wf4TxOZNI",
  authDomain: "tienda-online-8efef.firebaseapp.com",
  projectId: "tienda-online-8efef",
  storageBucket: "tienda-online-8efef.appspot.com",
  messagingSenderId: "803951788712",
  appId: "1:803951788712:web:81f17a77691228f109789d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  
//********************************************** */
//PARA AGREGAR UN DOCUMENTO 
const db=firebase.firestore();


//VARIABLES
  var datosC = db.collection("Faros").doc('vCAZxaCPBbOMZLjlBwa0');
  var datosV = db.collection("Faros").doc("EQcV7DCoBLLpiIedVR9e");
  var datosF = db.collection("Faros").doc("WeOtIGcj69ZG7PP6IjvZ");
  var datosK = db.collection("Faros").doc("YYLXWPK6nGzaF0PN4Ka6");
  var datosN = db.collection("Faros").doc("7xMeGvD3uIIh3XBNx3hg");
  var datosT = db.collection("Faros").doc("zMi4oEELUyGKLp6lnY7y");
var canC=0,canVw=0,canF=0,canK=0,canN=0,canT=0;
var precioVw=0,precioF=0,precioC=0,precioK=0,precioN=0,precioT=0;


datosV.get().then(async(doc) => {
  if (doc.exists) {
    canVw= Number(doc.data().cantidad);
    precioVw=doc.data().precio;  
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
//---------------------------------------------------
datosF.get().then(async(doc) => {
  if (doc.exists) {
    canF= Number(doc.data().cantidad);    
    precioF=doc.data().precio;
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
//-----------------------------------------------------
datosC.get().then(async(doc) => {
  if (doc.exists) {
    canC= Number(doc.data().cantidad);    
    precioC=doc.data().precio;
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
//-----------------------------------------------------
datosK.get().then(async(doc) => {
  if (doc.exists) {
    canK= Number(doc.data().cantidad);  
    precioK=doc.data().precio;
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
//--------------------------------------------------------
datosT.get().then(async(doc) => {
  if (doc.exists) {
    canT= Number(doc.data().cantidad);    
    precioT=doc.data().precio;
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
//----------------------------------------------------------
datosN.get().then(async(doc) => {
  if (doc.exists) {
    canN= Number(doc.data().cantidad);    
    precioN=doc.data().precio;
  } else {
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});

//----------------------------------------------------------
//FUNCION PARA ACTUALIZAR EL PRECIO
var _marca = document.getElementById('marca');

_marca.addEventListener('change',cambio=>{
  var newMarca = document.getElementById('marca').value;
  var salidaPrecio = document.getElementById('salidaPrecio');
    switch(newMarca){
      case "Chevrolet":
        identificacion="vCAZxaCPBbOMZLjlBwa0";
        salidaPrecio.innerHTML=precioC;
        break;
      case "VolksWagen":
        identificacion="EQcV7DCoBLLpiIedVR9e";
        salidaPrecio.innerHTML=precioVw;
        break;
      case "Fiat":
        identificacion="WeOtIGcj69ZG7PP6IjvZ";
        salidaPrecio.innerHTML=precioF;
        break;
      case "Nissan":
        identificacion="7xMeGvD3uIIh3XBNx3hg";
        salidaPrecio.innerHTML=precioN;
        break;
      case "Toyota":
        identificacion="zMi4oEELUyGKLp6lnY7y";
        salidaPrecio.innerHTML=precioT;
        break;
      case "Kia":
        identificacion="YYLXWPK6nGzaF0PN4Ka6";
        salidaPrecio.innerHTML=precioK;
        break;
      default:
        alert("Seleccione una marca");
        break;
    }
})




/*************************************************************** */
//PARA ELIMINAR
async function comprar(){
    var _cantidad = Number(document.getElementById('cantidad').value);
    var _marca = document.getElementById('marca').value;
    var _producto = document.getElementById('nombre').value;
    var _modelo = document.getElementById('modelo').value;
    var _precio = document.getElementById('salidaPrecio').value
    //SALIDAS
    var salidaMarca = document.getElementById('salidaMarca');
    var salidaCantidad = document.getElementById('salidaCantidad');
    var salidaModelo = document.getElementById('salidaModelo');
    var salidaProducto = document.getElementById('salidaProducto');
    var salidaTotal = document.getElementById('salidaTotal');
    var identificacion='', aux=0,aux2=_cantidad;
      switch(_marca){
        case "Chevrolet":
          identificacion="vCAZxaCPBbOMZLjlBwa0";
          _cantidad=canC-_cantidad;
          aux=canC;
          break;
        case "VolksWagen":
          identificacion="EQcV7DCoBLLpiIedVR9e";
          _cantidad=canVw-_cantidad;
          aux=canVw;
          break;
        case "Fiat":
          identificacion="WeOtIGcj69ZG7PP6IjvZ";
          _cantidad=canF-_cantidad;
          aux=canF;
          break;
        case "Nissan":
          identificacion="7xMeGvD3uIIh3XBNx3hg";
          _cantidad=canN-_cantidad;
          aux=canT;
          break;
        case "Toyota":
          identificacion="zMi4oEELUyGKLp6lnY7y";
          _cantidad=canT-_cantidad;
          aux=canT;
          break;
        case "Kia":
          identificacion="YYLXWPK6nGzaF0PN4Ka6";
          _cantidad=canK-_cantidad;
          aux=canK;
          break;
        default:
          alert("Seleccione una marca");
          break;
      }
      if(_cantidad<=0){
        alert("no tenemos suficientes existencias");
        alert("la cantidad en stock es de: "+aux);
        _cantidad=aux;
      }else{
        alert("Se cargo con exito tu compra");
        _cantidad=aux2;
      }
        await db.collection('Faros').doc(identificacion).set({
          precio:_precio,
          cantidad:_cantidad,
          marca: _marca,
          producto: _producto
        });
    

    salidaProducto.innerHTML=_producto;
    salidaMarca.innerHTML=_marca;
    salidaCantidad.innerHTML=aux2;
    salidaModelo.innerHTML=_modelo;
    salidaTotal.innerHTML=(_precio*aux2)+".00 $";
  
};
