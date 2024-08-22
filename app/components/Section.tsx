import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={twMerge('min-h-screen pt-10 overflow-clip', className)} data-section={id}>
      <h2 className="w-fit text-titleClamp text-blue-secondary font-bold scroll-reveal">{title}</h2>
      {children}
    </section>
  );
}
