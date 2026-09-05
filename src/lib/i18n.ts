/**
 * i18n — English + Indonesian content for the VIVAME Design site.
 * A client-side dictionary: the language toggle swaps which dictionary the
 * UI renders from. (SEO metadata stays English — static export, no locale routes.)
 */

export type Lang = "en" | "id";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  scope: string[];
  art: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  short: string;
  description: string;
  art: number;
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface Dictionary {
  nav: NavItem[];
  ui: Record<string, string>;
  services: Service[];
  process: ProcessStep[];
  why: WhyItem[];
}

const en: Dictionary = {
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ],
  ui: {
    "cta.startProject": "Start a project",

    "hero.eyebrow": "Interior Design Studio",
    "hero.title.1": "Designing Spaces,",
    "hero.title.2": "Creating",
    "hero.title.em": "Experiences.",
    "hero.lead":
      "VIVAME Design transforms ideas into beautiful, functional, and timeless interior spaces.",
    "hero.viewProjects": "View Our Projects",
    "hero.startProject": "Start Your Project",
    "hero.caption": "Pantry · Dining · Living",
    "hero.captionTag": "3D Visualization",

    "about.eyebrow": "About VIVAME Design",
    "about.title.1": "A studio for considered,",
    "about.title.em": "timeless",
    "about.title.2": "interiors.",
    "about.p1":
      "VIVAME Design is an interior design, architecture, and 3D visualization studio. We believe great interiors are not decorated — they are designed: around the people who live in them, the light that moves through them, and the life that happens within them.",
    "about.p2":
      "From residential homes to commercial spaces, we carry every project from first concept to final render and built result — balancing function with a quiet, enduring beauty.",
    "about.residential": "Residential",
    "about.commercial": "Commercial",
    "about.viz": "3D Visualization",
    "about.more": "More about the studio",

    "services.eyebrow": "Services",
    "services.title.1": "What we",
    "services.title.em": "do",
    "services.explore": "Explore",

    "process.eyebrow": "How we work",
    "process.title.1": "A clear,",
    "process.title.em": "considered",
    "process.title.2": "process",
    "process.lead":
      "From first conversation to final handover — seven stages that keep you informed and the outcome faithful to the vision.",
    "process.more": "Explore the full process",
    "process.step": "Step",

    "why.eyebrow": "Why VIVAME Design",
    "why.title.1": "A partner for the",
    "why.title.em": "whole",
    "why.title.2": "journey",

    "featured.eyebrow": "Featured",
    "featured.title.1": "Signature",
    "featured.title.em": "projects",
    "featured.viewAll": "View all projects",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title.1": "Selected",
    "portfolio.title.em": "work",
    "portfolio.viewAll": "View all projects",
    "portfolio.lead":
      "A curated look at the spaces VIVAME Design has shaped — residential interiors, commercial environments, and the renders that bring each idea to life.",
    "portfolio.note":
      "Select projects feature real photography — others are illustrative previews",
    "portfolio.filter.all": "All",
    "portfolio.filter.residential": "Residential",
    "portfolio.filter.commercial": "Commercial",
    "portfolio.filter.aria": "Filter projects by category",

    "card.viewProject": "View project",

    "cta.eyebrow": "Start your project",
    "cta.title": "Let's create your space.",
    "cta.lead":
      "Tell us about your project and we'll take it from first conversation to a space that feels unmistakably yours.",
    "cta.whatsapp": "WhatsApp us",

    "footer.explore": "Explore",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.whatsapp": "WhatsApp",
    "footer.maps": "View on Google Maps",
    "footer.about":
      "Interior design, architecture, and 3D interior visualization — beautiful, functional, and timeless spaces.",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Interior Design · Architecture · 3D Visualization",

    "contact.eyebrow": "Contact",
    "contact.title.1": "Start a",
    "contact.title.em": "project",
    "contact.lead":
      "Tell us about your space and how you'd like to reach you — we'll take it from there.",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsapp.primary": "primary",
    "contact.whatsapp.secondary": "secondary",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.studio": "Studio",
    "contact.follow": "Follow",
    "contact.maps": "View on Google Maps",

    "form.name": "Name",
    "form.name.placeholder": "Your name",
    "form.contact": "Phone or email",
    "form.contact.placeholder": "How can we reach you?",
    "form.service": "Service",
    "form.service.general": "General inquiry",
    "form.message": "Your project",
    "form.message.placeholder":
      "Tell us about your space, timeline, and what you're hoping to achieve.",
    "form.submit": "Send via WhatsApp",
    "form.note":
      "Submitting opens WhatsApp with your message pre-filled — nothing is stored on this site.",
    "form.err.name": "Please enter your name.",
    "form.err.contact": "Please add a phone number or email.",
    "form.err.message": "Please tell us a little about your project.",
    "form.err.messageShort": "A little more detail helps us respond better.",
    "form.greeting": "Hello VIVAME Design,",
    "form.nameLabel": "Name:",
    "form.contactLabel": "Contact:",
    "form.serviceLabel": "Service:",

    "project.category": "Category",
    "project.location": "Location",
    "project.year": "Year",
    "project.status": "Status",
    "project.client": "Client",
    "project.cost": "Cost",
    "project.scope": "Scope",
    "project.concept": "Design concept",
    "project.gallery": "Gallery",
    "project.more": "More projects",
    "project.cta.title": "Have a project in mind?",
    "project.cta.start": "Start your project",
    "project.cta.whatsapp": "WhatsApp us",

    "share.label": "Share",
    "share.copy": "Copy link",
    "share.copied": "Link copied",
    "share.device": "Share via device",

    "aboutpage.eyebrow": "The studio",
    "aboutpage.title.1": "Design with",
    "aboutpage.title.em": "intention",
    "aboutpage.lead":
      "VIVAME Design is an interior design, architecture, and 3D visualization studio. We believe a space should be more than a composition of finishes — it should respond to the people who live in it, the light that moves through it, and the way it is used every day.",
    "aboutpage.approach": "Our approach",
    "aboutpage.a1":
      "Every project begins with listening — then careful spatial thinking, honest materiality, and a clear visual language. We work iteratively, resolving design decisions early so the final result feels inevitable rather than assembled.",
    "aboutpage.a2":
      "Concept and space planning come first; 3D visualization brings the idea to life so nothing is left to imagination. From the first sketch to the final render, the goal is the same: a space you can already feel at home in.",
    "aboutpage.values": "What we value",
    "aboutpage.note": "Studio story, team, and photography in preparation",

    "aboutpage.founder.eyebrow": "Founder",
    "aboutpage.founder.name": "Liska Yulianti",
    "aboutpage.founder.detail": "Est. 2015 · Depok, Indonesia",
    "aboutpage.founder.alt": "Liska Yulianti, founder of VIVAME Design",
    "aboutpage.founder.bio":
      "Liska Yulianti founded VIVAME Design, an interior design studio and interior workshop established in 2015 and based in Depok, Indonesia. The studio designs and builds residential and commercial interiors — hotels, villas, apartments, government buildings, offices, restaurants, and cafés.",

    "servicespage.title.1": "What we",
    "servicespage.title.em": "do",
    "servicespage.lead":
      "Five disciplines, one intention: spaces that are beautiful, functional, and precisely resolved — communicated clearly at every stage of the project.",

    "processpage.eyebrow": "Process",
    "processpage.title.1": "How we",
    "processpage.title.em": "work",
    "processpage.lead":
      "Seven considered stages carry every project from first conversation to final handover — keeping you informed and the outcome faithful to the vision.",

    "notfound.title": "Page not found",
    "notfound.lead": "The page you're looking for doesn't exist or has moved.",
    "notfound.home": "Back to home",
  },
  services: [
    {
      slug: "interior-design",
      title: "Interior Design",
      short: "Complete interiors, resolved end to end.",
      description:
        "Full interior design — from spatial planning and materiality to furniture, lighting, and finishing details. Every decision is made so the result feels considered rather than decorated.",
      scope: ["Concept & mood", "Space planning", "Material selection", "Furniture & lighting"],
      art: 0,
    },
    {
      slug: "3d-visualization",
      title: "3D Interior Visualization",
      short: "See the finished space before it exists.",
      description:
        "Photorealistic 3D renders and walkthroughs that communicate a design with total clarity — for client approvals, marketing, and confident decision-making long before construction begins.",
      scope: ["Photorealistic renders", "360° walkthroughs", "Lighting studies", "Revision rounds"],
      art: 1,
    },
    {
      slug: "residential-design",
      title: "Residential Design",
      short: "Homes shaped around how you live.",
      description:
        "Houses, apartments, and private rooms designed around real daily life — warm, functional, and personal, balancing aesthetics with the way a family actually uses its space.",
      scope: ["Whole homes", "Kitchens & baths", "Bedrooms & living", "Custom built-ins"],
      art: 2,
    },
    {
      slug: "commercial-design",
      title: "Commercial Design",
      short: "Spaces that strengthen a brand.",
      description:
        "Cafés, offices, retail, and hospitality environments that pair operational practicality with a distinct atmosphere — so the space itself becomes part of the brand experience.",
      scope: ["Cafés & restaurants", "Offices & studios", "Retail spaces", "Brand environments"],
      art: 3,
    },
    {
      slug: "custom-design",
      title: "Custom Design",
      short: "Bespoke pieces, tailored to you.",
      description:
        "Custom furniture, millwork, and detailing designed and documented for fabrication — one-of-a-kind elements that give a space its signature and make the most of every dimension.",
      scope: ["Custom furniture", "Millwork & joinery", "Detailing & drawings", "Fabrication support"],
      art: 4,
    },
  ],
  process: [
    {
      number: "01",
      title: "Consultation",
      short: "Consultation",
      description:
        "We begin with a conversation — your needs, lifestyle, preferences, and aspirations for the space. Together we define the brief, scope, and goals that will guide the entire project.",
      art: 0,
    },
    {
      number: "02",
      title: "Site & Requirement Analysis",
      short: "Site & Requirement",
      description:
        "We study the existing space — its dimensions, conditions, and constraints — and translate them into clear functional requirements that the design must answer.",
      art: 1,
    },
    {
      number: "03",
      title: "Concept Development",
      short: "Concept",
      description:
        "The design direction takes shape: mood, spatial concept, materials, color, and furniture — a cohesive visual identity that is uniquely yours.",
      art: 2,
    },
    {
      number: "04",
      title: "3D Visualization",
      short: "3D Visualization",
      description:
        "The approved concept becomes photorealistic 3D visualizations, so you can clearly imagine the finished space — and refine it — long before anything is built.",
      art: 3,
    },
    {
      number: "05",
      title: "Design Review & Revision",
      short: "Review & Revision",
      description:
        "We present the design, listen carefully to your feedback, and refine it — adjusting details until every element feels exactly right.",
      art: 4,
    },
    {
      number: "06",
      title: "Final Design",
      short: "Final Design",
      description:
        "Approved ideas are resolved into final drawings, details, materials, and specifications — a complete, build-ready design package.",
      art: 5,
    },
    {
      number: "07",
      title: "Project Completion",
      short: "Completion",
      description:
        "We deliver the final design package and support the handover, ensuring the project is ready for implementation and the result matches the vision.",
      art: 6,
    },
  ],
  why: [
    {
      title: "Thoughtful design",
      description:
        "Every layout, material, and detail is chosen with a reason — nothing decorative for its own sake.",
    },
    {
      title: "Personalized approach",
      description:
        "No templates. Each project begins with your life, your taste, and your space — then grows from there.",
    },
    {
      title: "Functional spaces",
      description:
        "Beauty that works: circulation, storage, and daily routine are designed in, not left as an afterthought.",
    },
    {
      title: "Visual consistency",
      description:
        "One clear language runs through concept, material, and detail — so the result feels inevitable, not assembled.",
    },
    {
      title: "Attention to detail",
      description:
        "From a reveal's width to the fall of a fabric, the small decisions are what make a space feel premium.",
    },
    {
      title: "Professional execution",
      description:
        "Clear documentation and careful coordination keep the built result faithful to the vision you approved.",
    },
  ],
};

const id: Dictionary = {
  nav: [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/services", label: "Layanan" },
    { href: "/portfolio", label: "Portofolio" },
    { href: "/process", label: "Proses" },
    { href: "/contact", label: "Kontak" },
  ],
  ui: {
    "cta.startProject": "Mulai proyek",

    "hero.eyebrow": "Studio Desain Interior",
    "hero.title.1": "Mendesain Ruang,",
    "hero.title.2": "Menciptakan",
    "hero.title.em": "Pengalaman.",
    "hero.lead":
      "VIVAME Design mengubah ide menjadi ruang interior yang indah, fungsional, dan abadi.",
    "hero.viewProjects": "Lihat Proyek Kami",
    "hero.startProject": "Mulai Proyek Anda",
    "hero.caption": "Pantry · Ruang Makan · Ruang Keluarga",
    "hero.captionTag": "Visualisasi 3D",

    "about.eyebrow": "Tentang VIVAME Design",
    "about.title.1": "Studio untuk interior yang",
    "about.title.em": "terpikirkan",
    "about.title.2": "dan abadi.",
    "about.p1":
      "VIVAME Design adalah studio desain interior, arsitektur, dan visualisasi 3D. Kami percaya interior yang hebat tidak sekadar didekorasi — ia dirancang: mengikuti orang yang tinggal di dalamnya, cahaya yang mengalir melaluinya, dan kehidupan yang terjadi di dalamnya.",
    "about.p2":
      "Dari rumah residensial hingga ruang komersial, kami membawa setiap proyek dari konsep awal hingga render akhir dan hasil terbangun — menyeimbangkan fungsi dengan keindahan yang tenang dan bertahan lama.",
    "about.residential": "Residensial",
    "about.commercial": "Komersial",
    "about.viz": "Visualisasi 3D",
    "about.more": "Selengkapnya tentang studio",

    "services.eyebrow": "Layanan",
    "services.title.1": "Apa yang kami",
    "services.title.em": "lakukan",
    "services.explore": "Jelajahi",

    "process.eyebrow": "Cara kami bekerja",
    "process.title.1": "Proses yang",
    "process.title.em": "jelas",
    "process.title.2": "dan terpikirkan",
    "process.lead":
      "Dari percakapan pertama hingga serah terima akhir — tujuh tahap yang membuat Anda selalu terinformasi dan hasil akhirnya setia pada visi.",
    "process.more": "Jelajahi proses lengkap",
    "process.step": "Tahap",

    "why.eyebrow": "Mengapa VIVAME Design",
    "why.title.1": "Mitra untuk",
    "why.title.em": "seluruh",
    "why.title.2": "perjalanan",

    "featured.eyebrow": "Unggulan",
    "featured.title.1": "Proyek",
    "featured.title.em": "unggulan",
    "featured.viewAll": "Lihat semua proyek",

    "portfolio.eyebrow": "Portofolio",
    "portfolio.title.1": "Karya",
    "portfolio.title.em": "terpilih",
    "portfolio.viewAll": "Lihat semua proyek",
    "portfolio.lead":
      "Sekilas tentang ruang-ruang yang telah dibentuk VIVAME Design — interior residensial, lingkungan komersial, dan render yang menghidupkan setiap ide.",
    "portfolio.note":
      "Proyek tertentu menampilkan fotografi asli — lainnya adalah pratinjau ilustratif",
    "portfolio.filter.all": "Semua",
    "portfolio.filter.residential": "Residensial",
    "portfolio.filter.commercial": "Komersial",
    "portfolio.filter.aria": "Filter proyek berdasarkan kategori",

    "card.viewProject": "Lihat proyek",

    "cta.eyebrow": "Mulai proyek Anda",
    "cta.title": "Mari ciptakan ruang Anda.",
    "cta.lead":
      "Ceritakan proyek Anda dan kami akan membawanya dari percakapan pertama hingga ruang yang terasa sepenuhnya milik Anda.",
    "cta.whatsapp": "Hubungi via WhatsApp",

    "footer.explore": "Jelajahi",
    "footer.services": "Layanan",
    "footer.contact": "Kontak",
    "footer.whatsapp": "WhatsApp",
    "footer.maps": "Lihat di Google Maps",
    "footer.about":
      "Desain interior, arsitektur, dan visualisasi interior 3D — ruang yang indah, fungsional, dan abadi.",
    "footer.rights": "Hak cipta dilindungi.",
    "footer.tagline": "Desain Interior · Arsitektur · Visualisasi 3D",

    "contact.eyebrow": "Kontak",
    "contact.title.1": "Mulai sebuah",
    "contact.title.em": "proyek",
    "contact.lead":
      "Ceritakan tentang ruang Anda dan cara menghubungi Anda — kami akan menindaklanjutinya.",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsapp.primary": "utama",
    "contact.whatsapp.secondary": "sekunder",
    "contact.phone": "Telepon",
    "contact.email": "Email",
    "contact.studio": "Studio",
    "contact.follow": "Ikuti",
    "contact.maps": "Lihat di Google Maps",

    "form.name": "Nama",
    "form.name.placeholder": "Nama Anda",
    "form.contact": "Telepon atau email",
    "form.contact.placeholder": "Bagaimana kami menghubungi Anda?",
    "form.service": "Layanan",
    "form.service.general": "Pertanyaan umum",
    "form.message": "Proyek Anda",
    "form.message.placeholder":
      "Ceritakan tentang ruang, tenggat, dan apa yang ingin Anda capai.",
    "form.submit": "Kirim via WhatsApp",
    "form.note":
      "Mengirim akan membuka WhatsApp dengan pesan Anda yang sudah terisi — tidak ada yang disimpan di situs ini.",
    "form.err.name": "Mohon masukkan nama Anda.",
    "form.err.contact": "Mohon tambahkan nomor telepon atau email.",
    "form.err.message": "Mohon ceritakan sedikit tentang proyek Anda.",
    "form.err.messageShort": "Sedikit detail lagi membantu kami merespons lebih baik.",
    "form.greeting": "Halo VIVAME Design,",
    "form.nameLabel": "Nama:",
    "form.contactLabel": "Kontak:",
    "form.serviceLabel": "Layanan:",

    "project.category": "Kategori",
    "project.location": "Lokasi",
    "project.year": "Tahun",
    "project.status": "Status",
    "project.client": "Klien",
    "project.cost": "Biaya",
    "project.scope": "Lingkup",
    "project.concept": "Konsep desain",
    "project.gallery": "Galeri",
    "project.more": "Proyek lainnya",
    "project.cta.title": "Punya proyek dalam pikiran?",
    "project.cta.start": "Mulai proyek Anda",
    "project.cta.whatsapp": "Hubungi via WhatsApp",

    "share.label": "Bagikan",
    "share.copy": "Salin tautan",
    "share.copied": "Tautan disalin",
    "share.device": "Bagikan via perangkat",

    "aboutpage.eyebrow": "Studio",
    "aboutpage.title.1": "Desain dengan",
    "aboutpage.title.em": "niat",
    "aboutpage.lead":
      "VIVAME Design adalah studio desain interior, arsitektur, dan visualisasi 3D. Kami percaya sebuah ruang harus lebih dari sekadar komposisi finishing — ia harus menjawab orang yang tinggal di dalamnya, cahaya yang melaluinya, dan cara ia digunakan setiap hari.",
    "aboutpage.approach": "Pendekatan kami",
    "aboutpage.a1":
      "Setiap proyek dimulai dengan mendengarkan — lalu pemikiran spasial yang cermat, materialitas yang jujur, dan bahasa visual yang jelas. Kami bekerja iteratif, menyelesaikan keputusan desain sejak awal agar hasil akhir terasa wajar, bukan dirangkai.",
    "aboutpage.a2":
      "Konsep dan perencanaan ruang didahulukan; visualisasi 3D menghidupkan ide sehingga tidak ada yang tersisa pada imajinasi. Dari sketsa pertama hingga render akhir, tujuannya sama: ruang yang sudah terasa seperti rumah.",
    "aboutpage.values": "Apa yang kami hargai",
    "aboutpage.note": "Kisah studio, tim, dan fotografi sedang disiapkan",

    "aboutpage.founder.eyebrow": "Pendiri",
    "aboutpage.founder.name": "Liska Yulianti",
    "aboutpage.founder.detail": "Sejak 2015 · Depok, Indonesia",
    "aboutpage.founder.alt": "Liska Yulianti, pendiri VIVAME Design",
    "aboutpage.founder.bio":
      "Liska Yulianti mendirikan VIVAME Design, studio desain interior dan workshop interior yang berdiri sejak 2015 dan berbasis di Depok, Indonesia. Studio ini merancang dan membangun interior hunian dan komersial — hotel, vila, apartemen, gedung pemerintahan, kantor, restoran, dan kafe.",

    "servicespage.title.1": "Apa yang kami",
    "servicespage.title.em": "lakukan",
    "servicespage.lead":
      "Lima disiplin, satu niat: ruang yang indah, fungsional, dan terselesaikan dengan presisi — dikomunikasikan dengan jelas di setiap tahap proyek.",

    "processpage.eyebrow": "Proses",
    "processpage.title.1": "Cara kami",
    "processpage.title.em": "bekerja",
    "processpage.lead":
      "Tujuh tahap yang terpikirkan membawa setiap proyek dari percakapan pertama hingga serah terima akhir — membuat Anda selalu terinformasi dan hasil akhirnya setia pada visi.",

    "notfound.title": "Halaman tidak ditemukan",
    "notfound.lead": "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    "notfound.home": "Kembali ke beranda",
  },
  services: [
    {
      slug: "interior-design",
      title: "Desain Interior",
      short: "Interior lengkap, diselesaikan dari ujung ke ujung.",
      description:
        "Desain interior penuh — dari perencanaan ruang dan materialitas hingga furnitur, pencahayaan, dan detail finishing. Setiap keputusan dibuat agar hasilnya terasa terpikirkan, bukan sekadar didekorasi.",
      scope: ["Konsep & suasana", "Perencanaan ruang", "Pemilihan material", "Furnitur & pencahayaan"],
      art: 0,
    },
    {
      slug: "3d-visualization",
      title: "Visualisasi Interior 3D",
      short: "Lihat ruang jadi sebelum ia terwujud.",
      description:
        "Render 3D fotorealistis dan walkthrough yang mengomunikasikan desain dengan sangat jelas — untuk persetujuan klien, pemasaran, dan pengambilan keputusan yang percaya diri jauh sebelum konstruksi dimulai.",
      scope: ["Render fotorealistis", "Walkthrough 360°", "Studi pencahayaan", "Ronde revisi"],
      art: 1,
    },
    {
      slug: "residential-design",
      title: "Desain Residensial",
      short: "Rumah yang dibentuk mengikuti cara Anda hidup.",
      description:
        "Rumah, apartemen, dan ruang pribadi yang dirancang mengikuti kehidupan sehari-hari — hangat, fungsional, dan personal, menyeimbangkan estetika dengan cara sebuah keluarga sungguh menggunakan ruangnya.",
      scope: ["Rumah utuh", "Dapur & kamar mandi", "Kamar tidur & ruang keluarga", "Built-in kustom"],
      art: 2,
    },
    {
      slug: "commercial-design",
      title: "Desain Komersial",
      short: "Ruang yang memperkuat sebuah merek.",
      description:
        "Kafe, kantor, ritel, dan lingkungan hospitality yang memadukan kepraktisan operasional dengan atmosfer khas — sehingga ruang itu sendiri menjadi bagian dari pengalaman merek.",
      scope: ["Kafe & restoran", "Kantor & studio", "Ruang ritel", "Lingkungan merek"],
      art: 3,
    },
    {
      slug: "custom-design",
      title: "Desain Kustom",
      short: "Karya khusus, disesuaikan untuk Anda.",
      description:
        "Furnitur kustom, millwork, dan detailing yang dirancang serta didokumentasikan untuk fabrikasi — elemen unik yang memberi ciri khas pada ruang dan memaksimalkan setiap dimensi.",
      scope: ["Furnitur kustom", "Millwork & joinery", "Detailing & gambar", "Dukungan fabrikasi"],
      art: 4,
    },
  ],
  process: [
    {
      number: "01",
      title: "Konsultasi",
      short: "Konsultasi",
      description:
        "Kami memulai dengan percakapan — kebutuhan, gaya hidup, preferensi, dan aspirasi Anda untuk ruang tersebut. Bersama kita menetapkan brief, lingkup, dan tujuan yang akan memandu seluruh proyek.",
      art: 0,
    },
    {
      number: "02",
      title: "Analisis Situs & Kebutuhan",
      short: "Situs & Kebutuhan",
      description:
        "Kami mempelajari ruang yang ada — dimensi, kondisi, dan kendalanya — lalu menerjemahkannya menjadi persyaratan fungsional yang jelas yang harus dijawab oleh desain.",
      art: 1,
    },
    {
      number: "03",
      title: "Pengembangan Konsep",
      short: "Konsep",
      description:
        "Arah desain mulai terbentuk: suasana, konsep spasial, material, warna, dan furnitur — identitas visual yang kohesif dan unik untuk Anda.",
      art: 2,
    },
    {
      number: "04",
      title: "Visualisasi 3D",
      short: "Visualisasi 3D",
      description:
        "Konsep yang disetujui menjadi visualisasi 3D fotorealistis, sehingga Anda dapat membayangkan ruang jadinya dengan jelas — dan menyempurnakannya — jauh sebelum apa pun dibangun.",
      art: 3,
    },
    {
      number: "05",
      title: "Review & Revisi Desain",
      short: "Review & Revisi",
      description:
        "Kami mempresentasikan desain, mendengarkan umpan balik Anda dengan saksama, dan menyempurnakannya — menyesuaikan detail hingga setiap elemen terasa tepat.",
      art: 4,
    },
    {
      number: "06",
      title: "Desain Final",
      short: "Desain Final",
      description:
        "Ide yang disetujui diselesaikan menjadi gambar final, detail, material, dan spesifikasi — paket desain lengkap yang siap dibangun.",
      art: 5,
    },
    {
      number: "07",
      title: "Penyelesaian Proyek",
      short: "Penyelesaian",
      description:
        "Kami menyerahkan paket desain final dan mendukung serah terima, memastikan proyek siap untuk implementasi dan hasilnya sesuai dengan visi.",
      art: 6,
    },
  ],
  why: [
    {
      title: "Desain yang terpikirkan",
      description:
        "Setiap tata letak, material, dan detail dipilih dengan alasan — tidak ada yang dekoratif semata.",
    },
    {
      title: "Pendekatan personal",
      description:
        "Tanpa templat. Setiap proyek dimulai dari hidup, selera, dan ruang Anda — lalu tumbuh dari sana.",
    },
    {
      title: "Ruang fungsional",
      description:
        "Keindahan yang berfungsi: sirkulasi, penyimpanan, dan rutinitas harian dirancang di dalamnya, bukan menjadi pikiran belakangan.",
    },
    {
      title: "Konsistensi visual",
      description:
        "Satu bahasa yang jelas mengalir melalui konsep, material, dan detail — sehingga hasilnya terasa wajar, bukan dirangkai.",
    },
    {
      title: "Perhatian pada detail",
      description:
        "Dari lebar sebuah reveal hingga jatuhnya kain, keputusan-keputusan kecil itulah yang membuat ruang terasa premium.",
    },
    {
      title: "Eksekusi profesional",
      description:
        "Dokumentasi yang jelas dan koordinasi yang cermat menjaga hasil terbangun setia pada visi yang Anda setujui.",
    },
  ],
};

export const dictionaries: Record<Lang, Dictionary> = { en, id };

export const DEFAULT_LANG: Lang = "en";
