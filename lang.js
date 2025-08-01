const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      text: `I am a committed and hardworking individual with strong perseverance and discipline (I believe with a teaspoon, I can reach the Earth’s core).
I enjoy teamwork and have experience collaborating in financial market analysis.
I have good anger management skills and communicate effectively with team members.
I am open to feedback and highly adaptable.`,
      cv: "Download CV"
    },
    skills: {
      title: "Skills",
      list: [
        "Python (Programming Language)",
        "Web Scraping",
        "FastAPI",
        "Django",
        "Telethon / Pyrogram",
        "BeautifulSoup",
        "SQLAlchemy",
        "PostgreSQL",
        "MetaTrader 5 (MT5) Automation",
        "API Integration",
        "Automation Scripting",
        "Object-Oriented Programming (OOP)",
        "Data Extraction & Data Collection",
        "Data Analysis",
        "Telegram Bot Development",
        "Speech Recognition (Voice to Text)",
        "Linux Command Line",
        "Git / Version Control",
        "HTML5",
        "JavaScript",
        "PySide / PyQt",
        "Problem Solving",
        "Team Collaboration",
        "Adaptability",
        "Work Ethic",
        "Constructive Feedback Acceptance",
        "Emotional Control (Anger Management)"
      ]
    },
    experience: {
      title: "Experience"
    },
    projects: {
      title: "Projects",
      list: [
        {
          name: "Telegram Username to Phone Number Tool",
          desc: "Uses reverse engineering and a local database to retrieve users' phone numbers from their Telegram usernames."
        },
        {
          name: "Instagram Bot Activity Simulator",
          desc: "Simulates human behavior to keep Instagram bots active. Performs actions like posting, sending messages, following users, and liking posts on a random schedule."
        },
        {
          name: "Instagram Hashtag Targeting Tool",
          desc: "Extracts target users based on hashtags in both Top and Recent posts. Outputs results in Excel for further analysis."
        },
        {
          name: "Notice Board Bot for TeamTalk",
          desc: "A bot for TeamTalk that manages radio schedules, offline messages, and displays dynamic statuses like crypto prices and Wikipedia search results."
        },
        {
          name: "Mafia Game Assistant Bot",
          desc: "A smart assistant bot for the Mafia game in TeamTalk. Assigns roles, manages voting, and handles challenges with timers."
        },
        {
          name: "Forex Trading Bot for MetaTrader 5",
          desc: "Automated trading bot for gold (XAUUSD) on MetaTrader 5 based on trading strategies."
        },
        {
          name: "Gooshkon.ir Telegram Downloader Bot",
          desc: "Bot built with FastAPI and Telethon to download videos, series, and textbooks from Gooshkon.ir."
        },
        {
          name: "Internet Radio Player App",
          desc: "A PyQt6 app for streaming internet radio stations with playlist management."
        },
        {
          name: "Scopa Cup – Tournament Assistant",
          desc: "PyQt6 tool for managing Scopa tournaments with score tracking and scheduling."
        },
        {
          name: "TeamTalk Audio Player Bot",
          desc: "Bot that searches and plays YouTube audio in TeamTalk channels, supports favorites and streams radio/TV."
        },
        {
          name: "Telegram Translation Bot",
          desc: "A multilingual bot using Pyrogram and Deep Translator, supports 133 languages with inline selection."
        },
        {
          name: "Voice-to-Text Translator",
          desc: "Converts speech to translated text using Deep Translator and SpeechRecognition."
        }
      ]
    },
    contact: {
      title: "Contact"
    }
  },

  fa: {
    nav: {
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "تجربه‌ها",
      projects: "پروژه‌ها",
      contact: "ارتباط"
    },
    about: {
      title: "درباره من",
      text: `من فردی متعهد و سخت‌کوش هستم که پشتکار و انضباط بالایی دارم (باور دارم که حتی با یک قاشق هم می‌توانم به هسته زمین برسم).
از کار تیمی لذت می‌برم و تجربه همکاری در تحلیل بازارهای مالی را دارم.
در مدیریت خشم مهارت دارم و به‌خوبی با اعضای تیم ارتباط برقرار می‌کنم.
نسبت به بازخوردها پذیرایم و به‌راحتی با شرایط جدید سازگار می‌شوم.`,
      cv: "دانلود رزومه"
    },
    skills: {
      title: "مهارت‌ها",
      list: [
        "زبان برنامه‌نویسی پایتون",
        "وب اسکرپینگ",
        "FastAPI",
        "جنگو (Django)",
        "Telethon / Pyrogram",
        "کتابخانه BeautifulSoup",
        "SQLAlchemy",
        "PostgreSQL",
        "اتومات‌سازی در MetaTrader 5",
        "یکپارچه‌سازی API",
        "اسکریپت‌نویسی خودکار",
        "برنامه‌نویسی شیءگرا (OOP)",
        "استخراج و جمع‌آوری داده‌ها",
        "تحلیل داده‌ها",
        "توسعه ربات تلگرام",
        "تشخیص گفتار (Speech Recognition)",
        "خط فرمان لینوکس",
        "کنترل نسخه با Git",
        "HTML5",
        "JavaScript",
        "PySide / PyQt",
        "حل مسئله",
        "کار تیمی",
        "سازگاری",
        "اخلاق کاری",
        "پذیرش بازخورد سازنده",
        "کنترل هیجان و خشم"
      ]
    },
    experience: {
      title: "تجربه‌ها"
    },
    projects: {
      title: "پروژه‌ها",
      list: [
        {
          name: "ابزار تبدیل نام کاربری تلگرام به شماره تلفن",
          desc: "با مهندسی معکوس و پایگاه داده محلی، شماره تلفن کاربران را از نام کاربری تلگرام استخراج می‌کند."
        },
        {
          name: "شبیه‌ساز فعالیت ربات اینستاگرام",
          desc: "رفتار انسانی را شبیه‌سازی می‌کند تا ربات‌های اینستاگرام فعال بمانند (پست‌گذاری، پیام‌دادن، دنبال کردن، لایک)."
        },
        {
          name: "ابزار هدف‌گیری هشتگ اینستاگرام",
          desc: "کاربران هدف را بر اساس هشتگ‌ها استخراج کرده و خروجی در قالب فایل اکسل ارائه می‌دهد."
        },
        {
          name: "ربات تابلو اعلانات برای TeamTalk",
          desc: "مدیریت برنامه‌های رادیویی، پیام‌های آفلاین، نمایش وضعیت‌های پویا مثل قیمت ارز دیجیتال و نتایج جستجوی ویکی‌پدیا."
        },
        {
          name: "دستیار بازی مافیا",
          desc: "ربات هوشمند برای بازی مافیا در TeamTalk که نقش‌ها را اختصاص می‌دهد، رأی‌گیری و چالش‌ها را مدیریت می‌کند."
        },
        {
          name: "ربات معامله‌گر فارکس برای MetaTrader 5",
          desc: "ربات خودکار برای معاملات نماد طلا (XAUUSD) بر اساس استراتژی‌های معاملاتی."
        },
        {
          name: "ربات دانلودر تلگرام Gooshkon.ir",
          desc: "با استفاده از FastAPI و Telethon برای دانلود ویدیو، سریال، انیمیشن و کتاب‌های درسی."
        },
        {
          name: "برنامه پخش‌کننده رادیوی اینترنتی",
          desc: "اپلیکیشن PyQt6 برای پخش ایستگاه‌های رادیویی اینترنتی همراه با مدیریت لیست پخش."
        },
        {
          name: "دستیار مسابقات Scopa Cup",
          desc: "ابزار PyQt6 برای مدیریت مسابقات Scopa همراه با پیگیری امتیازها و برنامه‌ریزی مسابقات."
        },
        {
          name: "ربات پخش‌کننده صوت TeamTalk",
          desc: "رباتی که صدای یوتیوب را در کانال‌های TeamTalk پخش می‌کند و لیست علاقه‌مندی‌ها دارد."
        },
        {
          name: "ربات مترجم تلگرام",
          desc: "ربات چندزبانه ساخته‌شده با Pyrogram و Deep Translator، پشتیبانی از 133 زبان."
        },
        {
          name: "مترجم گفتار به متن",
          desc: "ابزاری برای ترجمه گفتار به متن با Deep Translator و SpeechRecognition."
        }
      ]
    },
    contact: {
      title: "ارتباط"
    }
  }
};
