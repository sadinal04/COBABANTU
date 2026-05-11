"use client";

import { whyUs } from "@/lib/data";
import styles from "./AboutSection.module.css";
import { Zap, Lightbulb, Handshake, Shield, CircleDollarSign, Target, Star, StarHalf } from "lucide-react";

export default function AboutSection() {
  const getWhyUsIcon = (title: string) => {
    switch (title) {
      case "Pengerjaan Cepat": return <Zap size={32} color="#34D399" />;
      case "Solusi Inovatif": return <Lightbulb size={32} color="#34D399" />;
      case "Konsultasi Gratis": return <Handshake size={32} color="#34D399" />;
      case "Support Berkelanjutan": return <Shield size={32} color="#34D399" />;
      case "Harga Transparan": return <CircleDollarSign size={32} color="#34D399" />;
      case "Fokus pada Hasil": return <Target size={32} color="#34D399" />;
      default: return <Star size={32} color="#34D399" />;
    }
  };
  return (
    <section id="tentang" className={`section ${styles.about}`}>
      <div className="container">
        {/* About COBABANTU */}
        <div className={styles.aboutGrid}>
          {/* Left: Text */}
          <div className={styles.aboutContent}>
            <div className="section-label">
              <span>💼</span> Tentang Kami
            </div>
            <h2 className={styles.title}>
              Kami adalah{" "}
              <span className="text-gradient">Mitra Digital</span>{" "}
              Bisnis Anda
            </h2>
            <p className={styles.body}>
              <strong>COBABANTU.COM</strong> adalah studio teknologi digital
              yang berfokus pada pembuatan solusi digital inovatif untuk bisnis
              dari berbagai skala — dari UMKM hingga perusahaan besar.
            </p>
            <p className={styles.body}>
              Dengan tim berpengalaman di bidang web development, data science,
              dan kecerdasan buatan, kami berkomitmen untuk memberikan produk
              berkualitas tinggi yang tidak hanya terlihat bagus, tetapi juga
              menghasilkan nilai nyata bagi bisnis Anda.
            </p>
            <p className={styles.body}>
              Dari ide awal hingga peluncuran produk, kami mendampingi setiap
              langkah perjalanan digital Anda dengan penuh dedikasi.
            </p>

            {/* Values */}
            <div className={styles.values}>
              {["Inovatif", "Terpercaya", "Berorientasi Hasil"].map((v) => (
                <div key={v} className={styles.valueChip}>
                  <span className={styles.valueDot} />
                  {v}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className={styles.aboutVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualTop}>
                <div className={styles.avatar}>CB</div>
                <div>
                  <div className={styles.avatarName}>COBABANTU</div>
                  <div className={styles.avatarRole}>Smart Digital & AI Solutions</div>
                </div>
              </div>

              <div className={styles.skills}>
                {[
                  { label: "Web Development", val: 95 },
                  { label: "Dashboard & Sistem", val: 90 },
                  { label: "AI & Otomatisasi", val: 85 },
                  { label: "Analisis Data", val: 88 },
                ].map((s) => (
                  <div key={s.label} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span>{s.label}</span>
                      <span>{s.val}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ width: `${s.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decoration */}
              <div className={styles.cardDeco1} />
              <div className={styles.cardDeco2} />
            </div>

            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <div className={styles.stars}>
                <Star size={20} fill="#fbbf24" color="#fbbf24" />
                <Star size={20} fill="#fbbf24" color="#fbbf24" />
                <Star size={20} fill="#fbbf24" color="#fbbf24" />
                <Star size={20} fill="#fbbf24" color="#fbbf24" />
                <StarHalf size={20} fill="#fbbf24" color="#fbbf24" />
              </div>
              <div>
                <div className={styles.badgeTitle}>Kepuasan Klien</div>
                <div className={styles.badgeVal}>4.9 / 5.0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why us */}
        <div className={styles.whySection}>
          <div className={`section-header ${styles.whyHeader}`}>
            <div className="section-label">
              <span>🌟</span> Mengapa Pilih Kami
            </div>
            <h2 className="section-title">
              Alasan Bisnis Terbaik{" "}
              <span className="text-gradient">Memilih COBABANTU</span>
            </h2>
          </div>

          <div className={styles.whyGrid}>
            {whyUs.map((item, i) => (
              <div key={i} className={styles.whyCard} id={`why-card-${i}`}>
                <div className={styles.whyIcon}>{getWhyUsIcon(item.title)}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
