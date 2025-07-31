// Este componente muestra un input de tipo email.
// Reutiliza el componente Input y le pasa type="email".

import Input from "./Input";

function InputEmail(props) {
  return (
    <Input
      type="email"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputEmail;
