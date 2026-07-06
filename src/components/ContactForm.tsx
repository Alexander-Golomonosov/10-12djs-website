"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-bold tracking-widest text-foreground">
          ИМЯ
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full border-2 border-border/30 bg-card px-4 py-3 text-xs font-semibold text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="ВАШЕ ИМЯ"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-bold tracking-widest text-foreground">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full border-2 border-border/30 bg-card px-4 py-3 text-xs font-semibold text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="YOUR@EMAIL.COM"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-bold tracking-widest text-foreground">
          СООБЩЕНИЕ
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none border-2 border-border/30 bg-card px-4 py-3 text-xs font-semibold text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="НАПИШИТЕ НАМ..."
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full border-2 border-accent bg-accent px-6 py-4 text-xs font-bold tracking-widest text-white transition-all hover:bg-accent-hover hover:border-accent-hover disabled:opacity-50"
      >
        {pending ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
      </button>
      {state.message && (
        <p className={`text-center text-xs font-bold tracking-wider ${state.success ? "text-accent" : "text-red-400"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
