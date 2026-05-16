import type { Metadata } from "next";
import Image from "next/image";
import { Bot, ChartColumn, Globe, LayoutDashboard, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const slides = [
  {
    number: "01",
    kicker: "Carousel Instagram",
    title: "Solusi Digital untuk Bisnis yang Ingin Naik Level",
    subtitle:
      "COBABANTU.COM membantu Anda membangun website, dashboard, AI, dan analisis data dalam satu arah yang rapi dan profesional.",
    chips: ["Website", "Mobile App", "Dashboard", "AI", "Analisis Data"],
  },
  {
    number: "02",
    kicker: "Pembuatan Website & Aplikasi Mobile",
    title: "Website yang terlihat bagus dan bekerja untuk bisnis Anda",
    items: [
      "Website UMKM & Bisnis",
      "Toko Online",
      "Website Profil & Portofolio",
      "Landing Page",
      "Website Custom",
    ],
    icon: Globe,
  },
  {
    number: "03",
    kicker: "Dashboard & Sistem",
    title: "Pantau operasional dan data dengan tampilan yang jelas",
    items: [
      "Dashboard Admin",
      "Dashboard Data Interaktif",
      "Sistem Monitoring",
      "Visualisasi Data Otomatis",
      "Sistem Manajemen",
    ],
    icon: LayoutDashboard,
  },
  {
    number: "04",
    kicker: "AI & Otomatisasi",
    title: "Buat proses kerja lebih cepat dengan bantuan AI",
    items: ["Chatbot Sederhana", "Balasan Otomatis", "Sistem AI Sederhana"],
    icon: Bot,
  },
  {
    number: "05",
    kicker: "Analisis Data",
    title: "Ubah data menjadi keputusan yang lebih tepat",
    items: [
      "Pengolahan Data",
      "Grafik & Laporan Data",
      "Analisis & Insight Bisnis",
      "Prediksi Data",
    ],
    icon: ChartColumn,
  },
];

export const metadata: Metadata = {
  title: "Instagram Carousel | COBABANTU",
  description: "Poster carousel Instagram 5 slide untuk COBABANTU.COM.",
};

function PosterFrame({
  number,
  kicker,
  title,
  subtitle,
  items,
  chips,
  icon: Icon,
}: (typeof slides)[number]) {
  return (
    <article className={styles.poster}>
      <div className={styles.posterGlow} />
      <div className={styles.posterInner}>
        <div className={styles.topRow}>
          <div className={styles.brandMark}>
            <Image
              src="/images/logo.png"
              alt="COBABANTU Logo"
              width={28}
              height={28}
              className={styles.brandLogo}
              style={{ width: "auto", height: "auto" }}
            />
            <span className={styles.badge}>COBABANTU.COM</span>
          </div>
          <span className={styles.slideNumber}>Slide {number}</span>
        </div>

        <div className={styles.heroBlock}>
          <div className={styles.iconWrap}>
            {Icon ? <Icon size={34} /> : <Sparkles size={34} />}
          </div>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>

        {chips ? (
          <div className={styles.chipRow}>
            {chips.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        ) : null}

        {items ? (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.listDot} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className={styles.footerRow}>
          <div className={styles.footerCopy}>
            <p className={styles.footerLabel}>Smart Digital & AI Solutions</p>
            <p className={styles.footerText}>Banda Aceh</p>
          </div>
          <div className={styles.footerMark}>
            <Image
              src="/images/logo.png"
              alt="COBABANTU Logo"
              width={18}
              height={18}
              className={styles.footerLogo}
              style={{ width: "auto", height: "auto" }}
            />
            <Sparkles size={16} />
            <span>COBABANTU</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PosterInstagramPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div>
          <p className={styles.pageLabel}>Instagram Carousel</p>
          <h1 className={styles.pageTitle}>Poster 5 Slide untuk Posting</h1>
        </div>
        <p className={styles.pageNote}>
          Ukuran tiap slide dibuat seperti poster Instagram agar mudah di-screenshot satu per satu.
        </p>
      </section>

      <section className={styles.deck}>
        {slides.map((slide) => (
          <PosterFrame key={slide.number} {...slide} />
        ))}
      </section>
    </main>
  );
}