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
var datosC = db.collection("Neumaticos").doc('AsbeBmj7aNCKciBkPWtK');
var datosV = db.collection("Neumaticos").doc("bt9UrTLC6XSwde0CNipi");
var datosF = db.collection("Neumaticos").doc("q7yfL4QNkne4lpUN7OV3");
var datosK = db.collection("Neumaticos").doc("AyI6TJZ6dDNIfJcWl53d");
var datosN = db.collection("Neumaticos").doc("enFwVGRH9Qsy2GQYoC05");
var datosT = db.collection("Neumaticos").doc("d6bTKRCHjCeYtWjnPT8n");
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
        identificacion="AsbeBmj7aNCKciBkPWtK";
        salidaPrecio.innerHTML=precioC;
        break;
      case "VolksWagen":
        identificacion="bt9UrTLC6XSwde0CNipi";
        salidaPrecio.innerHTML=precioVw;
        break;
      case "Fiat":
        identificacion="q7yfL4QNkne4lpUN7OV3";
        salidaPrecio.innerHTML=precioF;
        break;
      case "Nissan":
        identificacion="enFwVGRH9Qsy2GQYoC05";
        salidaPrecio.innerHTML=precioN;
        break;
      case "Toyota":
        identificacion="d6bTKRCHjCeYtWjnPT8n";
        salidaPrecio.innerHTML=precioT;
        break;
      case "Kia":
        identificacion="AyI6TJZ6dDNIfJcWl53d";
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
          identificacion="AsbeBmj7aNCKciBkPWtK";//FNYYWHOZWF1ZZMDaaTHF
          _cantidad=canC-_cantidad;
          aux=canC;
          break;
        case "VolksWagen":
          identificacion="bt9UrTLC6XSwde0CNipi";
          _cantidad=canVw-_cantidad;
          aux=canVw;
          break;
        case "Fiat":
          identificacion="q7yfL4QNkne4lpUN7OV3";
          _cantidad=canF-_cantidad;
          aux=canF;
          break;
        case "Nissan":
          identificacion="enFwVGRH9Qsy2GQYoC05";
          _cantidad=canN-_cantidad;
          aux=canN;
          break;
        case "Toyota":
          identificacion="d6bTKRCHjCeYtWjnPT8n";
          _cantidad=canT-_cantidad;
          aux=canT;
          break;
        case "Kia":
          identificacion="AyI6TJZ6dDNIfJcWl53d";
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
        alert("Se cargo con exito su compra");
      }
        await db.collection('Neumaticos').doc(identificacion).set({
          precio:_precio,
          cantidad:_cantidad,
          marca: _marca,
          producto: _producto
        });

    salidaProducto.innerHTML=_producto;
    salidaMarca.innerHTML=_marca;
    salidaCantidad.innerHTML=aux;
    salidaModelo.innerHTML=_modelo;
    salidaTotal.innerHTML=(_precio*aux)+".00 $";
  
};
db.collection('Neumaticos').doc("FNYYWHOZWF1ZZMDaaTHF").delete();