interface Project {
  title: string;
  description: string;
  url: string | null;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "BGF+",
    description:
      "BGF+ ist ein Architekturbüro aus Wiesbaden mit rund 50 Mitarbeitenden. Es realisiert vielfältige Projekte vom Innenausbau bis zur denkmalgerechten Sanierung im Rhein-Main-Gebiet.",
    url: "https://www.bgf-plus.de/",
    image: "/img/projects/bgf-plus.jpg",
    tags: ["Webflow", "Animation"],
  },
  {
    title: "Share of Clicks",
    description:
      "Share of Clicks ist ein Analyse-Tool zur Auswertung des Nutzerverhaltens auf Amazon. Es bietet Zugriff auf über 20 Millionen ASIN-Suchbegriff-Kombinationen zur Optimierung der Sichtbarkeit.",
    url: "https://www.shareofclicks.com/",
    image: "/img/projects/share-of-clicks.jpg",
    tags: ["Strapi", "Nuxt", "Logo", "Webdesign"],
  },
  {
    title: "Condio",
    description:
      "Condio entwickelt Stabilisatoren für die Lebensmittelindustrie. Ziel war es, ein statisches Design in eine interaktive Lösung mit wiederverwendbaren Animationen zu überführen.",
    url: "https://www.condio.com/de",
    image: "/img/projects/condio.jpg",
    tags: ["Webflow", "Animation"],
  },
  {
    title: "OneStopBox",
    description:
      "Die OneStopBox ist ein anbieterneutrales, automatisiertes Paketfach mit 24/7 Click-and-Collect-Funktion. Sie wird unter anderem von DHL für nahtlose Abholungen im Einzelhandel genutzt.",
    url: null,
    image: "/img/projects/one-stop-box.jpg",
    tags: ["Kirby CMS", "Tailwind"],
  },
  {
    title: "Blue World Studio",
    description:
      "Blue World Studio aus Düsseldorf ist auf Web- und App-Entwicklung spezialisiert. Die Website überzeugt durch Mikro-Animationen, Nutzerfreundlichkeit und einen integrierten Blog.",
    url: "https://blueworld.studio/",
    image: "/img/projects/blueworld-studio.jpg",
    tags: ["Webflow", "Animation"],
  },
  {
    title: "Techstax UG",
    description:
      "Techstax bietet maßgeschneiderte digitale Lösungen mit Fokus auf die nahtlose Verbindung von Design und Entwicklung.",
    url: "https://techstax.de",
    image: "/img/projects/techstax.jpg",
    tags: ["Kirby CMS", "Tailwind"],
  },
  {
    title: "Lenz & Gomez",
    description:
      "Lenz & Gomez vermittelt seit 30 Jahren Jobs und Teilzeitstellen. Die modernisierte Website bietet separate Bereiche für Bewerber und Unternehmen sowie eine Jobbörse und Blogfunktion.",
    url: "https://lenz-gomez.de",
    image: "/img/projects/lenz-gomez.jpg",
    tags: ["Webflow", "Animation"],
  },
  {
    title: "Cap-On",
    description:
      "Cap-On kombiniert technologische Plattformen mit Finanzlösungen für die Produktion. Die animierte Website erklärt das Geschäftsmodell anschaulich und enthält auch einen Blog.",
    url: "https://www.cap-on.de",
    image: "/img/projects/cap-on.jpg",
    tags: ["Webflow", "Animation"],
  },
];
