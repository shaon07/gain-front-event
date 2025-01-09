import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

export default function RegisterForm() {
  return (
    <form action="" className="flex flex-col gap-4 ">
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

      <Input label="Avatar" type="file" onChange={() => {}} />

      <Button>Register</Button>
    </form>
  );
}
