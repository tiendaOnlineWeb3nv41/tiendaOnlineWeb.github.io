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
  var carrito=document.getElementById('carrito');
  var btnFinalizar=document.getElementById('btn_termina-compra');
  var datosCarrito= db.collection("carritoCompras").doc("LeIbO7uwgl4VeBlwzJuB");
  //SALIDAS PARA CARRITO
  
  //--------------------------------------------------------------------
  
  var pBalatas="Balatas",pFaros,pFacias,pKits,pEmbrages,pNeumaticos;
  var cBalatas=0,cFaros=0,cFacias=0,cKits=0,cEmbrages=0,cNeumaticos=0;
  var total=0,cero=0;
  
  
  ///EN ESPECIFICO, CON ESTO YA PODEMOS HACER OPERACIONES CON EL CARRITO DE COMPRAS
  datosCarrito.get().then((doc) => {
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
 // console.log(cBalatas);
  


  //--------------------------------------------------------------------------
  
  carrito.addEventListener('mouseover', e=>{
      e.preventDefault();
    var salidapBalatas=document.getElementById('salidapBalatas');
    var salidapNeumaticos=document.getElementById('salidapNeumaticos');
    var salidapKits=document.getElementById('salidapKits');
    var salidapFaros=document.getElementById('salidapFaros');
    var salidapFacias=document.getElementById('salidapFacias');
    var salidapEmbragues=document.getElementById('salidapEmbragues');
    var salidacBalatas=document.getElementById('salidacBalatas');
    var salidacNeumaticos=document.getElementById('salidacNeumaticos');
    var salidacFaros=document.getElementById('salidacFaros');
    var salidacFacias=document.getElementById('salidacFacias');
    var salidacEmbragues=document.getElementById('salidacEmbragues');
    var salidacKits=document.getElementById('salidacKits');
    var salidaTotal=document.getElementById('salidaTotal');
     //---------------------SALIDA TICKET FINAL----------------------------------
      salidapBalatas.innerHTML=pBalatas;
      salidapNeumaticos.innerHTML=pNeumaticos;
      salidapKits.innerHTML=pKits;
      salidapFaros.innerHTML=pFaros;
      salidapFacias.innerHTML=pFacias;
      salidapEmbragues.innerHTML=pEmbrages;
      salidacBalatas.innerHTML=cBalatas;
      salidacNeumaticos.innerHTML=cNeumaticos;
      salidacFaros.innerHTML=cFaros;
      salidacFacias.innerHTML=cFacias;
      salidacEmbragues.innerHTML=cEmbrages;
      salidacKits.innerHTML=cKits;
      salidaTotal.innerHTML=total+".00 $";
//--------------------------------------------------------------------------    
  });


btnFinalizar.addEventListener('click',async e=>{
  await db.collection("carritoCompras").doc("LeIbO7uwgl4VeBlwzJuB").set({
            total:cero,
            cantidadK:cero,
            cantidadN:cero,
            cantidadB:cero,
            cantidadFaros:cero,
            cantidadFacias:cero,
            cantidadEm:cero,
            productoK:pKits,
            productoN:pNeumaticos,
            productoB:pBalatas,
            productoFaros:pFaros,
            productoFacias:pFacias,
            productoE:pEmbrages
  });
  alert("Tu compra ha finalizado")
  window.location.reload();
})