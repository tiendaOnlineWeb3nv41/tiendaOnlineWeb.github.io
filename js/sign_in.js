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
                var enviar=document.getElementById('enviar');
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
  alert(`Email:<input type="email" id="inputEmail"><br>
        Password<input type="password" id="password"><br> `);

  
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
  



