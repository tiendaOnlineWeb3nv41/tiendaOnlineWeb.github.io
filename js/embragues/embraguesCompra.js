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
  var datosC = db.collection("Embragues").doc('e59isUxl9zHJW9RFuoVc');
  var datosV = db.collection("Embragues").doc("befAw8xFPMxkOsbsi5SP");
  var datosF = db.collection("Embragues").doc("du4tgkif2HVE4No1Dpbu");
  var datosK = db.collection("Embragues").doc("H2gP82ZwYHhVO9OiPVhc");
  var datosN = db.collection("Embragues").doc("O2JmQ2KAmku9HScxXLJ6");
  var datosT = db.collection("Embragues").doc("Pd85fOBbz9B6VOye8bD8");
  var datosCarrito= db.collection("carritoCompras").doc("LeIbO7uwgl4VeBlwzJuB");

  var canC=0,canVw=0,canF=0,canK=0,canN=0,canT=0,canCarrito=0;
  var precioVw=0,precioF=0,precioC=0,precioK=0,precioN=0,precioT=0;
  var pBalatas,pFaros,pFacias,pKits,pEmbrages,pNeumaticos;
  var cBalatas=0,cFaros=0,cFacias=0,cKits=0,cEmbrages=0,cNeumaticos;
  var total=0;
  
  
  ///EN ESPECIFICO, CON ESTO YA PODEMOS HACER OPERACIONES CON EL CARRITO DE COMPRAS
  datosCarrito.get().then(async(doc) => {
    if (doc.exists) {
      cBalatas= Number(doc.data().cantidadB);
      cFaros= Number(doc.data().cantidadFaros);
      cFacias= Number(doc.data().cantidadFacias);
      cKits= Number(doc.data().cantidadK);
      cEmbrages= Number(doc.data().cantidadEm);
      cNeumaticos= Number(doc.data().cantidadN);   
      pBalatas=doc.data().productoB;
      pFaros=doc.data().productoFaros;
      pFacias=doc.data().productoFacias;
      pKits=doc.data().productoK;
      pEmbrages=doc.data().productoE;
      pNeumaticos=doc.data().productoN;
      total=Number(doc.data().total);
      
    
    } else {
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
  //--------------------------------------------------------------------------

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
        identificacion="e59isUxl9zHJW9RFuoVc";
        salidaPrecio.innerHTML=precioC;
        break;
      case "VolksWagen":
        identificacion="befAw8xFPMxkOsbsi5SP";
        salidaPrecio.innerHTML=precioVw;
        break;
      case "Fiat":
        identificacion="du4tgkif2HVE4No1Dpbu";
        salidaPrecio.innerHTML=precioF;
        break;
      case "Nissan":
        identificacion="O2JmQ2KAmku9HScxXLJ6";
        salidaPrecio.innerHTML=precioN;
        break;
      case "Toyota":
        identificacion="Pd85fOBbz9B6VOye8bD8";
        salidaPrecio.innerHTML=precioT;
        break;
      case "Kia":
        identificacion="H2gP82ZwYHhVO9OiPVhc";
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
          identificacion="e59isUxl9zHJW9RFuoVc";
          _cantidad=canC-_cantidad;
          aux=canC;
          
          break;
        case "VolksWagen":
          identificacion="befAw8xFPMxkOsbsi5SP";
          _cantidad=canVw-_cantidad;
          aux=canVw;
          break;
        case "Fiat":
          identificacion="du4tgkif2HVE4No1Dpbu";
          _cantidad=canF-_cantidad;
          aux=canF;
          break;
        case "Nissan":
          identificacion="O2JmQ2KAmku9HScxXLJ6";
          _cantidad=canN-_cantidad;
          aux=canN;
          break;
        case "Toyota":
          identificacion="Pd85fOBbz9B6VOye8bD8";
          _cantidad=canT-_cantidad;
          aux=canT;
          break;
        case "Kia":
          identificacion="H2gP82ZwYHhVO9OiPVhc";
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
       if(aux2!=0){
        alert("Se cargo con exito su compra");
          await db.collection('Embragues').doc(identificacion).set({
            precio:_precio,
            cantidad:_cantidad,
            marca: _marca,
            producto: _producto
          });
            //ajustamos la cantidad de nuestro carrito}
            cEmbrages+=aux2,
            total+=(_precio*aux2);
          //----------------------------------------
        await db.collection("carritoCompras").doc("LeIbO7uwgl4VeBlwzJuB").set({
          total:total,
          cantidadK:cKits,
          cantidadN:cNeumaticos,
          cantidadB:cBalatas,
          cantidadFaros:cFaros,
          cantidadFacias:cFacias,
          cantidadEm:cEmbrages,
          productoK:pKits,
          productoN:pNeumaticos,
          productoB:pBalatas,
          productoFaros:pFaros,
          productoFacias:pFacias,
          productoE:pEmbrages
        });
        
          salidaProducto.innerHTML=_producto;
          salidaMarca.innerHTML=_marca;
          salidaCantidad.innerHTML=aux2;
          salidaModelo.innerHTML=_modelo;
          salidaTotal.innerHTML=(_precio*aux2)+".00 $";
      }else{alert("coloque una cantidad")} 
    }
};
