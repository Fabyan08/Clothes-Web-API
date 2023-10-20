import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Registrasi" type="register">
      <FormRegister />
    
    </AuthLayout>
  );
};

export default RegisterPage;
