// Se crea un componente funcional llamado Parrafo
function Parrafo(props) {
  return (
    <p className="text-secondary"> {/* Se utiliza la clase text-secondary para aplicar un estilo secundario */}
      {props.texto}
    </p>
  );
}

// Se exporta el componente Parrafo para que pueda ser utilizado en otros archivos
export default Parrafo;