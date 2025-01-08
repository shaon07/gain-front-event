interface UserAvatarProps {
  src: string;
  className?: string;
}

export default function UserAvatar({ src, className = "" }: UserAvatarProps) {
  return (
    <img
      className={`h-8 w-8 rounded-full ${className}`}
      src={src}
      alt="User profile"
    />
  );
}
