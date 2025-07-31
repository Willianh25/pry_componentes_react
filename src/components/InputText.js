// Este componente muestra un input de tipo texto.
// Reutiliza el componente Input y solo le pasa type="text".

import Input from "./Input";

function InputText(props) {
  return (
    <Input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputText;
