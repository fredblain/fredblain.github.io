/* ==========================================================================
   content.js — everything shown on the website lives in this file.
   Edit, save, refresh the page (or commit + push). No HTML needed.

   Tips
   - Keep the commas between entries and the quotes around text.
   - To add an item (paper, news, course…), copy an existing { … } entry
     in the same list and change it. Order inside lists doesn't matter for
     publications and news: they are sorted by year/date automatically.
   - Leave a URL as "" to hide its button.
   ========================================================================== */

window.CONTENT = {

  /* ---------- Identity ---------- */
  name: "Frédéric Blain",          // the big name on the page: as on your papers
  nickname: "Fred",                // used in the browser tab: "Frédéric (Fred) Blain"
  /* Small line under the name. **double stars** = highlighted. Set to "" to hide. */
  alsoKnownAs: "**Fred** to colleagues and students · **F. Blain** on papers",
  /* Every spelling people might search for; read by search engines, not shown. */
  alternateNames: ["Fred Blain", "Frederic Blain", "Frédéric Blain", "F. Blain"],
  givenName: "Frédéric",
  familyName: "Blain",

  /* ---------- Search engines & link previews ----------
     siteUrl: the final address of this website, with a trailing slash,
     e.g. "https://fredblain.github.io/". Used for the canonical link,
     link previews and the structured data Google reads. */
  siteUrl: "https://fredblain.github.io",
  /* ---------- Photo ----------
     photo:       shown in the About section (square, ~600 px). "" = no photo.
     photoWebp:   optional smaller copy of the same photo for modern browsers.
     photoLarge:  optional larger copy (~1200 px) used for link previews and Google.
     photoStyle:  "color" or "tint" (blue-tinted to match the page, full colour on hover). */
  photo: "assets/photo.jpg",
  photoWebp: "assets/photo.webp",
  photoLarge: "assets/photo-1200.jpg",
  photoAlt: "Portrait of Frédéric Blain",
  photoStyle: "color",
  /* One-sentence summary used in search results and link previews. */
  summary: "Assistant Professor at Tilburg University working on machine translation, translation quality estimation and evaluation, and human-centred language technology.",
  /* Research keywords: shown as tags under Research and read by search engines. */
  keywords: ["machine translation", "quality estimation", "MT evaluation", "evaluation metrics",
             "natural language processing", "computational linguistics", "gender bias in MT",
             "human-centred language technology", "computer-assisted translation"],
  /* Education and past employers, read by search engines (not shown). */
  alumniOf: ["Le Mans Université"],
  pastEmployers: ["University of Wolverhampton", "University of Sheffield"],
  role: "Assistant Professor",
  department: "Department of Intelligent Systems, Research Center for Cognitive Science & Artificial Intelligence",
  institution: "Tilburg University",
  topLabel: "TILBURG UNIVERSITY",
  /* Email, split in two so bots can't harvest it. Shown only after a click on
     "Show email", and never given to search engines.
     e.g. { user: "f.l.g.blain", domain: "tilburguniversity.edu" }. Leave both "" to hide. */
  email: { user: "f.l.g.blain", domain: "tilburguniversity.edu" },
  /* Postal address in the Contact section: one entry per line. */
  addressLabel: "Office",
  address: [
    "Department of Intelligent Systems",
    "Research Center for Cognitive Science & AI",
    "Tilburg University",
    "Warandelaan 2",
    "5037 AB Tilburg, The Netherlands"
  ],

  /* Your name is highlighted wherever this appears in an author list. */
  highlightAuthor: "F. Blain",

  /* ---------- Rotating tagline under your name ----------
     Each example: the English sentence, one translation per language
     below, and one deliberately faulty translation.
     In "faulty.text", wrap each error in [[double brackets]]: it gets
     underlined on the page. Quality scores are illustrative. */
  tagline: {
    secondsPerLanguage: 3,
    languages: [
      { code: "en", label: "EN", name: "English (source)" },
      { code: "fr", label: "FR", name: "French",   quality: 0.92 },
      { code: "nl", label: "NL", name: "Dutch",    quality: 0.90 },
      { code: "de", label: "DE", name: "German",   quality: 0.89 },
      { code: "es", label: "ES", name: "Spanish",  quality: 0.91 },
      { code: "ja", label: "JA", name: "Japanese", quality: 0.86 }
    ],
    examples: [
      {
        en: "Translation technology that people can rely on.",
        fr: "Des technologies de traduction sur lesquelles on peut compter.",
        nl: "Vertaaltechnologie waar mensen op kunnen vertrouwen.",
        de: "Übersetzungstechnologie, auf die sich Menschen verlassen können.",
        es: "Tecnología de traducción en la que la gente puede confiar.",
        ja: "人々が信頼できる翻訳技術。",
        faulty: { code: "nl", name: "Dutch", quality: 0.38,
                  text: "[[Vertaling technologie]] die mensen kunnen vertrouwen [[op]].",
                  note: "compound split and misplaced preposition." }
      },
      {
        en: "Knowing how good a translation is, before anyone checks it.",
        fr: "Savoir si une traduction est bonne, avant que quiconque ne la vérifie.",
        nl: "Weten hoe goed een vertaling is, voordat iemand haar controleert.",
        de: "Wissen, wie gut eine Übersetzung ist, bevor jemand sie prüft.",
        es: "Saber qué tan buena es una traducción antes de que alguien la revise.",
        ja: "誰かが確認する前に、翻訳の良し悪しを知る。",
        faulty: { code: "fr", name: "French", quality: 0.35,
                  text: "Savoir [[comment bon]] une traduction [[est]], avant [[n'importe qui]] la vérifie.",
                  note: "word-for-word structure and wrong pronoun." }
      },
      {
        en: "Language technology that serves people, not the other way round.",
        fr: "Des technologies du langage au service des gens, et non l’inverse.",
        nl: "Taaltechnologie die mensen dient, en niet andersom.",
        de: "Sprachtechnologie, die den Menschen dient, nicht umgekehrt.",
        es: "Tecnología del lenguaje al servicio de las personas, y no al revés.",
        ja: "人に仕える言語技術。その逆ではなく。",
        faulty: { code: "de", name: "German", quality: 0.31,
                  text: "[[Sprache Technologie]], die [[Leute]] dient, nicht [[die andere Weg rund]].",
                  note: "split compound, wrong case and a literal idiom." }
      },
      {
        en: "Machine translation you can measure, question and trust.",
        fr: "Une traduction automatique que l’on peut mesurer, questionner, et à laquelle on peut se fier.",
        nl: "Machinevertaling die je kunt meten, bevragen en vertrouwen.",
        de: "Maschinelle Übersetzung, die man messen, hinterfragen und der man vertrauen kann.",
        es: "Traducción automática que se puede medir, cuestionar y en la que se puede confiar.",
        ja: "測定でき、問い直せ、信頼できる機械翻訳。",
        faulty: { code: "es", name: "Spanish", quality: 0.44,
                  text: "Traducción [[de máquina]] que tú puedes medir, [[preguntar]] y [[confiar]].",
                  note: "calque, wrong verb and a missing preposition." }
      }
    ]
  },

  /* ---------- Section headings: small multilingual subtitles ---------- */
  subtitles: {
    about: "over · à propos · über",
    news: "nieuws · actualités · Neuigkeiten",
    journey: "FR → EN → NL",
    research: "onderzoek · recherche · Forschung",
    publications: "selected",
    teaching: "onderwijs · enseignement",
    contact: "contact · contact · Kontakt"
  },

  /* ---------- About ----------
     Who you are in a few lines. What you work on goes in researchIntro below. */
  intro: {
    lead: "I am an Assistant Professor in AI at Tilburg University, working at the intersection of artificial intelligence, computational linguistics and natural language processing.",
    paragraphs: [
      "I am interested in where language, machine learning and human communication meet, with a particular focus on translation technologies that are reliable, adaptable and useful to the people who depend on them."
    ],
    /* Key facts, shown under the text */
    facts: [
      { label: "At Tilburg since", value: "December 2022" },
      { label: "PhD", value: "Computer Science, Le Mans Université, 2013" },
      { label: "European projects", value: "MateCAT · QT21 · Bergamot" },
      { label: "Worked in", value: "France · United Kingdom · Netherlands" }
    ]
  },

  /* ---------- News (newest first is automatic; delete all entries to hide the section) ----------
     date: "YYYY-MM" or "YYYY-MM-DD" */
  news: [
    { date: "2026-10", text: "Introducing ['From Notebook to Cluster'](https://fredblain.github.io/notebook-to-cluster): four illustrated, comics-style guides to help students take code from GitHub to a shared GPU server, one step at a time." },
    { date: "2026-10", text: "Findings paper of the WMT'26 Shared Task on Automated MT Evaluation is out (100 pages!!)." },
    { date: "2026-05", text: "Paper on gender disambiguation in MT at LREC 2026." },
    { date: "2025-06", text: "Paper on gender disambiguation and attention in MT at GITT 2025." }
  ],

  /* ---------- Journey: one stop per country ---------- */
  journey: [
    { code: "FR", place: "France", period: "–2014", items: [
      { title: "PhD in Computer Science, 2013", detail: "Le Mans Université" },
      { title: "SYSTRAN", detail: "Industry affiliation during doctoral research" },
      { title: "MateCAT, 2011–2014", detail: "EU project on computer-assisted translation: MT adaptation and quality estimation" }
    ]},
    { code: "EN", place: "United Kingdom", period: "2015–2022", items: [
      { title: "Research Associate, 2015–2020", detail: "Computer Science, University of Sheffield" },
      { title: "Senior Lecturer, 2020–2022", detail: "University of Wolverhampton" },
      { title: "QT21 and Bergamot", detail: "Translation quality and browser-based multilingual translation" }
    ]},
    { code: "NL", place: "The Netherlands", period: "2022–", current: true, items: [
      { title: "Assistant Professor, since Dec 2022", detail: "Cognitive Science & AI, Tilburg University" },
      { title: "Research and supervision", detail: "Quality estimation, metric robustness, gender bias in MT" }
    ]}
  ],

  /* ---------- Research ----------
     researchIntro: a short paragraph shown above the themes. "" to hide. */
  researchIntro: "My research focuses on machine translation, the evaluation and estimation of translation quality, and language technologies that better serve human needs. I study how AI systems process and translate language, how their outputs can be evaluated reliably, and how translation technology can become more accurate, robust and human-centred.",
  research: [
    { kicker: "How machines translate", title: "Machine translation",
      text: "How AI systems process and translate language, and how they adapt to new domains and users." },
    { kicker: "How good is it?", title: "Quality estimation & evaluation",
      text: "Predicting translation quality without a reference, and testing whether evaluation metrics can be trusted." },
    { kicker: "For whom?", title: "Human-centred language technology",
      text: "Accurate, robust and responsible tools that serve the people who rely on them." }
  ],

  /* ---------- Publications (sorted by year automatically) ----------
     Fields: year, title, authors, venue, and optional: url (paper page), pdf, code,
     doi (e.g. "10.18653/v1/W17-4760"). Paper URLs and DOIs help Google and
     Google Scholar connect each paper to this profile. */
  publications: [
    { year: 2026, title: "Gender Disambiguation in Machine Translation: Diagnostic Evaluation in Decoder-Only Architectures",
      authors: "C. Manna, H. Mohebbi, A. Alishahi, F. Blain, E. Vanmassenhove",
      venue: "LREC 2026", url: "https://aclanthology.org/2026.lrec-1.673/", pdf: "https://aclanthology.org/2026.lrec-1.673.pdf", code: "" },
    { year: 2025, title: "Are We Paying Attention to Her? Investigating Gender Disambiguation and Attention in Machine Translation",
      authors: "C. Manna, A. Alishahi, F. Blain, E. Vanmassenhove",
      venue: "Workshop on Gender-Inclusive Translation Technologies (GITT 2025)", url: "https://aclanthology.org/2025.gitt-1.1/", pdf: "https://aclanthology.org/2025.gitt-1.1.pdf", code: "" },
    { year: 2024, title: "Are LLMs Breaking MT Metrics? Results of the WMT24 Metrics Shared Task",
      authors: "M. Freitag, N. Mathur, D. Deutsch, C. Lo, E. Avramidis, R. Rei, B. Thompson, F. Blain, T. Kocmi, J. Wang, D. Ifeoluwa Adelani, M. Buchicchio, C. Zerva, A. Lavie",
      venue: "WMT 2024", url: "https://aclanthology.org/2024.wmt-1.2/", pdf: "https://aclanthology.org/2024.wmt-1.2.pdf", code: "" },
    { year: 2023, title: "Findings of the WMT 2023 Shared Task on Quality Estimation",
      authors: "F. Blain, C. Zerva, R. Rei, N. M. Guerreiro, D. Kanojia, J. G. C. de Souza, B. Silva, T. Vaz, Y. Jingxuan, F. Azadi, C. Orasan, A. Martins",
      venue: "WMT 2023", url: "https://aclanthology.org/2023.wmt-1.52/", pdf: "https://aclanthology.org/2023.wmt-1.52.pdf", code: "" },
  ],
  publicationsMore: { label: "Full list on the ACL Anthology", url: "https://aclanthology.org/people/frederic-blain/" },

  /* ---------- Profile links (hero icons + footer) ----------
     These are what tell Google that this site, your Scholar page, ORCID,
     DBLP etc. are the same researcher, so use your exact profile URLs.
     - search: true  = temporary link that searches for your name. Replace
       the url with your profile's own address and delete `search: true`.
       Search links are shown to visitors but NOT given to Google as "same person".
     - url: ""       = hidden.
     icon: any free Font Awesome 6 class, see https://fontawesome.com/search?o=r&m=free
     group: the heading the link appears under in the Contact section. */
  orcid: "",   // your ORCID iD only, e.g. "0000-0002-1825-0097" (also fills the ORCID link below)
  links: [
    { label: "Google Scholar", group: "Publications",     icon: "fa-solid fa-graduation-cap", 
      url: "https://scholar.google.com/citations?hl=en&user=sgBANaQAAAAJ" },
    { label: "ACL Anthology", group: "Publications",      icon: "fa-solid fa-book-open",
      url: "https://aclanthology.org/people/frederic-blain/" },
    { label: "ORCID", group: "Publications",              icon: "fa-brands fa-orcid", 
      url: "https://orcid.org/0000-0003-3017-3722" },
    { label: "DBLP", group: "Publications",               icon: "fa-solid fa-database",
      url: "https://dblp.org/pid/97/11423.html" },
    { label: "Semantic Scholar", group: "Publications",   icon: "fa-solid fa-circle-nodes",
      url: "https://www.semanticscholar.org/author/F.-Blain/1948646" },
    { label: "University profile", group: "Elsewhere", icon: "fa-solid fa-building-columns",
      url: "https://research.tilburguniversity.edu/en/persons/fred-blain/" },
    { label: "LinkedIn", group: "Elsewhere",           icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/fredblain" },
    { label: "GitHub", group: "Elsewhere",             icon: "fa-brands fa-github",         
      url: "https://github.com/fredblain" },
    { label: "ResearchGate", group: "Elsewhere",       icon: "fa-brands fa-researchgate",
      url: "https://www.researchgate.net/profile/Frederic-Blain" }
  ],

  /* ---------- Copyright & licences (footer) ----------
     The year updates itself ("2026–2027" from next year).
     rel: "license" marks the licence of the page's text for search engines. */
  legal: {
    holder: "Frédéric Blain",
    since: 2026,
    licenses: [
      { what: "Text", name: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/", rel: "license" },
      { what: "Code", name: "MIT", url: "LICENSE" }
    ]
  },
  footerNote: "Last updated October 2026"
};
