import { Calendar } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Calendar className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">EventHub</span>
    </div>
  );
}
