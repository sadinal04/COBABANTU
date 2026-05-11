"use client";

import { WA_LINK } from "@/lib/data";
import styles from "./ContactSection.module.css";
import { MessageSquare, Zap, Gift, Smartphone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontak" className={styles.contact}>
      {/* Background decoration */}
      <div className={styles.bgDecoration} aria-hidden />

      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.content}>
            <div className={`section-label ${styles.label}`}>
              <MessageSquare size={16} /> Hubungi Kami
            </div>
            <h2 className={styles.title}>
              Siap Memulai{" "}
              <span className={styles.titleAccent}>Proyek Digital</span>{" "}
              Anda?
            </h2>
            <p className={styles.body}>
              Konsultasikan kebutuhan digital bisnis Anda bersama kami. Tim kami
              siap membantu Anda menemukan solusi terbaik yang sesuai dengan
              tujuan dan anggaran Anda.
            </p>

            {/* Highlights */}
            <div className={styles.highlights}>
              {[
                { icon: <Zap size={20} color="#34D399" />, text: "Respon cepat dalam 1×24 jam" },
                { icon: <Gift size={20} color="#34D399" />, text: "Konsultasi awal gratis" },
                { icon: <Smartphone size={20} color="#34D399" />, text: "Langsung terhubung via WhatsApp" },
              ].map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            {/* WA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-wa btn-lg ${styles.waBtn}`}
              id="contact-wa-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat di WhatsApp Sekarang
            </a>

            <p className={styles.waNumber}>
              <Smartphone size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> +62 853-3734-2258
            </p>
          </div>

          {/* Right: Visual card */}
          <div className={styles.visual} aria-hidden>
            <div className={styles.chatCard}>
              <div className={styles.chatHeader}>
                <div className={styles.chatAvatar}>CB</div>
                <div className={styles.chatInfo}>
                  <span className={styles.chatName}>COBABANTU</span>
                  <span className={styles.chatStatus}>
                    <span className={styles.statusDot} /> Online
                  </span>
                </div>
              </div>

              <div className={styles.chatMessages}>
                <div className={styles.msgReceived}>
                  Halo! 👋 Ada yang bisa kami bantu?
                </div>
                <div className={styles.msgSent}>
                  Saya ingin konsultasi terkait pembuatan website bisnis saya
                </div>
                <div className={styles.msgReceived}>
                  Tentu! Kami siap membantu. Bisa ceritakan lebih detail kebutuhannya? 😊
                </div>
                <div className={`${styles.msgSent} ${styles.msgTyping}`}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.chatInput}>
                <div className={styles.inputBar}>Ketik pesan...</div>
                <div className={styles.sendBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorations */}
            <div className={styles.deco1} />
            <div className={styles.deco2} />
          </div>
        </div>
      </div>
    </section>
  );
}
