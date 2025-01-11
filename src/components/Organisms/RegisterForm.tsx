import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { useState } from "react";
import { useRegisterMutation } from "../../services/api/user.service";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [register, { isLoading }] = useRegisterMutation();
  const [registerState, setRegisterState] = useState<Record<string, any>>({
    username: "",
    email: "",
    password: "",
    avatar: File,
  });

  const handleRegisterSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();
    data.append("username", registerState.username);
    data.append("email", registerState.email);
    data.append("password", registerState.password);
    data.append("avatar", registerState.avatar);
    await register(data).catch(e => {
      toast.warn(e.data?.message)
      return
    })
  };

  return (
    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4 ">
      <Input
        label="Username"
        type="text"
        placeholder="Enter your username"
        required
        onChange={(value) => {
          setRegisterState({
            ...registerState,
            username: value,
          });
        }}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        onChange={(value) =>
          setRegisterState({
            ...registerState,
            email: value,
          })
        }
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        onChange={(value) => {
          setRegisterState({
            ...registerState,
            password: value,
          });
        }}
      />

      <Input
        label="Avatar"
        type="file"
        required
        onChange={(_, data) => {
          console.log(data.target.files[0]);
          setRegisterState({
            ...registerState,
            avatar: data.target.files[0],
          });
        }}
      />

      <Button type="submit" loading={isLoading}>Register</Button>
    </form>
  );
}
