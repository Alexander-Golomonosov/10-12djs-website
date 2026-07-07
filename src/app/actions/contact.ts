"use server";

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
    const res = await fetch("https://formsubmit.co/ajax/10djs12_fckngd1@vk.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Новое сообщение с сайта от ${name}`,
      }),
    });

    if (!res.ok) throw new Error("FormSubmit error");

    return { success: true, message: "Сообщение отправлено! Мы свяжемся с вами." };
  } catch {
    return { success: false, message: "Ошибка отправки. Попробуйте позже." };
  }
}
