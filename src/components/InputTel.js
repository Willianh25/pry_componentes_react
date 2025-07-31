// Este componente muestra un input de tipo teléfono.
// Reutiliza el componente Input y le pasa type="tel".

import Input from "./Input";

function InputTel(props) {
  return (
    <Input
      type="tel"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputTel;
