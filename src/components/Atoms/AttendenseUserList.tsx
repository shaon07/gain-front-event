interface AttendenseUserListProps {
  id: string;
  name: string;
  image: string;
}
export default function AttendenseUserList({
  id,
  name,
  image,
}: AttendenseUserListProps) {
  return (
    <div key={id} className="flex items-center space-x-3">
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
      <span className="font-medium">{name}</span>
    </div>
  );
}
