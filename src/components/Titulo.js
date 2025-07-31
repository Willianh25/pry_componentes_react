// Importamos React y la librería de PropTypes
function Titulo(props) {
    const Etiqueta = "h" + props.nivel; // Creamos una etiqueta HTML dinámica según el nivel
  return (
    <Etiqueta className="text-primary fw-bold"> {/* Usamos la etiqueta dinámica */}
      {props.texto} {/* Mostramos el texto del título */}
    </Etiqueta> 
  );
}

// Exportamos el componente para que pueda ser utilizado en otros archivos
export default Titulo;
