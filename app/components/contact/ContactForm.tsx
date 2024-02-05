"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";

interface ContactFormProps {
  placeholderName: string;
  placeholderMessage: string;
  buttonTextNormalStatus: string;
  buttonTextLoadingStatus: string;
  toastSuccessMessage: string;
  toastErrorMessage: string;
}

type ButtonStatus = "normal" | "loading";

export default function ContactForm({
  placeholderName,
  placeholderMessage,
  buttonTextNormalStatus,
  buttonTextLoadingStatus,
  toastSuccessMessage,
  toastErrorMessage,
}: ContactFormProps) {
  const formRef = useRef<null | HTMLFormElement>(null);

  const nameRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const messageRef = useRef<null | HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<null | number>(null);
  const [toastIsVisible, setToastIsVisible] = useState(false);

  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>("normal");

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    if (formRef.current)
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus(result.status);
            setToastIsVisible(true);
            setTimeout(() => {
              setToastIsVisible(false);
            }, 5300); // 5s of animation + 300 miliseconds of delay
          },
          (error) => {
            console.log(error.text);
          }
        );

    if (nameRef.current && emailRef.current && messageRef.current) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        setButtonStatus("loading");

        setTimeout(() => {
          sendEmail(e);
          setButtonStatus("normal");
        }, 2000); // 2 seconds
      }}
    >
      <div className="relative group scroll-reveal">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="name"
          required
          ref={nameRef}
          className="mb-6 w-full max-w-[570px] border border-slate-300 dark:border-slate-700 rounded outline-none px-4 py-3 focus:border-muted"
          placeholder={placeholderName}
        />
      </div>

      <div className="relative group scroll-reveal">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          id="email"
          required
          ref={emailRef}
          className="mb-6 w-full max-w-[570px] border border-slate-300 dark:border-slate-700 rounded outline-none px-4 py-3 focus:border-muted"
          placeholder="Email"
        />
      </div>

      <div className="relative group scroll-reveal">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          ref={messageRef}
          className="mb-6 w-full h-40 max-w-[570px] border border-slate-300 dark:border-slate-700 rounded outline-none px-4 py-3 focus:border-muted resize-none"
          placeholder={placeholderMessage}
        />
      </div>

      <button
        className="h-[52px] bg-secondary text-white dark:text-black px-6 rounded disabled:bg-secondary/80 scroll-reveal select-none"
        disabled={buttonStatus === "loading"}
      >
        {buttonStatus === "loading" ? (
          <span>{buttonTextLoadingStatus}...</span>
        ) : (
          <span>{buttonTextNormalStatus}</span>
        )}
      </button>

      <Toast
        status={status}
        toastIsVisible={toastIsVisible}
        toastSuccessMessage={toastSuccessMessage}
        toastErrorMessage={toastErrorMessage}
      />
    </form>
  );
}

function Toast({
  status,
  toastIsVisible,
  toastSuccessMessage,
  toastErrorMessage,
}: {
  status: null | number;
  toastIsVisible: boolean;
  toastSuccessMessage: string;
  toastErrorMessage: string;
}) {
  return (
    <div
      role="alert"
      className="fixed top-8 right-8 z-[999] flex items-center gap-4 rounded-lg p-4 text-white dark:text-terciary bg-blue-950 shadow-lg overflow-hidden"
      style={{
        transform: toastIsVisible
          ? "translateX(0%)"
          : "translateX(calc(100% + 100px))",
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35)",
      }}
    >
      <FaTelegramPlane
        className={`w-5 h-5 ${
          status === 200 ? "text-green-400" : "text-red-400"
        } `}
      />
      <p className="text-sm">
        {status === 200 ? `${toastSuccessMessage}` : `${toastErrorMessage}`}
      </p>

      <div
        className={`absolute bottom-[1px] h-[2px] w-full right-0 ${
          status === 200 ? "bg-green-400" : "bg-red-400"
        } ${toastIsVisible ? "animate-toastProgress" : "right-full"}`}
      ></div>
    </div>
  );
}
