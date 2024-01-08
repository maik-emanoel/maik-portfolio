import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={twMerge('h-screen pt-10 max-h-[768px]', className)}>
      <h2 className="text-titleClamp text-blue-secondary font-bold">{title}</h2>
      {children}
    </section>
  );
}
