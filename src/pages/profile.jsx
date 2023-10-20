import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  // Ambil data dari custom hooks
  const username = useLogin();
  return (
    <div>
      <h1>Profilku</h1>
      {username}
    </div>
  );
};

export default ProfilePage;
