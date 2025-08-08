const content = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    contact: {
        title: "Contact",
        name: "Name:",
        email: "Sender's Email:",
        message: "Message:",
        send: "Send Message",
    },
    about: {
      title: "About Me",
      text: `Hello! I'm Roohan Kamalian, a Python developer passionate about building Telegram bots, automation tools, and web applications.
I am a committed and hardworking individual with strong perseverance and discipline (I believe with a teaspoon, I can reach the Earth’s core).
I have good anger management skills and communicate effectively with team members.
I am open to feedback and highly adaptable.`,
      cv: "Download CV",
      cvOnline: "Online Resume",
    },
    skills: { title: "Skills", list: ["Python", "FastAPI", "Telethon / Pyrogram", "BeautifulSoup", "Web Scraping", "SQLAlchemy", "Telegram Bot Development", "MetaTrader 5 (MT5) Automation", "Speech Recognition (Voice to Text)", "Data Analysis", "API Integration", "Automation Scripting", "Object-Oriented Programming (OOP)", "Git / Version Control", "JavaScript", "HTML5", "Django", "PyQt / PySide", "PostgreSQL"] },
    experience: { expTitle: "Experience", expText: `<p><strong>2023 - Present:</strong> Building Telegram automation tools and trading strategy backtesting systems.</p><p><strong>2022 - 2023:</strong> Developed WordPress-Telegram content publishing bots and API integrations.</p>` },
    projects: {
      title: "Projects",
      list: [
        "Telegram Username to Phone Number Tool – Uses reverse engineering and a local database to retrieve users' phone numbers from their Telegram usernames.",
        "Instagram Bot Activity Simulator – Simulates human-like behavior and performs actions such as posting, messaging, following, liking, as well as generating intelligent comments using artificial intelligence.",
        "Instagram Hashtag Targeting Tool – Extracts target users based on hashtags, gathering usernames, locations, and followers' bios, and exports results to Excel.",
        "Notice Board Bot for TeamTalk – Manages radio program schedules, offline messages, nicknames, statuses, and includes tools like calendar, date converter, and horoscope.",
        "Mafia Game Assistant Bot – Smart assistant bot for Mafia game in TeamTalk with team grouping, match scheduling, and score tracking.",
        "Forex Trading Bot for MetaTrader 5 – Automated trading bot for XAUUSD symbol executing trades based on defined strategies.",
        "Gooshkon.ir Telegram Downloader Bot – FastAPI & Telethon bot to download videos, series, and textbooks from Gooshkon.ir.",
        "Internet Radio Player App – A PyQt6 GUI app for streaming internet radios with playlist management.",
        "Scopa Cup – Tournament Assistant – PyQt6 tool for managing Scopa tournaments with team grouping, match scheduling, and score tracking.",
        "TeamTalk Audio Player Bot – Searches and plays YouTube audio in TeamTalk channels, supports favorites and TV/Radio streaming.",
        "Telegram Translation Bot – Multilingual bot using Pyrogram and Deep Translator with support for 133 languages.",
        "Voice-to-Text Translator – Uses Deep Translator & SpeechRecognition to convert speech to translated text in real-time.",
      ],
    },
  },

  fa: {
    nav: { about: "درباره من", skills: "مهارت‌ها", experience: "تجربه‌ها", projects: "پروژه‌ها", contact: "تماس" },
    contact: {
        title: "تماس",
        name: "نام:",
        email: "ایمیل فرستنده:",
        message: "پیام:",
        send: "ارسال پیام",
    },
    about: {
      title: "درباره من",
      text: `سلام! من روحان کمالیان هستم، توسعه‌دهنده پایتون علاقه‌مند به ساخت ربات‌های تلگرام، ابزارهای اتوماسیون و اپلیکیشن‌های وب.
من فردی متعهد و سخت‌کوش هستم که پشتکار و انضباط بالایی دارم (باور دارم حتی با یک قاشق می‌توانم به هسته زمین برسم!).
به کار تیمی علاقه‌مندم و تجربه همکاری در تحلیل بازارهای مالی را دارم.
پذیرای بازخورد هستم و به‌خوبی با تغییرات سازگار می‌شوم.`
,
      cv: "دانلود رزومه",
      cvOnline: "نسخه آنلاین رزومه",
    },
    skills: { title: "مهارت‌ها", list: ["پایتون", "FastAPI", "Telethon / Pyrogram", "BeautifulSoup", "وب اسکرپینگ", "SQLAlchemy", "توسعه ربات تلگرام", "اتومات‌سازی MetaTrader 5 (MT5)", "تشخیص گفتار (Speech to Text)", "تحلیل داده", "یکپارچه‌سازی API", "اسکریپت‌نویسی خودکار", "برنامه‌نویسی شیء‌گرا (OOP)", "Git / کنترل نسخه", "جاوااسکریپت", "HTML5", "Django", "PyQt / PySide", "PostgreSQL"] },
    experience: { expTitle: "تجربه‌ها", expText: `<p><strong>۲۰۲۳ تا اکنون:</strong> ساخت ابزارهای اتوماسیون تلگرام و سیستم‌های بک‌تست استراتژی‌های معاملاتی.</p><p><strong>۲۰۲۲ تا ۲۰۲۳:</strong> توسعه ربات‌های انتشار محتوای وردپرس-تلگرام و یکپارچه‌سازی API.</p>` },
    projects: {
      title: "پروژه‌ها",
      list: [
        "ابزار یافتن شماره تلفن از یوزرنیم تلگرام – با مهندسی معکوس و دیتابیس محلی شماره کاربران را از یوزرنیم تلگرام بازیابی می‌کند.",
        "شبیه‌ساز فعالیت ربات اینستاگرام – رفتار انسانی را شبیه‌سازی کرده و اقداماتی مثل ارسال پست، پیام، فالو و لایک  و همچنین کامنت هوشمند با استفاده از هوش مصنوعی را انجام می‌دهد.",
        "ابزار هدف‌گیری هشتگ اینستاگرام – کاربران هدف را براساس هشتگ‌ها استخراج کرده و نتایج را در فایل اکسل ذخیره می‌کند.",
        "ربات تابلوی اعلانات TeamTalk – مدیریت برنامه‌های رادیویی، پیام‌های آفلاین، نام‌های کاربری و ابزارهای کمکی مثل تقویم و مبدل تاریخ.",
        "ربات دستیار بازی مافیا – ربات هوشمند برای بازی مافیا در TeamTalk با مدیریت نقش‌ها، زمان‌بندی و شمارش آرا.",
        "ربات معاملاتی فارکس برای MetaTrader 5 – ربات خودکار برای نماد XAUUSD بر اساس استراتژی‌های تعریف‌شده.",
        "ربات دانلودر تلگرام Gooshkon.ir – ربات FastAPI و Telethon برای دانلود ویدیوها، سریال‌ها و کتاب‌ها از Gooshkon.ir.",
        "برنامه پخش رادیو اینترنتی – اپلیکیشن PyQt6 برای استریم رادیو اینترنتی همراه با مدیریت لیست پخش.",
        "دستیار تورنمنت Scopa Cup – ابزار PyQt6 برای مدیریت تورنمنت Scopa شامل گروه‌بندی تیم‌ها، زمان‌بندی مسابقات و ثبت امتیازات.",
        "ربات پخش‌کننده صوت TeamTalk – جستجو و پخش صدای یوتیوب در کانال‌های TeamTalk، با لیست علاقه‌مندی‌ها و استریم TV/Radio.",
        "ربات مترجم تلگرام – ربات چندزبانه با Pyrogram و Deep Translator با پشتیبانی از 133 زبان.",
        "مترجم گفتار به متن – ابزاری با Deep Translator و SpeechRecognition برای ترجمه همزمان گفتار به متن.",
      ],
    },
  },
};

// 🔹 تابع تغییر زبان و به‌روزرسانی متن‌ها
function updateContent(lang) {
  const t = content[lang];

  document.getElementById("nav-about").textContent = t.nav.about;
  document.getElementById("nav-skills").textContent = t.nav.skills;
  document.getElementById("nav-exp").textContent = t.nav.experience;
  document.getElementById("nav-proj").textContent = t.nav.projects;
  document.getElementById("nav-contact").textContent = t.nav.contact;

  document.getElementById("contact-title").textContent = t.contact.title;
  document.getElementById("label-name").textContent = t.contact.name;
  document.getElementById("label-email").textContent = t.contact.email;
  document.getElementById("label-message").textContent = t.contact.message;
  document.getElementById("send-btn").textContent = t.contact.send;

  document.getElementById("about-title").textContent = t.about.title;
  document.getElementById("about-text").innerHTML = t.about.text.replace(/\n/g, "<br>");
  document.getElementById("cv-btn").textContent = t.about.cv;

  document.getElementById("skills-title").textContent = t.skills.title;
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  t.skills.list.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  document.getElementById("exp-title").textContent = t.experience.expTitle;
  document.getElementById("exp-text").innerHTML = t.experience.expText;

  document.getElementById("cv-online").textContent = t.about.cvOnline;

  document.getElementById("proj-title").textContent = t.projects.title;
  const projList = document.getElementById("proj-list");
  projList.innerHTML = "";
  t.projects.list.forEach((proj) => {
    const li = document.createElement("li");
    li.textContent = proj;
    projList.appendChild(li);
  });


  // جهت و دکمه
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document.body.style.textAlign = lang === "fa" ? "right" : "left";
  document.getElementById("langBtn").textContent = lang === "en" ? "فارسی" : "English";

  localStorage.setItem("lang", lang);
}

// 🔹 دکمه تغییر زبان
document.getElementById("langBtn").addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "en";
  updateContent(current === "en" ? "fa" : "en");
});

// 🔹 اجرای اولیه
updateContent(localStorage.getItem("lang") || "en");