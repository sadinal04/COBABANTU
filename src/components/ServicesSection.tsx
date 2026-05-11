"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import styles from "./ServicesSection.module.css";
import { Globe, LayoutDashboard, Bot, LineChart } from "lucide-react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "website": return <Globe size={28} />;
      case "dashboard": return <LayoutDashboard size={28} />;
      case "ai": return <Bot size={28} />;
      case "data": return <LineChart size={28} />;
      default: return <Globe size={28} />;
    }
  };
  return (
    <section id="layanan" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span>🚀</span> Layanan Kami
          </div>
          <h2 className="section-title">
            Solusi Digital{" "}
            <span className="text-gradient">Lengkap & Terintegrasi</span>
          </h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai layanan teknologi yang dirancang untuk
            membantu bisnis Anda tumbuh dan berkembang di era digital.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`card ${styles.card} ${activeService === service.id ? styles.activeCard : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              id={`service-card-${service.id}`}
              onClick={() => setActiveService(service.id === activeService ? null : service.id)}
            >
              {/* Card top accent */}
              <div
                className={styles.cardAccent}
                style={{ background: `linear-gradient(90deg, ${service.color}22, transparent)` }}
              />

              <div className={styles.cardContent}>
                {/* Icon */}
                <div
                  className={styles.iconWrap}
                  style={{
                    background: `${service.color}18`,
                    border: `1.5px solid ${service.color}33`,
                    color: service.color,
                  }}
                >
                  <span className={styles.icon}>{getIcon(service.id)}</span>
                </div>

                {/* Title */}
                <h3 className={styles.title}>{service.title}</h3>

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

                {/* Bottom link */}
                <div className={styles.cardFooter}>
                  <span
                    className={styles.learnMore}
                    style={{ color: service.color }}
                  >
                    Pelajari lebih lanjut
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
