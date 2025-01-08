import { ReactNode } from "react";

interface HomePageTemplateProps {
  children: ReactNode;
}

export default function HomePageTemplate({ children }: HomePageTemplateProps) {
  return <div>{children}</div>;
}
