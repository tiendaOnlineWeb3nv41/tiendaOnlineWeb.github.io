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
var enviar=document.getElementById('enviar');

var loginWithGoogle=function(){

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                
                enviar.innerHTML=`<a href="inicio_.html">
                                  <button class="btn_inicia" type="button">Continuar</button>
                                  </a>`;

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
}

function registraUsuario(){
  var provider = new firebase.auth.GoogleAuthProvider();
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value

  
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    enviar.innerHTML=`<a href="inicio_.html">
    <button class="btn_inicia" type="button">Continuar</button>
    </a>`;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    alert(errorCode);
    // ..
  });
}
  
//********************************************** */
//PARA AGREGAR UN DOCUMENTO



const db=firebase.firestore();
const agrega=document.getElementById('agrega');

//VARIABLES
var datosC = db.collection("balatas").doc('FNYYWHOZWF1ZZMDaaTHF');
var datosV = db.collection("balatas").doc("6oPJRFpeOpuviXJrQaVx");
var datosF = db.collection("balatas").doc("EGpO59JZJKHQlw3SPkjl");
var datosK = db.collection("balatas").doc("FrfIHvldYn4hxynlcFay");
var datosN = db.collection("balatas").doc("S7uiCSbBfnXetInWW60J");
var datosT = db.collection("balatas").doc("D5a18T51pHvr1gbAODd4");
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
        identificacion="FNYYWHOZWF1ZZMDaaTHF";
        _cantidad+=canC;
        break;
      case "VolksWagen":
        identificacion="6oPJRFpeOpuviXJrQaVx";
        _cantidad+=canVw;
        break;
      case "Fiat":
        identificacion="EGpO59JZJKHQlw3SPkjl";
        _cantidad+=canF;
        break;
      case "Nissan":
        identificacion="S7uiCSbBfnXetInWW60J";
        _cantidad+=canN;
        break;
      case "Toyota":
        identificacion="D5a18T51pHvr1gbAODd4";
        _cantidad+=canT;
        break;
      case "Kia":
        identificacion="FrfIHvldYn4hxynlcFay";
        _cantidad+=canK;
        break;
      default:
        alert("Seleccione una marca");
        break;
      
    }
   await db.collection('balatas').doc(identificacion).set({
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
    var identificacion='',aux=_cantidad;
    switch(_marca){
      case "Chevrolet":
        identificacion="FNYYWHOZWF1ZZMDaaTHF";
        _cantidad=canC-_cantidad;//Menos lo que hay en el sistema, menos lo que quiere el usuario
        _precio=precioC;
        aux=canC;
        break;
      case "VolksWagen":
        identificacion="6oPJRFpeOpuviXJrQaVx";
        _cantidad=canVw-_cantidad;
        _precio=precioVw;
        aux=canVw;
        break;
      case "Fiat":
        identificacion="EGpO59JZJKHQlw3SPkjl";
        _cantidad=canF-_cantidad;
        _precio=precioF;
        aux=canF;
        break;
      case "Nissan":
        identificacion="S7uiCSbBfnXetInWW60J";
        _cantidad=canN-_cantidad;
        _precio=precioN;
        aux=canN;
        break;
      case "Toyota":
        identificacion="D5a18T51pHvr1gbAODd4";
        _cantidad=canT-_cantidad;
        _precio=precioT;
        aux=canT;
        break;
      case "Kia":
        identificacion="FrfIHvldYn4hxynlcFay";
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
      alert("Se elimino con exito");
    }
    await db.collection('balatas').doc(identificacion).set({
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
