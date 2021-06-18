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
  
  
  
  //Para la seguridad
  
  const db=firebase.firestore();
  const agrega=document.getElementById('agrega');
  
  //VARIABLES
  var datosC = db.collection("Afinacion_Kits").doc('w0d3PRLllp96LvXqEKsK');
  var datosV = db.collection("Afinacion_Kits").doc("YQd6aD6cnGue2abQ3sxu");
  var datosF = db.collection("Afinacion_Kits").doc("Odqc19sAtOioKjvy3Xc7");
  var datosK = db.collection("Afinacion_Kits").doc("RGR09AAfj1eo54Lk5ssz");
  var datosN = db.collection("Afinacion_Kits").doc("n9p1dE1S1UWCwRiMOYf5");
  var datosT = db.collection("Afinacion_Kits").doc("1zO6WvUcPoYmyGVWXUvu");
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
      console.log(canT);
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
          identificacion="w0d3PRLllp96LvXqEKsK";
          _cantidad+=canC;
          break;
        case "VolksWagen":
          identificacion="YQd6aD6cnGue2abQ3sxu";
          _cantidad+=canVw;
          break;
        case "Fiat":
          identificacion="Odqc19sAtOioKjvy3Xc7";
          _cantidad+=canF;
          break;
        case "Nissan":
          identificacion="n9p1dE1S1UWCwRiMOYf5";
          _cantidad+=canN;
          break;
        case "Toyota":
          identificacion="1zO6WvUcPoYmyGVWXUvu";
          _cantidad+=canT;
          break;
        case "Kia":
          identificacion="RGR09AAfj1eo54Lk5ssz";
          _cantidad+=canK;
          break;
        default:
          alert("Seleccione una marca");
          break; 
      }
      console.log(typeof _cantidad);
     await db.collection('Afinacion_Kits').doc(identificacion).set({
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
              identificacion="w0d3PRLllp96LvXqEKsK";
              _cantidad=canC-_cantidad;//Menos lo que hay en el sistema, menos lo que quiere el usuario
              _precio=precioC;
              aux=canC;
              break;
          case "VolksWagen":
              identificacion="YQd6aD6cnGue2abQ3sxu";
              _cantidad=canVw-_cantidad;
              _precio=precioVw;
              aux=canVw;
              break;
          case "Fiat":
              identificacion="Odqc19sAtOioKjvy3Xc7";
              _cantidad=canF-_cantidad;
              _precio=precioF;
              aux=canF;
              break;
          case "Nissan":
              identificacion="n9p1dE1S1UWCwRiMOYf5";
              _cantidad=canN-_cantidad;
              _precio=precioN;
              aux=canN;
              break;
          case "Toyota":
              identificacion="1zO6WvUcPoYmyGVWXUvu";
              _cantidad=canT-_cantidad;
              _precio=precioT;
              aux=canT;
              break;
          case "Kia":
              identificacion="RGR09AAfj1eo54Lk5ssz";
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
          await db.collection('Afinacion_Kits').doc(identificacion).set({
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
  
  