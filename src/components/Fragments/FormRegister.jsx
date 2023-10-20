/* eslint-disable react/prop-types */

import InputForm from "../Elements/Inputs/Index";
import Button from "../Elements/Buttons";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
       
        name="fullname"
        type="text"
        placeholder="fullname"
      ></InputForm>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="email"
      ></InputForm>

      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="***"
      ></InputForm>
      <Button children="Register" variant="bg-blue-500"></Button>
    </form>
  );
};

export default FormRegister;
