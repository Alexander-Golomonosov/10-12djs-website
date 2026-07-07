"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitContact(prev: { success: boolean; message: string }, formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "Заполните все поля" };
  }

  if (!email.includes("@")) {
    return { success: false, message: "Некорректный email" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "10djs12_fckngd1@vk.com",
      replyTo: email,
      subject: `Новое сообщение с сайта от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`,
      html: `<p><b>Имя:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Сообщение:</b></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true, message: "Сообщение отправлено! Мы свяжемся с вами." };
  } catch {
    return { success: false, message: "Ошибка отправки. Попробуйте позже." };
  }
}
