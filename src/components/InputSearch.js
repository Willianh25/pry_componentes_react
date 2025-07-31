// Este componente muestra un input de tipo búsqueda (<input type="search">).
// Reutiliza el componente Input y le pasa type="search".

import Input from "./Input";

function InputSearch(props) {
  return (
    <Input
      type="search"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputSearch;
