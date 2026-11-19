<script setup>
import config from '../voting.config.mjs'
import { getVotingForm } from '../voting.mjs'

const form = getVotingForm(config.formUrl)
</script>

<template>
  <section class="hackathon-vote" aria-labelledby="voting-title">
    <p class="vote-command">$ cast --vote</p>
    <h2 id="voting-title">Welk project verdient jouw stem?</h2>
    <p>De demo's gezien? Kies het project dat jou het meest heeft overtuigd. Een slimme oplossing, een verrassend idee of gewoon iets dat je morgen al wilt gebruiken.</p>
    <p class="vote-rules"><strong>Jullie kiezen de winnaar.</strong> Het team met de meeste publieksstemmen wint. Ieder teamlid ontvangt €20 aan AI-tokens voor een model naar keuze.</p>
    <template v-if="form">
      <p class="vote-intro">Kies één favoriet en verstuur je stem via het formulier hieronder.</p>
      <iframe :src="form.embedUrl" title="Stemformulier TestCoders AI-hackathon" width="100%" height="760" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <p class="vote-fallback">Verschijnt het formulier niet of lukt aanmelden niet? <a :href="form.directUrl" target="_blank" rel="noopener">Open het stemformulier in een nieuw tabblad</a>.</p>
    </template>
    <div v-else class="vote-pending" role="status">
      <strong>Stemmen is nog niet geopend.</strong>
      <p>De organisatie laat het weten zodra je kunt stemmen. Bekijk ondertussen de demo's en kies alvast je favoriet.</p>
    </div>
    <p class="vote-footnote">Je AI mag adviseren. De stem is van jou.</p>
  </section>
</template>

<style scoped>
.hackathon-vote { margin: 2.5rem 0; scroll-margin-top: 6rem; }
.vote-command { color: var(--vp-c-brand-1); font-family: ui-monospace, monospace; font-size: .875rem; }
.hackathon-vote h2 { margin-top: .5rem; padding-top: 0; border-top: 0; }
.hackathon-vote p { font-size: 1rem; line-height: 1.75; }
.hackathon-vote iframe { display: block; width: 100%; height: 760px; margin: 1.5rem 0 1rem; border: 1px solid var(--vp-c-divider); border-radius: .75rem; background: #fff; }
.vote-pending { margin: 1.5rem 0; padding: 1.25rem; border: 1px solid var(--vp-c-divider); border-radius: .75rem; background: var(--vp-c-bg-soft); }
.vote-pending p { margin-bottom: 0; }
.hackathon-vote .vote-fallback, .hackathon-vote .vote-footnote { font-size: .875rem; }
.vote-footnote { color: var(--vp-c-text-2); }
</style>
