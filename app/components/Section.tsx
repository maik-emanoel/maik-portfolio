import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="h-screen pt-10">
      <h2 className="text-titleClamp tracking-wider text-blue-400">{title}</h2>
      {children}
    </section>
  );
}
