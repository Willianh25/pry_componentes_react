// Este componente muestra un input de tipo contraseña.
// Reutiliza el componente Input y le pasa type="password".

import Input from "./Input";

function InputPassword(props) {
  return (
    <Input
      type="password"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputPassword;
