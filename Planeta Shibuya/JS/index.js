// index.js
// Lista de imágenes disponibles
var imagenes = ["IMG/place-holder.jpg", "IMG/Aki.jpg", "IMG/Angel.png", "IMG/Nayuta.png"];
var indiceImagen = 0;

// Función para cambiar la imagen
function cambiarImagen() {
  // Incrementa el índice de la imagen (circular)
  indiceImagen = (indiceImagen + 1) % imagenes.length;
  // Actualiza la fuente de la imagen con la siguiente imagen
  document.getElementById('imagenActual').src = imagenes[indiceImagen];
}

// Asigna la función al evento click directamente
document.getElementById('imagenActual').addEventListener('click', cambiarImagen);
