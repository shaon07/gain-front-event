import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import { FormEvent, useState } from "react";
import { useLoginMutation } from "../../services/api/user.service";

export default function LoginForm() {
  const [login, {isLoading}] = useLoginMutation();
  const [loginState, setLoginState] = useState<Record<string, any>>({
    username: "",
    password: "",
  });
  const handleLoginSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(loginState).unwrap();
  };

  return (
    <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4 ">
      <Input
        label="Username"
        placeholder="Enter your username"
        required
        onChange={(value) => {
          setLoginState({
            ...loginState,
            username: value,
          });
        }}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        onChange={(value) => {
          setLoginState({
            ...loginState,
            password: value,
          });
        }}
      />

      <Button loading={isLoading} type="submit">Login</Button>
    </form>
  );
}
