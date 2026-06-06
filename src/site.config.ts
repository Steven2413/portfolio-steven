/**
 * Site Configuration File
 * 
 * This file contains all the customizable options for your blog.
 * 
 * IMPORTANT: Replace all placeholder values (morethan-log-astro.sereja.com, Sereja, etc.)
 * with your own information before deploying to production.
 * 
 * After updating this file:
 * 1. Update your RSS feed at /rss.xml
 * 2. Update your sitemap at /sitemap-0.xml
 * 3. Update metadata in package.json
 * 4. Replace images in public/img/
 */

export default {
  // Basic site information
  title: {
    en: "Steven Valdez Portafolio",
    ru: "Morethan-Log"
  },
  description: {
    en: "Application Developer",
    ru: "Современный шаблон блога на Astro - быстрый, адаптивный и многоязычный"
  },
  siteUrl: "https://morethan-log-astro.sereja.com", // Used for RSS, sitemap, and social cards
  
  // Author information
  author: {
    name: {
      en: "Sereja",
      ru: "Серёжа"
    },
    email: "demo@morethan-log.com",
    avatar: "/img/avatar.svg", // Author avatar image
    bio: {
      en: "Full-stack developer passionate about creating beautiful and functional web applications. Building with Astro, React, and modern web technologies.",
      ru: "Full-stack разработчик, увлеченный созданием красивых и функциональных веб-приложений. Работаю с Astro, React и современными веб-технологиями."
    }
  },
  
  // Blog settings
  postsPerPage: 10,
  featuredImageFallback: "/img/posts/placeholder.svg", // Default image for posts without featured image
  
  // Social links - customize or remove as needed
  // Now supports language-specific links
  socialLinks: {
    en: {
      github: "https://github.com/dashboard",
      twitter: "https://x.com/home",
      instagram: "https://www.instagram.com/valdez.s13/",
      twitch: "https://www.twitch.tv/yourusername",
      // Add or remove social links as needed
    },
    ru: {
      github: "https://github.com/yourusername-ru",
      twitter: "https://x.com/yourusername-ru",
      linkedin: "https://linkedin.com/in/yourusername-ru", 
      telegram: "https://t.me/yourusername-ru",
      tiktok: "https://www.tiktok.com/@yourusername-ru",
      instagram: "https://www.instagram.com/yourusername-ru/",
      youtube: "https://www.youtube.com/@yourusername-ru",
      twitch: "https://www.twitch.tv/yourusername-ru",
      // Add or remove social links as needed
    }
  },
  
  // Navigation categories (customize based on your content)
  // Set enabled: false to hide a category
  categories: {
    blog: {
      enabled: true,
      path: "/blog",
      icon: "💻",
      description: {
        en: "Personal thoughts, experiences, and insights from my journey",
        ru: "Личные мысли, опыт и идеи из моего путешествия"
      }
    },
    technology: {
      enabled: true,
      path: "/technology",
      icon: "🚀",
      description: {
        en: "Deep dives into web development, tools, and best practices",
        ru: "Глубокое погружение в веб-разработку, инструменты и лучшие практики"
      }
    },
    projects: {
      enabled: true,
      path: "/projects", 
      icon: "🛠️",
      description: {
        en: "Showcase of my work and open-source contributions",
        ru: "Витрина моих работ и вклада в открытый исходный код"
      }
    }
  },
  
  // Feature toggles
  features: {
    // Enable/disable dark mode toggle
    darkMode: true,
    // Enable/disable search functionality
    search: true,
    // Enable/disable RSS feed
    rss: true,
    // Enable/disable sitemap generation
    sitemap: true,
    // Enable/disable image lightbox in posts
    imageLightbox: true,
    // Enable/disable post navigation (prev/next)
    postNavigation: true,
    // Enable/disable reading time estimation
    readingTime: true,
    // Enable/disable post views counter
    viewCounter: false
  },
  
  // SEO & Meta tags
  seo: {
    // Default image for social sharing
    defaultImage: "/img/og-image.svg",
    // Twitter handle without @
    twitterHandle: "astrodotbuild",
    // Google Analytics ID (if you have one)
    googleAnalytics: "", // e.g., "G-XXXXXXXXXX"
  },
  
  // Language settings
  defaultLanguage: "en",
  languages: ["en", "ru"],
  
  // Date format settings
  dateFormat: {
    // Options: 'en-US', 'ru-RU', etc.
    locale: 'en-US',
    options: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
} 