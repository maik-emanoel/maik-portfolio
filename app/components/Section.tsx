import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={twMerge('h-screen pt-10 max-h-[768px] overflow-clip', className)}>
      <h2 className="w-fit text-titleClamp text-blue-secondary font-bold scroll-reveal">{title}</h2>
      {children}
    </section>
  );
}
