const texts = {
  en: {
    nav: ["About", "Skills", "Experience", "Projects", "Contact"],
    aboutTitle: "About Me",
    aboutText: "Hello! I'm Roohan Kamalian, a Python developer passionate about building Telegram bots, automation tools, and web applications.",
    cvBtn: "📄 Download CV",
    skillsTitle: "Skills",
    skillsList: [
      "🐍 Python (FastAPI, Telethon, Pyrogram)",
      "🤖 Telegram Bot Development",
      "🌐 Web Development (HTML, CSS, JS)",
      "📊 Trading Bots (MetaTrader 5, Backtesting)"
    ],
    expTitle: "Experience",
    expText: `
      <p><strong>2023 - Present:</strong> Building Telegram automation tools and trading strategy backtesting systems.</p>
      <p><strong>2022 - 2023:</strong> Developed WordPress-Telegram content publishing bots and API integrations.</p>
    `,
    projTitle: "Projects",
    projList: [
      "🤖 Telegram Translation Bot (Pyrogram + Deep Translator)",
      "📊 Trading Strategy Backtester (MetaTrader 5 + Python)",
      "📰 WordPress Telegram Content Publisher"
    ],
    contactTitle: "Contact",
    footer: "© 2025 Roohan Kamalian - All rights reserved"
  },
  fa: {
    nav: ["درباره من", "مهارت‌ها", "تجربه‌ها", "پروژه‌ها", "تماس"],
    aboutTitle: "درباره من",
    aboutText: "سلام! من روحان کمالیان هستم، توسعه‌دهنده پایتون علاقه‌مند به ساخت ربات‌های تلگرام، ابزارهای اتوماسیون و اپلیکیشن‌های وب.",
    cvBtn: "📄 دانلود رزومه",
    skillsTitle: "مهارت‌ها",
    skillsList: [
      "🐍 پایتون (FastAPI, Telethon, Pyrogram)",
      "🤖 توسعه ربات تلگرام",
      "🌐 توسعه وب (HTML, CSS, JS)",
      "📊 ربات‌های تریدینگ (MetaTrader 5, Backtesting)"
    ],
    expTitle: "تجربه‌ها",
    expText: `
      <p><strong>۲۰۲۳ تا اکنون:</strong> ساخت ابزارهای اتوماسیون تلگرام و سیستم‌های بک‌تست استراتژی‌های معاملاتی.</p>
      <p><strong>۲۰۲۲ تا ۲۰۲۳:</strong> توسعه ربات‌های انتشار محتوای وردپرس-تلگرام و یکپارچه‌سازی API.</p>
    `,
    projTitle: "پروژه‌ها",
    projList: [
      "🤖 ربات مترجم تلگرام (Pyrogram + Deep Translator)",
      "📊 بک‌تستر استراتژی معاملاتی (MetaTrader 5 + Python)",
      "📰 ناشر محتوای وردپرس به تلگرام"
    ],
    contactTitle: "تماس",
    footer: "© ۲۰۲۵ روحان کمالیان - تمامی حقوق محفوظ است"
  }
};

let currentLang = "en";

function setLang(lang) {
  const t = texts[lang];
  document.getElementById("nav-about").textContent = t.nav[0];
  document.getElementById("nav-skills").textContent = t.nav[1];
  document.getElementById("nav-exp").textContent = t.nav[2];
  document.getElementById("nav-proj").textContent = t.nav[3];
  document.getElementById("nav-contact").textContent = t.nav[4];

  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("cv-btn").textContent = t.cvBtn;

  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("skills-list").innerHTML = t.skillsList.map(s => `<li>${s}</li>`).join("");

  document.getElementById("exp-title").textContent = t.expTitle;
  document.getElementById("exp-text").innerHTML = t.expText;

  document.getElementById("proj-title").textContent = t.projTitle;
  document.getElementById("proj-list").innerHTML = t.projList.map(p => `<li>${p}</li>`).join("");

  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("footer").textContent = t.footer;

  document.getElementById("langBtn").textContent = lang === "en" ? "فارسی" : "English";
}

function toggleLang() {
  currentLang = currentLang === "en" ? "fa" : "en";
  setLang(currentLang);
}

setLang(currentLang);
