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
  const agrega=document.getElementById('agrega');
  
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
  async function agregar(){
    //e.preventDefault();
    var _precio=  Number(document.getElementById('precio').value);
    var _cantidad=Number(document.getElementById('cantidad').value);
    var _marca=   document.getElementById('marca').value;
    var _producto=document.getElementById('producto').value;
    var salidaProducto=document.getElementById('salidaProducto');
    var salidaPrecioTicket=  document.getElementById('salidaPrecioTicket');
    var salidaMarca=   document.getElementById('salidaMarca');
    var salidaCantidad=document.getElementById('salidaCantidad');
    var identificacion='',aux=_cantidad;
      switch(_marca){
        case "Chevrolet":
          identificacion="AsbeBmj7aNCKciBkPWtK";
          _cantidad+=canC;
          break;
        case "VolksWagen":
          identificacion="bt9UrTLC6XSwde0CNipi";
          _cantidad+=canVw;
          break;
        case "Fiat":
          identificacion="q7yfL4QNkne4lpUN7OV3";
          _cantidad+=canF;
          break;
        case "Nissan":
          identificacion="enFwVGRH9Qsy2GQYoC05";
          _cantidad+=canN;
          break;
        case "Toyota":
          identificacion="d6bTKRCHjCeYtWjnPT8n";
          _cantidad+=canT;
          break;
        case "Kia":
          identificacion="AyI6TJZ6dDNIfJcWl53d";
          _cantidad+=canK;
          break;
        default:
          alert("Seleccione una marca");
          break; 
      }
     await db.collection('Neumaticos').doc(identificacion).set({
      precio:_precio,
      cantidad:_cantidad,
      marca: _marca,
      producto: _producto
    });
    alert('se agrego con exito en el sistema la cantidad de: '+aux);
      salidaProducto.innerHTML=_producto;
      salidaMarca.innerHTML=_marca;
      salidaPrecioTicket.innerHTML=_precio+" $";
      salidaCantidad.innerHTML=_cantidad;
    
  };
  /*************************************************************** */
  //PARA ELIMINAR
  
  async function elimina(){
      //e.preventDefault();
      var _precio=0; 
      var _cantidad=Number(document.getElementById('cantidad').value);
      var _marca=document.getElementById('marca').value;
      var _producto=document.getElementById('producto').value;
      var salidaProducto=document.getElementById('salidaProducto');
      var salidaPrecioTicket=  document.getElementById('salidaPrecioTicket');
      var salidaMarca=   document.getElementById('salidaMarca');
      var salidaCantidad=document.getElementById('salidaCantidad');
      var identificacion='',aux=0,aux2=_cantidad;
          switch(_marca){
          case "Chevrolet":
              identificacion="AsbeBmj7aNCKciBkPWtK";
              _cantidad=canC-_cantidad;//Menos lo que hay en el sistema, menos lo que quiere el usuario
              _precio=precioC;
              aux=canC;
              break;
          case "VolksWagen":
              identificacion="bt9UrTLC6XSwde0CNipi";
              _cantidad=canVw-_cantidad;
              _precio=precioVw;
              aux=canVw;
              break;
          case "Fiat":
              identificacion="q7yfL4QNkne4lpUN7OV3";
              _cantidad=canF-_cantidad;
              _precio=precioF;
              aux=canF;
              break;
          case "Nissan":
              identificacion="AyI6TJZ6dDNIfJcWl53d";
              _cantidad=canN-_cantidad;
              _precio=precioN;
              aux=canN;
              break;
          case "Toyota":
              identificacion="enFwVGRH9Qsy2GQYoC05";
              _cantidad=canT-_cantidad;
              _precio=precioT;
              aux=canT;
              break;
          case "Kia":
              identificacion="d6bTKRCHjCeYtWjnPT8n";
              _cantidad=canK-_cantidad;
              _precio=precioK;
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
            alert("Se elimino con exito la canidad de: "+aux2);
          }
          await db.collection('Neumaticos').doc(identificacion).set({
            precio:_precio,
            cantidad:_cantidad,
            marca: _marca,
            producto: _producto
          });
      
      salidaPrecioTicket.innerHTML=_precio;
      salidaProducto.innerHTML=_producto;
      salidaMarca.innerHTML=_marca;
      salidaCantidad.innerHTML=_cantidad;
    
  };
  