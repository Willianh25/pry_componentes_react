// Este componente muestra un botón.
// Recibe dos props:
// - texto: lo que se verá escrito en el botón
// - onClick: función que se ejecuta cuando se hace clic

function Boton(props) {
  return (
    <button className="btn btn-primary mt-3" onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Boton;
