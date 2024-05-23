"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SynchronizeContext {
  isActive: string | null;
  setIsActive: Dispatch<SetStateAction<string | null>>;
}

export const synchronizeContext = createContext<SynchronizeContext | undefined>(undefined);

export function SynchronizeProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <synchronizeContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </synchronizeContext.Provider>
  );
}

export function useSynchronizeContext() {
  const context = useContext(synchronizeContext);

  if (context === undefined) {
    throw new Error(
      "useSynchronizeContext must be inside a SynchronizeProvider"
    );
  }

  return context;
}
