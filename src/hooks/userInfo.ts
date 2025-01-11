import { useAppSelector } from "../context/redux/hook";

export default function useUserInfo() {
  const user = useAppSelector((state) => state.userSlice);

  return { user };
}
