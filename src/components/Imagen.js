// Se crea el componente que muestra una imagen basica en React
// Renderiza una imagen. Props: src, alt, width, height

// Importamos React para poder crear el componente
function Imagen(props) {
  return (
    <img
      src={props.src} // Ruta de la imagen
      alt={props.alt} // Texto alternativo para la imagen
      width={props.width} // Ancho de la imagen
      height={props.height} // Alto de la imagen
      className="img-fluid" // Clase de Bootstrap para que la imagen sea responsiva
    />
  );
}

// Se exporta el componente para que pueda ser utilizado en otros archivos
export default Imagen;