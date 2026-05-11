"use client";

import { useState, useEffect } from "react";
import { WA_LINK, stats } from "@/lib/data";
import styles from "./HeroSection.module.css";
import { Globe, LayoutDashboard, Bot, LineChart, Zap, Tag } from "lucide-react";

const screenSlides = [
  { id: "web", title: "Website Analytics", Icon: Globe, color: "#34D399", bars: [35,55,45,70,50,80,65], metrics: [{ l: "Traffic", v: "12.4K", up: true },{ l: "Conv.", v: "8.2%", up: true },{ l: "Bounce", v: "22%", up: false }] },
  { id: "dash", title: "Dashboard KPI", Icon: LayoutDashboard, color: "#10B981", bars: [60,75,55,88,65,92,78], metrics: [{ l: "Revenue", v: "48M", up: true },{ l: "Orders", v: "1,240", up: true },{ l: "Churn", v: "4.1%", up: false }] },
  { id: "ai", title: "AI Automation", Icon: Bot, color: "#059669", bars: [70,82,68,92,75,85,90], metrics: [{ l: "Uptime", v: "99.8%", up: true },{ l: "Queries", v: "2,847", up: true },{ l: "Error", v: "0.2%", up: false }] },
  { id: "data", title: "Analisis Data", Icon: LineChart, color: "#047857", bars: [45,60,75,65,82,58,88], metrics: [{ l: "Dataset", v: "8 TB", up: true },{ l: "Insights", v: "340", up: true },{ l: "Latency", v: "98ms", up: true }] },
];
const sideIcons = [Globe, LayoutDashboard, Bot, LineChart];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % screenSlides.length), 3000);
    return () => clearInterval(t);
  }, []);
  const slide = screenSlides[activeSlide];

  return (
    <section id="beranda" className={styles.hero}>
      <div className={styles.blobTop} aria-hidden /><div className={styles.blobBottom} aria-hidden />
      <div className={`container ${styles.inner}`}>

        {/* LEFT */}
        <div className={styles.content}>
          <div className={`badge badge-green animate-fadeInUp delay-1 ${styles.badge}`}>
            <Zap size={14} /> Smart Digital &amp; AI Solutions
          </div>
          <h1 className={`${styles.heading} animate-fadeInUp delay-2`}>
            Wujudkan Bisnis Digital <span className={styles.headingAccent}>Impian Anda</span> Bersama Kami
          </h1>
          <p className={`${styles.subheading} animate-fadeInUp delay-3`}>
            COBABANTU hadir dengan solusi teknologi lengkap — dari website, dashboard interaktif, AI &amp; otomatisasi, hingga analisis data.
          </p>
          <div className={`${styles.actions} animate-fadeInUp delay-4`}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" id="hero-wa-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Mulai Konsultasi Gratis
            </a>
            <button onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-outline-white btn-lg" id="hero-layanan-btn">
              Lihat Layanan <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div className={`${styles.stats} animate-fadeInUp delay-5`}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Showcase Scene */}
        <div className={`${styles.visual} animate-fadeInRight delay-3`} aria-hidden>
          <div className={styles.scene}>
            <div className={styles.glow} />

            {/* === SHOWCASE CARDS: LEFT === */}
            <div className={`${styles.sc} ${styles.scL1}`}>
              <div className={styles.scTop}><Globe size={11} color="#34D399"/><span>Web & Mobile</span></div>
              <div className={styles.scBody}>
                <div className={styles.scPreview}>
                  <div className={styles.scPrevHero}/>
                  <div className={styles.scPrevLines}>
                    <div className={styles.scPrevLine} style={{width:"80%"}}/><div className={styles.scPrevLine} style={{width:"60%"}}/><div className={styles.scPrevLine} style={{width:"70%"}}/>
                  </div>
                  <div className={styles.scPrevBtn}/>
                </div>
                <div className={styles.scTitle}>Website UMKM</div>
                <div className={styles.scSub}>Toko Online Modern</div>
              </div>
            </div>

            <div className={`${styles.sc} ${styles.scL2}`}>
              <div className={styles.scTop}><LayoutDashboard size={11} color="#34D399"/><span>Dashboard</span></div>
              <div className={styles.scBody}>
                <div className={styles.scMiniChart}>
                  {[50,70,45,80,60,90].map((h,i)=><div key={i} className={styles.scMiniBar} style={{height:`${h}%`}}/>)}
                </div>
                <div className={styles.scRow}>
                  <div><div className={styles.scBig}>48M</div><div className={styles.scSmall}>Revenue</div></div>
                  <div><div className={styles.scBig} style={{color:"#34D399"}}>↑18%</div><div className={styles.scSmall}>Growth</div></div>
                </div>
                <div className={styles.scTitle}>Dashboard KPI</div>
              </div>
            </div>

            {/* === LAPTOP === */}
            <div className={styles.laptopGroup}>
              <div className={styles.laptopScreen}>
                <div className={styles.chrome}>
                  <span className={styles.dot} style={{background:"#ff5f57"}}/><span className={styles.dot} style={{background:"#febc2e"}}/><span className={styles.dot} style={{background:"#28c840"}}/>
                  <div className={styles.urlBar}>cobabantu.com</div>
                </div>
                <div className={styles.dashLayout}>
                  <div className={styles.sidebar}>
                    {sideIcons.map((Icon,i)=>(
                      <div key={i} className={`${styles.sideItem} ${i===activeSlide?styles.sideActive:""}`}><Icon size={10}/></div>
                    ))}
                  </div>
                  <div className={styles.mainArea}>
                    <div className={styles.dashHead}>
                      <div className={styles.dashIconWrap} style={{background:`${slide.color}22`,color:slide.color}}><slide.Icon size={11}/></div>
                      <span className={styles.dashTitle}>{slide.title}</span>
                      <span className={styles.liveBadge}>● LIVE</span>
                    </div>
                    <div className={styles.chartArea}>
                      {slide.bars.map((h,i)=>(
                        <div key={i} className={styles.barWrap}>
                          <div key={`${slide.id}-${i}`} className={styles.bar} style={{height:`${h}%`,background:`linear-gradient(180deg,${slide.color},${slide.color}55)`}}/>
                        </div>
                      ))}
                    </div>
                    <div className={styles.metricsRow}>
                      {slide.metrics.map((m,i)=>(
                        <div key={i} className={styles.metricBox}>
                          <span className={styles.metricVal} style={{color:m.up?"#34D399":"#f87171"}}>{m.up?"↑":"↓"} {m.v}</span>
                          <span className={styles.metricLbl}>{m.l}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.slideDots}>
                      {screenSlides.map((_,i)=><span key={i} className={`${styles.slideDot} ${i===activeSlide?styles.dotActive:""}`}/>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.laptopHinge}/>
              <div className={styles.laptopBase}><div className={styles.trackpad}/></div>
            </div>

            {/* === TOP DECORATION === */}
            <div className={styles.topDeco}>
              <Tag size={13} color="#34D399" />
              <span className={styles.decoText}>Harga Bersahabat</span>
              <span className={styles.decoDivider}>•</span>
              <span className={styles.decoSub}>Kualitas Premium</span>
            </div>

            {/* === BOTTOM DECORATION === */}
            <div className={styles.botDeco}>
              <div className={styles.botChip}><Globe size={11} color="#34D399" /><span>Web</span></div>
              <div className={styles.botChip}><LayoutDashboard size={11} color="#34D399" /><span>Dashboard</span></div>
              <div className={styles.botChip}><Bot size={11} color="#34D399" /><span>AI</span></div>
              <div className={styles.botChip}><LineChart size={11} color="#34D399" /><span>Analytics</span></div>
            </div>

            {/* === SHOWCASE CARDS: RIGHT === */}
            <div className={`${styles.sc} ${styles.scR1}`}>
              <div className={styles.scTop}><Bot size={11} color="#34D399"/><span>AI Chatbot</span></div>
              <div className={styles.scBody}>
                <div className={styles.scChat}>
                  <div className={styles.scMsg}>Halo! Ada yang bisa kami bantu? 👋</div>
                  <div className={`${styles.scMsg} ${styles.scMsgR}`}>Butuh website bisnis saya</div>
                  <div className={styles.scMsg}>Siap! Konsultasi gratis 😊</div>
                </div>
                <div className={styles.scTitle}>AI & Otomatisasi</div>
              </div>
            </div>

            <div className={`${styles.sc} ${styles.scR2}`}>
              <div className={styles.scTop}><LineChart size={11} color="#34D399"/><span>Analitik</span></div>
              <div className={styles.scBody}>
                <div className={styles.scMiniChart}>
                  {[45,65,80,55,90,70].map((h,i)=><div key={i} className={styles.scMiniBar} style={{height:`${h}%`}}/>)}
                </div>
                <div className={styles.scRow}>
                  <div><div className={styles.scBig}>340</div><div className={styles.scSmall}>Insights</div></div>
                  <div><div className={styles.scBig} style={{color:"#34D399"}}>↑67%</div><div className={styles.scSmall}>Growth</div></div>
                </div>
                <div className={styles.scTitle}>Analisis Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden>
        <div className={styles.scrollMouse}><div className={styles.scrollDot}/></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
