var imagenes = ["IMG/place-holder.jpg", "IMG/Aki.jpg", "IMG/Angel.png", "IMG/Nayuta.png"];
var indiceImagen = 0;

function cambiarImagen(idImagen) {
  indiceImagen = (indiceImagen + 1) % imagenes.length;
  document.getElementById(idImagen).src = imagenes[indiceImagen];
}

var imagenes2 = ["IMG/percyJackson.jpg", "IMG/annabeth.jpg", "IMG/nicodiangelo.jpg", "IMG/grover.png",];
var indiceImagen2 = 0;

function cambiarImagen2() {
  indiceImagen2 = (indiceImagen2 + 1) % imagenes2.length;
  document.getElementById('imagenActual2').src = imagenes2[indiceImagen2];
}




