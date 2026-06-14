import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/masjid-hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Noor Masjid — Faith, Community & Peace" },
      {
        name: "description",
        content:
          "Al-Noor Masjid: prayer times, events, donations and community programs. Join us in faith, learning and service.",
      },
      { property: "og:title", content: "Al-Noor Masjid" },
      { property: "og:description", content: "Connecting Faith, Community & Peace." },
    ],
  }),
  component: Home,
});

const prayers = [
  { name: "Fajr", time: "5:10 AM" },
  { name: "Dhuhr", time: "12:30 PM" },
  { name: "Asr", time: "4:15 PM" },
  { name: "Maghrib", time: "6:45 PM" },
  { name: "Isha", time: "8:00 PM" },
];

const events = [
  { title: "Jummah Bayan", desc: "Friday sermon every week at 1:00 PM with our Imam." },
  { title: "Quran Classes", desc: "Daily Tajweed & memorization classes for all ages." },
  { title: "Youth Program", desc: "Weekly halaqas, sports and mentorship for the youth." },
  { title: "Islamic Workshop", desc: "Monthly seminars on Seerah, Fiqh and contemporary topics." },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[8%] py-5 bg-background/40 backdrop-blur-lg border-b border-border">
        <h1 className="text-gold font-display text-2xl tracking-wide">Al-Noor Masjid</h1>
        <ul className="hidden md:flex gap-7 text-sm">
          {["Home", "Prayer Times", "Events", "Donation", "Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gold transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex h-screen items-center justify-center text-center px-5"
      >
        <img
          src={heroImg}
          alt="Al-Noor Masjid illuminated at twilight"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative max-w-3xl">
          <p className="text-gold tracking-[0.4em] text-xs mb-4">السلام عليكم</p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight">
            Welcome to <span className="text-gold">Al-Noor</span> Masjid
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Connecting Faith, Community & Peace
          </p>
          <button className="mt-8 rounded-full bg-gold text-primary-foreground font-semibold px-8 py-3 hover:opacity-90 transition">
            Join Community
          </button>
        </div>
      </section>

      {/* PRAYER TIMES */}
      <section id="prayer-times" className="py-20 px-[8%] bg-surface text-center">
        <h2 className="font-display text-4xl text-gold mb-12">Today's Prayer Times</h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-5">
          {prayers.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:-translate-y-1 transition-transform"
            >
              <p className="text-gold font-display text-2xl">{p.name}</p>
              <p className="mt-2 text-lg">{p.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20 px-[8%] text-center">
        <h2 className="font-display text-4xl text-gold mb-12">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-border bg-card/60 p-7 text-left hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-gold font-display text-2xl mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DONATION */}
      <section id="donation" className="py-20 px-[8%] bg-surface text-center">
        <h2 className="font-display text-4xl text-gold mb-3">Support Masjid Expansion</h2>
        <p className="text-muted-foreground mb-8">
          Help us complete the new prayer hall — every contribution counts.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="h-5 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-gold" style={{ width: "70%" }} />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">70% Completed · $140,000 of $200,000</p>
          <button className="mt-8 rounded-full bg-gold text-primary-foreground font-semibold px-10 py-3 hover:opacity-90 transition">
            Donate Now
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-[8%] text-center">
        <h2 className="font-display text-4xl text-gold mb-12">Gallery</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {[g1, g2, g3, g4].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Masjid gallery ${i + 1}`}
              loading="lazy"
              width={800}
              height={600}
              className="h-52 w-full object-cover rounded-xl hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-[8%] bg-surface text-center">
        <h2 className="font-display text-4xl text-gold mb-10">Contact Us</h2>
        <form
          className="mx-auto flex max-w-lg flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-xl bg-input/40 border border-border px-4 py-3 outline-none focus:border-gold"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-xl bg-input/40 border border-border px-4 py-3 outline-none focus:border-gold"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="rounded-xl bg-input/40 border border-border px-4 py-3 outline-none focus:border-gold resize-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-gold text-primary-foreground font-semibold py-3 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 Al-Noor Masjid · All Rights Reserved
      </footer>
    </div>
  );
}
