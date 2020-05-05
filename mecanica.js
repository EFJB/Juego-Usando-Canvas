var canvas = document.getElementById("dibujito");
var ctx = canvas.getContext("2d");
var altura = ctx.canvas.height - 64;
var ancho = ctx.canvas.width - 64;

var fondo = {
  imagen: new Image(),
  URL: 'img/pasto-completo.png',
  cargaOK: false
}

var codigoKey = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}


var heroe = {
  x: 0,
  y: 0,
  lado: {
    derecha: new Image(),
    izquierda: new Image(),
    atras: new Image(),
    frente: new Image()
  },
  velocidad: 10,
  frenteOK: false,
  derechaOK: false,
  izquierdaOK: false,
  atrasOK: false
}


var villano = {
  x: 345,
  y: 300,
  lado: {
    frente: new Image()
  },
  velocidad: 10,
  frenteOK: false
}



function crearImagen(imagen, url){
  //imagen = new Image();
  imagen.src = url;
  imagen.onload = cargado;
}



// FONDO BASE
crearImagen(fondo.imagen, fondo.URL);

// HEROE LADO DERECHO
crearImagen(heroe.lado.derecha, 'img/azul-der.png');

// HEROE LADO IZQUIERDO
crearImagen(heroe.lado.izquierda, 'img/azul-izq.png');

// HEROE LADO DE ATRAS
crearImagen(heroe.lado.atras, 'img/azul-arr.png');

// HEROE LADO DE FRENTE
crearImagen(heroe.lado.frente, 'img/azul-aba.png');

// VILLANO LADO DE FRENTE
crearImagen(villano.lado.frente, 'img/rojo-aba.png');
// noPasar[0][0]


//document.addEventListener('keydown', movimiento);
class Fanor {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.v = 10;
  }

  mov(tecla){
    this.codigo = tecla.keyCode;
    if(this.codigo == codigoKey.RIGHT){
      this.x += this.v;
    }
    if(this.codigo == codigoKey.LEFT){
      this.x -= this.v;
    }
    if(this.codigo == codigoKey.UP){
      this.y -= this.v;
    }
    if(this.codigo == codigoKey.DOWN){
      this.y += this.v;
    }
  // var codigo = tecla.keyCode;
  // var coordenadasP= [[heroe.x, heroe.y],       [heroe.x + 64, heroe.y],
  //                   [heroe.x,  heroe.y + 64],  [heroe.x + 64, heroe.y + 64]];
  
  // var coordenadasO =  [[224,19],[351,19],
  //                     [224,146],[351,146]];
  // // console.log(coordenadasP);
  

  // if(codigo == codigoKey.RIGHT & heroe.x < ancho ){
  //   if(coordenadasP[1][0] <= coordenadasO[0][0] || coordenadasP[1][1] >= coordenadasO[2][1] - 51 || coordenadasP[0][0] >= coordenadasO[1][0] - 1){
  //     if(coordenadasP[3][1] <= 174 && coordenadasP[3][0] <= 174 || coordenadasP[3][1] <= 64 || coordenadasP[2][1] >= 174){
  //       this.x += this.v;
  //     }
  //   }
  // }
  //   // console.log("Coordenada en x:"  + heroe.x);
  //     // console.log("Coordenadas: "  + coordenadasP[2][1]);

  
  // if(codigo == codigoKey.LEFT & heroe.x > 0){
  //   if(coordenadasP[1][0] <= coordenadasO[1][0] || coordenadasP[1][1] >= coordenadasO[2][1] - 51 || coordenadasP[1][0] <= coordenadasO[0][0] || coordenadasP[0][0] >= coordenadasO[1][0]){
  //     this.x -= this.v;
  //   }
  //   // console.log("Coordenada en -x:"  + heroe.x);
  //     // console.log("Coordenadas: "  + coordenadasP[3][0]);

  // }
  // if(codigo == codigoKey.UP & heroe.y > 0){
  //   if(coordenadasP[1][1] >= coordenadasO[2][1] - 32 || coordenadasP[1][0] <= 174 || coordenadasP[0][0] >= coordenadasO[3][0] - 1 || coordenadasP[2][0] <= 120){
  //     this.y -= this.v;
  //   }
  //   }
  //   // console.log("Coordenada en -y:"  + heroe.y);
  //   //  console.log("Coordenadas: "  + coordenadasP[0][0]);

  
  // if(codigo == codigoKey.DOWN & heroe.y < altura){
  //   if((coordenadasP[2][1] <= 64 || coordenadasP[3][0] <= 184 ) || coordenadasP[2][0] >= 350)
  //   this.y += this.v;
  //   // console.log("Coordenada en +y:"  + heroe.y);
  //   // console.log("Coordenadas: "  + coordenadasP[2][0]);

  // }
  // dibujar(codigo);
  // ctx.drawImage(fondo.imagen, 0, 0);
  }
  dibujar(){
    var posicionActual = heroe.lado.derecha; // IMAGEN POR DEFECTO
    if(fondo.cargaOK){
      ctx.drawImage(fondo.imagen, 0, 0);
    }
    if(heroe.derechaOK && heroe.izquierdaOK && heroe.atrasOK && heroe.frenteOK){
      if(this.codigo == codigoKey.RIGHT){
        posicionActual = heroe.lado.derecha;
      }else if(this.codigo == codigoKey.UP){
        posicionActual = heroe.lado.atras;
      }
      else if(this.codigo == codigoKey.DOWN){
        posicionActual = heroe.lado.frente;
      }
      else if(this.codigo == codigoKey.LEFT){
        posicionActual = heroe.lado.izquierda;
      }
      ctx.drawImage(posicionActual, this.x, this.y);
    }
  }

  detener(){
    this.afuera = false;
    if(this.x <= ancho || this.y <= altura){
      console.log('detener ahora!!!');
      this.afuera = true;
      this.v = 10;
    }else {
      console.log('estoy adentro');
      this.v = 0;
      
    }
    // if (this.afuera) {
    //   this.v = 0;
    // }else {
    //   this.v = 10;
    // }
    console.log(this.x);
    console.log(this.y);
    
  }

}

var fanor = new Fanor();

document.addEventListener('keydown', (e) => {
  fanor.mov(e);
  fanor.dibujar();
  fanor.detener();
});

function cargado(){
  fondo.cargaOK = true;
  heroe.derechaOK = true;
  heroe.izquierdaOK = true;
  heroe.atrasOK = true;
  heroe.frenteOK = true;
  villano.frenteOK = true;
  fanor.dibujar();
}

// function dibujar(direccion){
  // if(fondo.cargaOK){
  //   ctx.drawImage(fondo.imagen, 0, 0);
  // }
  // var posicionActual = heroe.lado.derecha; // IMAGEN POR DEFECTO
  // if(heroe.derechaOK && heroe.izquierdaOK && heroe.atrasOK && heroe.frenteOK){
  //   if(direccion == codigoKey.RIGHT){
  //     posicionActual = heroe.lado.derecha;
  //   }
  //   else if(direccion == codigoKey.UP){
  //     posicionActual = heroe.lado.atras;
  //   }
  //   else if(direccion == codigoKey.DOWN){
  //     posicionActual = heroe.lado.frente;
  //   }
  //   else if(direccion == codigoKey.LEFT){
  //     posicionActual = heroe.lado.izquierda;
  //   }
  //   ctx.drawImage(posicionActual, heroe.x, heroe.y);
  // }
  // if(villano.frenteOK){
  //   ctx.drawImage(villano.lado.frente, villano.x, villano.y);
  // }
// }

// function movimiento(tecla) {
//   var codigo = tecla.keyCode;
//   var coordenadasP= [[heroe.x, heroe.y],       [heroe.x + 64, heroe.y],
//                     [heroe.x,  heroe.y + 64],  [heroe.x + 64, heroe.y + 64]];
  
//   var coordenadasO =  [[224,19],[351,19],
//                       [224,146],[351,146]];
//   // console.log(coordenadasP);
  

//   if(codigo == codigoKey.RIGHT & heroe.x < ancho ){
//     if(coordenadasP[1][0] <= coordenadasO[0][0] || coordenadasP[1][1] >= coordenadasO[2][1] - 51 || coordenadasP[0][0] >= coordenadasO[1][0] - 1){
//       if(coordenadasP[3][1] <= 174 && coordenadasP[3][0] <= 174 || coordenadasP[3][1] <= 64 || coordenadasP[2][1] >= 174){
//         heroe.x += heroe.velocidad;
//       }
//     }
//   }
//     // console.log("Coordenada en x:"  + heroe.x);
//       // console.log("Coordenadas: "  + coordenadasP[2][1]);

  
//   if(codigo == codigoKey.LEFT & heroe.x > 0){
//     if(coordenadasP[1][0] <= coordenadasO[1][0] || coordenadasP[1][1] >= coordenadasO[2][1] - 51 || coordenadasP[1][0] <= coordenadasO[0][0] || coordenadasP[0][0] >= coordenadasO[1][0]){
//       heroe.x -= heroe.velocidad;
//     }
//     // console.log("Coordenada en -x:"  + heroe.x);
//       // console.log("Coordenadas: "  + coordenadasP[3][0]);

//   }
//   if(codigo == codigoKey.UP & heroe.y > 0){
//     if(coordenadasP[1][1] >= coordenadasO[2][1] - 32 || coordenadasP[1][0] <= 174 || coordenadasP[0][0] >= coordenadasO[3][0] - 1 || coordenadasP[2][0] <= 120){
//       heroe.y -= heroe.velocidad;
//     }
//     }
//     // console.log("Coordenada en -y:"  + heroe.y);
//     //  console.log("Coordenadas: "  + coordenadasP[0][0]);

  
//   if(codigo == codigoKey.DOWN & heroe.y < altura){
//     if((coordenadasP[2][1] <= 64 || coordenadasP[3][0] <= 184 ) || coordenadasP[2][0] >= 350)
//     heroe.y += heroe.velocidad;
//     // console.log("Coordenada en +y:"  + heroe.y);
//     // console.log("Coordenadas: "  + coordenadasP[2][0]);

//   }
//   dibujar(codigo);
  
// }


