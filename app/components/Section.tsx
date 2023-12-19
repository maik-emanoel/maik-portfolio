import { ReactNode } from "react"

interface SectionProps {
  id: string,
  children: ReactNode
}

export default function Section({id, children}: SectionProps) {
  return (
    <section id={id} className="h-screen pt-12">
      {children}
    </section>
  )
}