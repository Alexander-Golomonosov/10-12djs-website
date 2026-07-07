import RaveQuiz from "@/components/RaveQuiz";

export const metadata = {
  title: "РЕЙВ-ТЕСТ | 10/12DJ'S",
};

export default function QuizPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-32">
      <div className="mb-16 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">
          ● ИНТЕРАКТИВ
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tighter sm:text-5xl">
          РЕЙВ-ТЕСТ
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xs font-semibold tracking-[0.2em] text-muted/60">
          УЗНАЙ СВОЙ АРХЕТИП НА ТАНЦПОЛЕ
        </p>
      </div>
      <RaveQuiz />
    </section>
  );
}
