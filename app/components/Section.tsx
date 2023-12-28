import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={twMerge('h-screen pt-10', className)}>
      <h2 className="text-titleClamp text-blue-400 font-bold">{title}</h2>
      {children}
    </section>
  );
}
