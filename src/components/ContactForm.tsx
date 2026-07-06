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
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent"
          placeholder="Напишите нам..."
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover disabled:opacity-50"
      >
        {pending ? "Отправка..." : "Отправить"}
      </button>
      {state.message && (
        <p className={`text-center text-sm ${state.success ? "text-green-400" : "text-red-400"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
