// Este componente muestra un input genérico.
// Recibe las siguientes props:
// - type: tipo de input (text, password, email, etc.)
// - placeholder: texto de ayuda dentro del campo
// - value: el valor actual del input
// - onChange: función que se llama cuando el contenido cambia

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="form-control mb-3" // Clase de Bootstrap para buen diseño
    />
  );
}

export default Input;
