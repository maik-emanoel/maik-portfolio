"use client";

import { logos } from "@/app/lib/about-logos";
import { DiamondsFour, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState, MouseEvent } from "react";

export default function ViewAllButton({
  viewAllButtonTitle,
}: {
  viewAllButtonTitle: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const portalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
      window.addEventListener("keydown", handleCloseModalWithHotkey);
    } else {
      document.body.style.overflowY = "initial";
    }

    return () =>
      window.removeEventListener("keydown", handleCloseModalWithHotkey);
  }, [isModalOpen]);

  function handleShowModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal(e: MouseEvent) {
    if (e.target === portalRef.current) {
      setIsModalOpen(false);
    }
  }

  function handleCloseModalWithHotkey(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="text-sm text-blue-primary cursor-pointer hover:text-blue-secondary scroll-reveal"
        onClick={handleShowModal}
        title={viewAllButtonTitle}
      >
        <DiamondsFour size={20} weight="fill" className="sm:size-4" />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[999]"
          ref={portalRef}
          onClick={handleCloseModal}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-[75%] px-8 py-7 pr-6 rounded-lg h-[70vh] bg-background flex flex-col gap-8 shadow-xl border border-white/10 sm:w-screen sm:h-dvh sm:rounded-none">
            <h3 className="text-3xl font-medium">All my stacks</h3>
            <X
              size={24}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-1 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
            <div
              className="flex-1 grid gap-5 overflow-y-auto logos-scrollbar pr-4"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                gridAutoRows: "max-content",
              }}
            >
              {logos.map((logo) => {
                return (
                  <div
                    key={logo.name}
                    className="flex flex-col gap-3 justify-center items-center border border-muted rounded-md text-muted py-4 px-2 h-[92px] transition duration-200 hover:border-primary hover:text-primary"
                  >
                    <logo.image size={24} />
                    <span className="w-full text-xs text-center overflow-hidden whitespace-nowrap text-ellipsis cursor-default">
                      {logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
