// Este componente muestra un input de tipo URL (enlace web).
// Reutiliza el componente Input y le pasa type="url".

import Input from "./Input";

function InputUrl(props) {
  return (
    <Input
      type="url"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputUrl;
