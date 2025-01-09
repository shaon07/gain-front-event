import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

export default function LoginForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-4 "
    >
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        onChange={() => {}}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        onChange={() => {}}
      />

      <Button>Login</Button>
    </form>
  );
}
