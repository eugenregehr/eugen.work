<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "How much do you charge?",
    answer:
      "It depends on the complexity of the project. I offer a free consultation to discuss your needs and provide a quote. Usually my projects start at 2000€.",
  },
  {
    question: "What is included in the price?",
    answer: "",
  },
];
</script>

<template>
  <div>
    <h2 class="h2">FAQ</h2>
    <Accordion type="single" collapsible>
      <AccordionItem
        v-for="item in faq"
        :key="item.question"
        :value="item.question">
        <AccordionTrigger>{{ item.question }}</AccordionTrigger>
        <AccordionContent>
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
