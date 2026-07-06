import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | 10/12DJ'S",
};

const team = [
  { name: "Alex", role: "Tech House / Techno", bio: "Основатель команды. За пультом с 2015 года." },
  { name: "Mike", role: "Breaks / Bass", bio: "Мастер тёмных басов и драйвовых ритмов." },
  { name: "Kate", role: "Deep House", bio: "Мелодичный хаус и атмосферные сеты." },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">О нас</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        10/12DJ&apos;S — это команда, родившаяся из любви к электронной музыке.
        Мы объединились, чтобы создавать уникальные музыкальные впечатления.
        Каждый наш сет — это история, рассказанная языком ритма и мелодии.
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent">
              {member.name[0]}
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm text-secondary">{member.role}</p>
            <p className="mt-3 text-sm text-muted">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight">Наша миссия</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Мы верим, что музыка способна объединять. Наша цель — создавать
          незабываемые вечера, где каждый найдёт свой ритм. От камерных
          клубов до крупных фестивалей — мы приносим энергию везде.
        </p>
      </div>
    </div>
  );
}
