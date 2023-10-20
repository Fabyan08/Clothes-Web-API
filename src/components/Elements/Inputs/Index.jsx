
import Label from "./Labels";
import Input from "./Input";
import { forwardRef } from "react";


// Pakai forwardRef  yang akan ditangkap di form
const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="m-10">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} ref={ref} placeholder={placeholder} />
    </div>
  );
});

export default InputForm;
