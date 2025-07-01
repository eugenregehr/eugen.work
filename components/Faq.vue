<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "In welchem Preisrahmen bewegen sich meine Projekte?",
    answer:
      "Der Preis hängt von der Komplexität und dem Umfang des Projekts ab. Jedes Projekt wird individuell kalkuliert. Zur Orientierung: Kleine Webprojekte mit CMS starten in der Regel bei ca. 2.000€, größere oder komplexere ab etwa 5.000€.",
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer:
      "Auch hier hängt die Dauer stark vom Umfang ab. Kleine Webprojekte benötigen meist 2–4 Wochen, während umfangreichere oder komplexere Projekte bis zu drei Monate in Anspruch nehmen können.",
  },
  {
    question: "Welche Technologien werden verwendet?",
    answer:
      "Ich arbeite mit modernen Technologien und Frameworks, um beste Performance und Benutzerfreundlichkeit zu gewährleisten. In der Regel kommen Nuxt.js, Tailwind CSS und TypeScript zum Einsatz. Als CMS setze ich seit Jahren erfolgreich auf Kirby.",
  },
  {
    question: "Warum verwendest du kein WordPress?",
    answer:
      "Nach acht Jahren intensiver Arbeit mit WordPress lässt sich feststellen, dass das System in einigen Bereichen an seine Grenzen stößt. Die große Anzahl an Plugins und Themes bringt zwar eine hohe Anpassungsfähigkeit mit sich, erschwert jedoch zunehmend eine performante, wartbare und sichere Umsetzung. Inzwischen stehen moderne Alternativen zur Verfügung, die mehr Flexibilität, bessere Performance und ein höheres Maß an Sicherheit bieten.",
  },
  {
    question: "Bietest du auch Hosting-Lösungen an?",
    answer:
      "Ja, ich biete moderne Hosting-Lösungen auf Basis der Cloud-Plattform Vercel an. Vercel setzt auf ein skalierbares „Serverless“-Modell, das auch bei hohem Traffic eine stabile Performance garantiert – dank weltweitem CDN-Caching und blitzschnellen Deployments. Für CMS-basierte Projekte verwende ich zusätzlich einen eigenen VPS-Server, den ich flexibel an die Anforderungen des Projekts anpassen und bei Bedarf erweitern kann. Die Daten werden DSGVO-konform auf Servern in der EU oder in Deutschland gespeichert, und ein späterer Hostingwechsel ist jederzeit möglich.",
  },
];
</script>

<template>
  <div>
    <h2 class="h2">FAQ</h2>
    <Accordion type="single" class="flex flex-col gap-2" collapsible>
      <AccordionItem
        v-for="item in faq"
        :key="item.question"
        :value="item.question">
        <AccordionTrigger>{{ item.question }}</AccordionTrigger>
        <AccordionContent>
          <p>
            {{ item.answer }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
