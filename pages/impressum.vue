<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen">
      <div class="flex flex-col gap-10">
        <div class="flex justify-between items-center mt-20">
          <div>
            <NuxtLink to="/">
              <Button size="lg" variant="outline" class="cursor-pointer">
                <ArrowLeft class="size-5" />Zurück
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1 class="h1">Impressum</h1>
          <p>
            Castanets OÜ
            <br />
            Harju maakond,
            <br />
            Ahtri tn 12,10151 Tallinn
            <br />
            Managing Director: Eugen Regehr
            <br />
            VAT: EE102702468
          </p>
        </div>
        <div>
          <h2 class="h2">Contact</h2>
          <p>E-Mail: mail@eugen.work</p>
        </div>

        <div>
          <h2 class="h2">EU-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank"
              >https://ec.europa.eu/consumers/odr/</a
            >. Meine E-Mail-Adresse findest du im oben stehenden Impressum.
          </p>
        </div>

        <div>
          <h2 class="h2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
