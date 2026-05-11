"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import styles from "./ServicesSection.module.css";
import { Globe, LayoutDashboard, Bot, LineChart } from "lucide-react";

const getIcon = (id: string) => {
  switch (id) {
    case "website": return <Globe size={26} />;
    case "dashboard": return <LayoutDashboard size={26} />;
    case "ai": return <Bot size={26} />;
    case "data": return <LineChart size={26} />;
    default: return <Globe size={26} />;
  }
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="layanan" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Layanan Kami
          </div>
          <h2 className="section-title">
            Solusi Digital{" "}
            <span className="text-gradient">Lengkap &amp; Terintegrasi</span>
          </h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai layanan teknologi yang dirancang untuk membantu segala kebutuhan digital Anda.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const isActive = activeService === service.id;
            return (
              <div
                key={service.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                id={`service-card-${service.id}`}
                onClick={() => setActiveService(isActive ? null : service.id)}
                role="button"
                aria-pressed={isActive}
              >
                {/* Top accent bar */}
                <div
                  className={styles.cardAccent}
                  style={{ background: isActive ? `linear-gradient(90deg, ${service.color}, transparent)` : `linear-gradient(90deg, ${service.color}22, transparent)` }}
                />

                {/* ON/OFF toggle — top right */}
                <div className={`${styles.toggle} ${isActive ? styles.toggleOn : ""}`}>
                  <div className={styles.toggleKnob} />
                </div>

                <div className={styles.cardContent}>
                  {/* Icon */}
                  <div
                    className={styles.iconWrap}
                    style={{
                      background: isActive ? `${service.color}25` : `${service.color}14`,
                      border: `1.5px solid ${isActive ? service.color : service.color + "33"}`,
                      color: service.color,
                    }}
                  >
                    {getIcon(service.id)}
                  </div>

                  {/* Title */}
                  <h3 className={styles.title} style={{ color: isActive ? service.color : undefined }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={styles.description}>{service.description}</p>

                  {/* Items list */}
                  <ul className={styles.itemList}>
                    {service.items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <span
                          className={styles.itemDot}
                          style={{ background: service.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore} style={{ color: service.color }}>
                      {isActive ? "Dipilih ✓" : "Pelajari lebih lanjut"}
                      {!isActive && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
