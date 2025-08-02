const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      text: `I am a committed and hardworking individual with strong perseverance and discipline (I believe with a teaspoon, I can reach the Earth’s core). 
I enjoy teamwork and have experience collaborating in financial market analysis. 
I have good anger management skills and communicate effectively with team members. 
I am open to feedback and highly adaptable.`,
      cv: "Download CV",
    },
    skills: {
      title: "Skills",
      list: [
        "Python","FastAPI","Telethon / Pyrogram","BeautifulSoup","Web Scraping",
        "SQLAlchemy","Telegram Bot Development","MetaTrader 5 (MT5) Automation",
        "Speech Recognition (Voice to Text)","Data Analysis","API Integration",
        "Automation Scripting","Object-Oriented Programming (OOP)","Git / Version Control",
        "JavaScript","HTML5","Django","PyQt / PySide","PostgreSQL","Linux Command Line",
        "Constructive Feedback Acceptance","Emotional Control (Anger Management)",
        "Work Ethic","Adaptability","Problem Solving","Team Collaboration"
      ]
    },
    projects: {
      title: "Projects",
      list: [
        "Telegram Username to Phone Number Tool – Uses reverse engineering and a local database to retrieve users' phone numbers from their Telegram usernames.",
        "Instagram Bot Activity Simulator – Simulates human behavior to keep Instagram bots active. Performs actions like posting, sending messages, following users, and liking posts on a random schedule.",
        "Instagram Hashtag Targeting Tool – Extracts target users based on hashtags, gathering usernames, locations, and followers' bios, and exports results to Excel.",
        "Notice Board Bot for TeamTalk – Manages radio program schedules, offline messages, nicknames, statuses, and includes tools like calendar, date converter, and horoscope.",
        "Mafia Game Assistant Bot – Smart assistant bot for Mafia game in TeamTalk, assigning roles, managing challenge/voting times, and counting votes.",
        "Forex Trading Bot for MetaTrader 5 – Automated trading bot for XAUUSD symbol executing trades based on defined strategies.",
        "Gooshkon.ir Telegram Downloader Bot – FastAPI & Telethon bot to download videos, series, and textbooks from Gooshkon.ir.",
        "Internet Radio Player App – A PyQt6 GUI app for streaming internet radios with playlist management.",
        "Scopa Cup – Tournament Assistant – PyQt6 tool for managing Scopa tournaments with team grouping, match scheduling, and score tracking.",
        "TeamTalk Audio Player Bot – Searches and plays YouTube audio in TeamTalk channels, supports favorites and TV/Radio streaming.",
        "Telegram Translation Bot – Multilingual bot using Pyrogram and Deep Translator with support for 133 languages.",
        "Voice-to-Text Translator – Uses Deep Translator & SpeechRecognition to convert speech to translated text in real-time."
      ]
    },
    contact: { title: "Contact" }
  },

  fa: {
    nav: {
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "تجربه‌ها",
      projects: "پروژه‌ها",
      contact: "تماس",
    },
    about: {
      title: "درباره من",
      text: `من فردی متعهد و سخت‌کوش هستم که پشتکار و انضباط بالایی دارم (باور دارم حتی با یک قاشق می‌توانم به هسته زمین برسم!).  
به کار تیمی علاقه‌مندم و تجربه همکاری در تحلیل بازارهای مالی را دارم.  
مهارت خوبی در مدیریت خشم دارم و ارتباط مؤثری با اعضای تیم برقرار می‌کنم.  
پذیرای بازخورد هستم و به‌خوبی با تغییرات سازگار می‌شوم.`,
      cv: "دانلود رزومه",
    },
    skills: {
      title: "مهارت‌ها",
      list: [
        "پایتون","FastAPI","Telethon / Pyrogram","BeautifulSoup","وب اسکرپینگ",
        "SQLAlchemy","توسعه ربات تلگرام","اتومات‌سازی MetaTrader 5 (MT5)",
        "تشخیص گفتار (Speech to Text)","تحلیل داده","یکپارچه‌سازی API",
        "اسکریپت‌نویسی خودکار","برنامه‌نویسی شیء‌گرا (OOP)","Git / کنترل نسخه",
        "جاوااسکریپت","HTML5","Django","PyQt / PySide","PostgreSQL","خط فرمان لینوکس",
        "پذیرش بازخورد سازنده","کنترل خشم","اخلاق کاری","سازگاری","حل مسئله","کار تیمی"
      ]
    },
    projects: {
      title: "پروژه‌ها",
      list: [
        "ابزار یافتن شماره تلفن از یوزرنیم تلگرام – با مهندسی معکوس و دیتابیس محلی شماره کاربران را از یوزرنیم تلگرام بازیابی می‌کند.",
        "شبیه‌ساز فعالیت ربات اینستاگرام – رفتار انسانی را شبیه‌سازی کرده و اقداماتی مثل ارسال پست، پیام، فالو و لایک را انجام می‌دهد.",
        "ابزار هدف‌گیری هشتگ اینستاگرام – کاربران هدف را براساس هشتگ‌ها استخراج کرده و نتایج را در فایل اکسل ذخیره می‌کند.",
        "ربات تابلوی اعلانات TeamTalk – مدیریت برنامه‌های رادیویی، پیام‌های آفلاین، نام‌های کاربری و ابزارهای کمکی مثل تقویم و مبدل تاریخ.",
        "ربات دستیار بازی مافیا – ربات هوشمند برای بازی مافیا در TeamTalk با مدیریت نقش‌ها، زمان‌بندی و شمارش آرا.",
        "ربات معاملاتی فارکس برای MetaTrader 5 – ربات خودکار برای نماد XAUUSD بر اساس استراتژی‌های تعریف‌شده.",
        "ربات دانلودر تلگرام Gooshkon.ir – ربات FastAPI و Telethon برای دانلود ویدیوها، سریال‌ها و کتاب‌ها از Gooshkon.ir.",
        "برنامه پخش رادیو اینترنتی – اپلیکیشن PyQt6 برای استریم رادیو اینترنتی همراه با مدیریت لیست پخش.",
        "دستیار تورنمنت Scopa Cup – ابزار PyQt6 برای مدیریت تورنمنت Scopa شامل گروه‌بندی تیم‌ها، زمان‌بندی مسابقات و ثبت امتیازات.",
        "ربات پخش‌کننده صوت TeamTalk – جستجو و پخش صدای یوتیوب در کانال‌های TeamTalk با لیست علاقه‌مندی‌ها و استریم TV/Radio.",
        "ربات مترجم تلگرام – ربات چندزبانه با Pyrogram و Deep Translator با پشتیبانی از 133 زبان.",
        "مترجم گفتار به متن – ابزاری با Deep Translator و SpeechRecognition برای ترجمه همزمان گفتار به متن."
      ]
    },
    contact: { title: "تماس" }
  }
};

function setLang(lang) {
  document.getElementById("nav-about").textContent = content[lang].nav.about;
  document.getElementById("nav-skills").textContent = content[lang].nav.skills;
  document.getElementById("nav-exp").textContent = content[lang].nav.experience;
  document.getElementById("nav-proj").textContent = content[lang].nav.projects;
  document.getElementById("nav-contact").textContent = content[lang].nav.contact;

  document.getElementById("about-title").textContent = content[lang].about.title;
  document.getElementById("about-text").textContent = content[lang].about.text;
  document.getElementById("cv-btn").textContent = content[lang].about.cv;

  document.getElementById("skills-title").textContent = content[lang].skills.title;
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  content[lang].skills.list.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  document.getElementById("proj-title").textContent = content[lang].projects.title;
  const projList = document.getElementById("proj-list");
  projList.innerHTML = "";
  content[lang].projects.list.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project;
    projList.appendChild(li);
  });

  document.getElementById("contact-title").textContent = content[lang].contact.title;
  document.getElementById("langBtn").textContent = lang === "en" ? "فارسی" : "English";
}

// ... همان content بزرگ که داری

function setLang(lang) {
  // ناوبری
  document.getElementById("nav-about").textContent = content[lang].nav.about;
  document.getElementById("nav-skills").textContent = content[lang].nav.skills;
  document.getElementById("nav-exp").textContent = content[lang].nav.experience;
  document.getElementById("nav-proj").textContent = content[lang].nav.projects;
  document.getElementById("nav-contact").textContent = content[lang].nav.contact;

  // درباره من
  document.getElementById("about-title").textContent = content[lang].about.title;
  document.getElementById("about-text").textContent = content[lang].about.text;
  document.getElementById("cv-btn").textContent = content[lang].about.cv;

  // مهارت‌ها
  document.getElementById("skills-title").textContent = content[lang].skills.title;
  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  content[lang].skills.list.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // پروژه‌ها
  document.getElementById("proj-title").textContent = content[lang].projects.title;
  const projList = document.getElementById("proj-list");
  projList.innerHTML = "";
  content[lang].projects.list.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project;
    projList.appendChild(li);
  });

  // تماس
  document.getElementById("contact-title").textContent = content[lang].contact.title;

  // تغییر جهت متن
  document.body.style.direction = lang === "fa" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "fa" ? "right" : "left";
}
