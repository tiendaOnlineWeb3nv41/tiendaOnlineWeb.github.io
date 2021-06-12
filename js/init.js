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
const db=firebase.firestore();
const agrega=document.getElementById('agrega');
async function agregar(){
  //e.preventDefault();
  const _modelo=document.getElementById('modelo').value;
  const _cantidad=Number(document.getElementById('cantidad').value);
  const _marca=document.getElementById('marca').value;
  const _producto=document.getElementById('nombre').value;
  
  const response= await db.collection('balatas').doc().set({
    modelo:_modelo,
    cantidad:_cantidad,
    marca: _marca,
    producto: _producto
  });
    console.log(response)
    console.log(modelo,cantidad);
};
