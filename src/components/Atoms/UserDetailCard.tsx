interface UserDetails {
  name: string;
  email: string;
}
export default function UserDetailCard({ name, email }: UserDetails) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
