// Data statis untuk website COBABANTU.COM

export const WA_NUMBER = "6285337342258";
export const WA_MESSAGE = encodeURIComponent(
  "Halo COBABANTU, saya ingin konsultasi terkait jasa yang ditawarkan."
);
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const services = [
  {
    id: "website",
    icon: "🌐",
    title: "Website & Aplikasi Mobile",
    shortTitle: "Web & Mobile",
    color: "#34D399",
    description:
      "Kami membangun website dan aplikasi mobile profesional yang dirancang khusus untuk kebutuhan bisnis Anda.",
    items: [
      "Website UMKM & Bisnis",
      "Toko Online",
      "Website Profil & Portofolio",
      "Landing Page",
      "Website Custom",
    ],
  },
  {
    id: "dashboard",
    icon: "📊",
    title: "Dashboard & Sistem",
    shortTitle: "Dashboard",
    color: "#10B981",
    description:
      "Kelola bisnis Anda dengan sistem dashboard interaktif yang memudahkan pengambilan keputusan berbasis data.",
    items: [
      "Dashboard Admin",
      "Dashboard Data Interaktif",
      "Sistem Monitoring",
      "Visualisasi Data Otomatis",
      "Sistem Manajemen",
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI & Otomatisasi",
    shortTitle: "AI",
    color: "#059669",
    description:
      "Tingkatkan efisiensi bisnis dengan solusi kecerdasan buatan dan otomatisasi proses yang cerdas.",
    items: [
      "Chatbot Sederhana",
      "Balasan Otomatis",
      "Sistem AI Sederhana",
    ],
  },
  {
    id: "data",
    icon: "📈",
    title: "Analisis Data",
    shortTitle: "Analitik",
    color: "#047857",
    description:
      "Ubah data mentah menjadi insight berharga yang mendorong pertumbuhan dan strategi bisnis Anda.",
    items: [
      "Pengolahan Data",
      "Grafik & Laporan Data",
      "Analisis & Insight Bisnis",
      "Prediksi Data",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Tenda Lambaroe",
    category: "Website & Mobile",
    description: "Website e-commerce profesional untuk penjualan tenda terpal dan jaring pengaman berkualitas tinggi.",
    image: "/images/tendalambaroe.jpeg",
    link: "https://tendalambaroe.com",
    color: "#064E3B",
    tags: ["Next.js", "E-Commerce", "Responsive"],
  },
  {
    id: 2,
    title: "Wantutri AI",
    category: "AI & Otomatisasi",
    description: "Platform AI yang secara otomatis membuat konten video promosi bisnis yang menarik dan profesional.",
    image: "/images/wantutri.jpeg",
    link: null,
    color: "#059669",
    tags: ["AI", "Video Generation", "Automation"],
  },
  {
    id: 3,
    title: "Klasifikasi Penyakit Tanaman",
    category: "Analisis Data",
    description: "Model machine learning ringan dan akurat untuk mendeteksi serta mengklasifikasi penyakit pada tanaman.",
    image: "/images/plantdisease.jpeg",
    link: null,
    color: "#047857",
    tags: ["Machine Learning", "Computer Vision", "Python"],
  },
];

export const whyUs = [
  {
    icon: "⚡",
    title: "Pengerjaan Cepat",
    description:
      "Kami berkomitmen menyelesaikan proyek tepat waktu tanpa mengorbankan kualitas.",
  },
  {
    icon: "💡",
    title: "Solusi Inovatif",
    description:
      "Menggunakan teknologi terkini untuk memberikan solusi digital yang relevan dan efektif.",
  },
  {
    icon: "🤝",
    title: "Konsultasi Gratis",
    description:
      "Dapatkan konsultasi awal gratis untuk mendiskusikan kebutuhan digital bisnis Anda.",
  },
  {
    icon: "🛡️",
    title: "Support Berkelanjutan",
    description:
      "Kami tidak hanya membangun, tapi juga mendampingi Anda setelah proyek selesai.",
  },
  {
    icon: "💰",
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Harga jelas dan sesuai dengan kebutuhan anggaran Anda.",
  },
  {
    icon: "🎯",
    title: "Fokus pada Hasil",
    description:
      "Setiap solusi kami dirancang untuk memberikan hasil nyata dan terukur bagi bisnis Anda.",
  },
];

export const stats = [
  { value: "20+", label: "Proyek Selesai" },
  { value: "99%", label: "Klien Puas" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "24/7", label: "Support Aktif" },
];

export const footerLinks = {
  services: [
    "Website & Aplikasi Mobile",
    "Dashboard & Sistem",
    "AI & Otomatisasi",
    "Analisis Data",
  ],
  contact: [
    { label: "WhatsApp", value: "+62 853-3734-2258", href: WA_LINK },
    { label: "Instagram", value: "@sadinal_mufti", href: "https://www.instagram.com/sadinal_mufti/" },
    { label: "Email", value: "muftisadinal@gmail.com", href: "mailto:muftisadinal@gmail.com" },
    { label: "LinkedIn", value: "sadinal-mufti", href: "https://www.linkedin.com/in/sadinal-mufti" },
  ],
};
