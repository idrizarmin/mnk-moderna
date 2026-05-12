"use client";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Trophy,
  Users,
  Shield,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ModernaClubPage() {
  const [showAllGallery, setShowAllGallery] = useState(false);

  const galleryImages = [
    "/Slika2.jpeg",
    "/Slika3.jpeg",
    "/Slika4.jpeg",
    "/slika5.jpeg",
    "/sedzimir.jpeg",
    "/Moderna3.png",
    "/Moderna2.jpeg",
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const visibleMobileImages = showAllGallery
    ? galleryImages
    : galleryImages.slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07140d] text-white selection:bg-[#39ff14] selection:text-[#07140d]">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-15%] top-[-10%] h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-[#39ff14]/15 blur-3xl" />
        <div className="absolute right-[-15%] top-[18%] h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[#8aff6d]/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[10%] h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,255,20,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_25%,rgba(255,255,255,0.02))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07140d]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <img
              src="/ModernaLogo.png"
              alt="Moderna logo"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-[#39ff14]/50 sm:h-12 sm:w-12"
            />
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#39ff14] sm:text-sm sm:tracking-[0.3em]">
                Since 2022
              </p>
              <h1 className="truncate text-sm font-black tracking-wide sm:text-lg">
                MNK Moderna
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-[#39ff14]">
              O klubu
            </a>
            <a href="#team" className="transition hover:text-[#39ff14]">
              Ekipa
            </a>
            <a href="#gallery" className="transition hover:text-[#39ff14]">
              Galerija
            </a>
            <a href="#contact" className="transition hover:text-[#39ff14]">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="relative mx-auto flex max-w-7xl items-center px-4 py-12 sm:min-h-[92vh] sm:px-6 sm:py-16 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 inline-flex rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9aff82] sm:px-4 sm:text-sm sm:tracking-[0.25em]"
              >
                Just Respect
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl"
              >
                Snaga tima,
                <span className="block text-[#39ff14]">moderan identitet.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8"
              >
                Dobrodošli na službenu stranicu malonogometnog kluba{" "}
                <strong>Moderna</strong>. Klub osnovan 2022. godine okuplja
                mlad, ambiciozan i borben tim sa jasnim ciljem — graditi
                prepoznatljiv identitet, timski duh i sportski respekt na svakom
                terenu.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                <a
                  href="#about"
                  className="w-full rounded-2xl bg-[#39ff14] px-6 py-3 text-center font-bold text-[#07140d] shadow-[0_0_30px_rgba(57,255,20,0.25)] transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Saznaj više
                </a>
                <a
                  href="#contact"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:border-[#39ff14]/40 hover:bg-white/10 sm:w-auto"
                >
                  Kontaktiraj nas
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3"
              >
                {[
                  { icon: Trophy, title: "Osnovan", value: "2022" },
                  { icon: Users, title: "Tim", value: "Jedinstvo" },
                  { icon: Shield, title: "Moto", value: "Just Respect" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5"
                  >
                    <item.icon className="mb-3 h-6 w-6 text-[#39ff14]" />
                    <p className="text-sm text-white/60">{item.title}</p>
                    <p className="mt-1 text-lg font-bold sm:text-xl">
                      {item.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[2rem] bg-[#39ff14]/10 blur-2xl sm:-inset-4" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="/ModernaLogo.png"
                  alt="MNK Moderna logo"
                  className="h-[220px] w-full object-contain p-6 sm:h-[380px] sm:object-cover sm:p-0 lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07140d] via-[#07140d]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="inline-flex rounded-full border border-[#39ff14]/30 bg-[#07140d]/70 px-3 py-2 text-xs font-semibold text-[#9aff82] backdrop-blur sm:px-4 sm:text-sm">
                    Moderna • malonogometni klub
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="relative h-[260px] min-h-[260px] w-full sm:h-[360px] lg:h-full">
                <Image
                  src="/Ekipa.jpeg"
                  alt="MNK Moderna"
                  fill
                  className="rounded-[2rem] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39ff14] sm:text-sm sm:tracking-[0.3em]">
                O klubu
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">
                Moderan klub sa jasnim karakterom
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                MNK Moderna predstavlja spoj energije, discipline i timskog
                zajedništva. Vizuelni identitet kluba prati moderne linije, jake
                kontraste i prepoznatljive zelene tonove koji simbolizuju
                svježinu, borbenost i napredak.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Cilj ekipe nije samo ostvarivanje rezultata, već stvaranje
                  atmosfere u kojoj svaki član kluba doprinosi zajedničkoj
                  priči, razvoju ekipe i predstavljanju Moderne na najbolji
                  mogući način.
                </p>
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="team"
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39ff14] sm:text-sm sm:tracking-[0.3em]">
                Ekipa
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">
                Tim koji nosi identitet kluba
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid gap-4 sm:gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: "Borbenost",
                  text: "Svaka utakmica se igra sa maksimalnim zalaganjem i poštovanjem prema protivniku.",
                },
                {
                  title: "Zajedništvo",
                  text: "Snaga kluba dolazi iz ekipe, podrške i zajedničkog rada na svakom treningu i meču.",
                },
                {
                  title: "Napredak",
                  text: "Klub gradi stabilan i moderan sportski identitet sa fokusom na dugoročni razvoj.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#39ff14]/40 hover:bg-white/10 sm:p-7"
                >
                  <div className="mb-5 h-1.5 w-16 rounded-full bg-[#39ff14] transition group-hover:w-24" />
                  <h4 className="text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39ff14] sm:text-sm sm:tracking-[0.3em]">
                Galerija
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">
                Moderna kroz objektiv
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Trenuci sa utakmica, atmosfera ekipe i identitet kluba kroz
                fotografije koje predstavljaju energiju i zajedništvo MNK
                Moderna.
              </p>
            </motion.div>

            {/* Desktop / tablet horizontal scroll */}
            <motion.div
              ref={scrollRef}
              variants={fadeUp}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="hidden cursor-grab select-none gap-5 overflow-x-auto pb-2 pr-4 scroll-smooth active:cursor-grabbing md:flex
  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className="group relative h-[360px] min-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl lg:min-w-[520px]"
                >
                  <img
                    src={src}
                    alt={`MNK Moderna gallery ${index + 1}`}
                    draggable={false}
                    className="pointer-events-none h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07140d]/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-[#39ff14]/40" />
                </div>
              ))}
            </motion.div>

            {/* Mobile expandable gallery */}
            <motion.div variants={fadeUp} className="grid gap-4 md:hidden">
              <div className="grid gap-4">
                {visibleMobileImages.map((src, index) => (
                  <div
                    key={src}
                    className="group relative h-[240px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5"
                  >
                    <img
                      src={src}
                      alt={`MNK Moderna gallery ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/10" />
                  </div>
                ))}
              </div>

              {galleryImages.length > 3 && (
                <button
                  type="button"
                  onClick={() => setShowAllGallery((prev) => !prev)}
                  aria-label={
                    showAllGallery ? "Prikaži manje slika" : "Prikaži još slika"
                  }
                  className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 text-[#39ff14] shadow-[0_0_25px_rgba(57,255,20,0.15)] transition hover:bg-[#39ff14]/20 active:scale-95"
                >
                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${
                      showAllGallery ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              )}
            </motion.div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5"
          >
            <div className="grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39ff14] sm:text-sm sm:tracking-[0.3em]">
                  Kontakt
                </p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl">
                  Javi nam se
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Ako imaš pitanja, želiš saradnju ili podržati naš klub —
                  kontaktiraj nas. Otvoreni smo za nove članove, partnere i sve
                  koji žele biti dio naše priče.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-4">
                {[
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: "+387 63 726 260 | +387 63 563 859",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "mnkmoderna2022@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Lokacija",
                    value: "Gubavica bb",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 sm:gap-4 sm:p-5"
                  >
                    <div className="shrink-0 rounded-2xl bg-[#39ff14]/15 p-3 text-[#39ff14]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-white/55">{item.label}</p>
                      <p className="mt-1 break-words text-base font-semibold sm:text-lg">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/45 sm:text-sm">
        © {new Date().getFullYear()} MNK Moderna — Just Respect
      </footer>
    </div>
  );
}
