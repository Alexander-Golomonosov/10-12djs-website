import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents, getPastEvents, type EventItem } from "@/lib/events";

export const metadata: Metadata = {
  title: "АФИША | 10/12DJ'S",
};

function EventCard({ event, compact }: { event: EventItem; compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center border border-accent/10 bg-card/50 ${compact ? "p-6 lg:gap-10" : "p-8 lg:gap-12"} lg:flex-row`}>
      <div className="w-48 shrink-0">
        <Image
          src={event.poster}
          alt={event.posterAlt}
          width={event.posterWidth}
          height={event.posterHeight}
          className="border border-accent/20 object-cover"
        />
      </div>
      <div className="mt-6 text-center lg:mt-0 lg:text-left">
        <span className="text-[9px] font-semibold tracking-[0.25em] text-accent/60">● {event.dateLabel}</span>
        <h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">{event.title}</h2>
        {event.venue && <p className="text-sm font-bold tracking-[0.15em] text-accent/80">{event.venue}</p>}
        {(event.location || event.time) && (
          <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
        )}
        {event.location && <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">{event.location}</p>}
        {event.time && !event.location && <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">{event.time}</p>}
        {event.description && (
          <>
            <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
            <p className="mt-4 text-[10px] font-semibold tracking-[0.2em] text-muted">{event.description}</p>
          </>
        )}
        {event.descriptionLong && (
          <>
            <div className="mx-auto mt-4 h-px w-16 bg-accent/40 lg:mx-0" />
            <p className="mt-4 max-w-xl text-[10px] font-semibold leading-relaxed tracking-[0.2em] text-muted">
              {event.descriptionLong.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </>
        )}
        {event.artists && event.artists.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {event.artists.map((artist, i) => (
              <span key={artist.name}>
                {i > 0 && <span className="text-[9px] text-muted/40"> / </span>}
                {artist.url ? (
                  <a href={artist.url} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold tracking-[0.2em] text-accent/70 transition-colors hover:text-accent">
                    {artist.name}
                  </a>
                ) : (
                  <span className="text-[9px] font-bold tracking-[0.2em] text-accent/70">{artist.name}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          {event.isFree && <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">ВХОД СВОБОДНЫЙ</span>}
          {event.time && event.location && <span className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">{event.time}</span>}
          {event.tags?.map((tag) => (
            <span key={tag} className="border border-accent/30 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent">{tag}</span>
          ))}
        </div>
        {event.links && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {event.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="border border-accent/20 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-accent transition-colors hover:border-accent/60">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Afisha() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24">
      <span className="graffiti-tag -top-16 -left-10 rotate-[-10deg]">POSTER</span>
      <h1 className="text-5xl font-black tracking-tighter sm:text-6xl">
        <span className="gradient-text">АФИША</span>
      </h1>
      <div className="mt-2 h-1 w-16 bg-accent" />
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted">ПРЕДСТОЯЩИЕ И ПРОШЕДШИЕ СОБЫТИЯ</p>

      {upcoming.length > 0 && (
        <div className="mt-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● СКОРО</span>
          <h2 className="mt-2 text-3xl font-black tracking-tighter">ПРЕДСТОЯЩИЕ</h2>
          <div className="mt-2 h-1 w-16 bg-accent" />
          <div className="mt-8 space-y-8">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div className="mt-24 border-t-2 border-accent/20 pt-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-accent/60">● АРХИВ</span>
          <h2 className="mt-2 text-3xl font-black tracking-tighter">ПРОШЕДШИЕ</h2>
          <div className="mt-2 h-1 w-16 bg-accent" />
          <div className="mt-8 space-y-8">
            {past.map((event) => (
              <EventCard key={event.id} event={event} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
