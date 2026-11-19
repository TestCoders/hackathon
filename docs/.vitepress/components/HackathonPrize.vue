<script setup>
import { withBase } from 'vitepress'

defineProps({ compact: Boolean })
const pdf = withBase('/prijzen/TestCoders_Tokens_of_Glory.pdf')
</script>

<template>
  <section class="token-prize" aria-label="Hackathonprijs: Tokens of Glory">
    <div class="prize-copy">
      <p class="prize-command">&gt; achievement unlocked</p>
      <h2>Tokens of Glory<span>.</span></h2>
      <p class="prize-tagline">Menselijke genialiteit. Kunstmatig beloond.</p>
      <p>Het team met de meeste publieksstemmen krijgt <strong>€20 per persoon</strong> aan tokens voor een AI-model naar keuze. Meer tokens. Minder “limiet bereikt”.</p>
      <div class="prize-actions">
        <a class="prize-button" :href="compact ? withBase('/stemmen') : '#voting-title'">Stem op je favoriet</a>
        <a class="prize-download" :href="pdf" target="_blank" rel="noopener">Bekijk de prijsbon (PDF)</a>
      </div>
    </div>
    <div class="prize-art">
      <span class="prize-badge">100% winnaar · 0% hallucinatie</span>
      <img :src="withBase('/prijzen/robot.png')" alt="Een gekroonde robot met een gouden beker" width="1254" height="1254" decoding="async" />
      <p class="prize-value">€20<span>AI-tokens per winnaar</span></p>
    </div>
  </section>
  <figure v-if="!compact" class="prize-certificate">
    <a :href="pdf" target="_blank" rel="noopener" aria-label="Open de prijsbon als PDF">
      <img :src="withBase('/prijzen/prijsbon.png')" alt="Tokens of Glory: de TestCoders-prijsbon van €20, met invulvelden voor winnaar, team en datum" width="1600" height="1132" loading="lazy" decoding="async" />
    </a>
    <figcaption>Voor ieder winnend teamlid een eigen prijsbon. Klik om de PDF te openen.</figcaption>
  </figure>
</template>

<style scoped>
.token-prize { --prize-blue: #0a57a4; display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); gap: 1.5rem; margin: 2rem 0; padding: 1.75rem; border: 1px solid #c5d7e9; border-radius: 1rem; color: #1c1a18; background: #f7f9fc; }
.prize-command { font-family: ui-monospace, monospace; font-size: .875rem; color: var(--prize-blue); }
.token-prize h2 { border: 0; margin: .5rem 0 1rem; padding: 0; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -.05em; line-height: 1.05; color: var(--prize-blue); }
.token-prize h2 span { color: #e8402a; }
.prize-copy p { font-size: 1rem; line-height: 1.7; }
.prize-copy .prize-tagline { font-weight: 700; line-height: 1.5; }
.prize-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; margin-top: 1.5rem; }
.prize-button { display: inline-block; padding: .65rem 1rem; border-radius: .5rem; background: var(--prize-blue); color: #fff; font-weight: 600; text-decoration: none; }
.prize-button:hover { background: #073f78; color: #fff; }
.prize-download { color: #073f78; font-size: .875rem; text-underline-offset: .2em; }
.prize-art { display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 0; }
.prize-badge { color: #073f78; font-family: ui-monospace, monospace; font-size: .875rem; text-align: center; }
.prize-art img { width: 100%; max-width: 13rem; height: auto; }
.prize-value { margin: .25rem 0 0; color: var(--prize-blue); font-size: 3rem; font-weight: 800; line-height: 1.1; text-align: center; }
.prize-value span { display: block; margin-top: .35rem; color: #56524d; font-size: .875rem; font-weight: 400; }
.prize-certificate { margin: 2rem 0; }
.prize-certificate img { border: 1px solid #d8d5ce; border-radius: .75rem; width: 100%; height: auto; }
.prize-certificate figcaption { margin-top: .75rem; font-size: .875rem; color: var(--vp-c-text-2); line-height: 1.6; }
.token-prize a:focus-visible, .prize-certificate a:focus-visible { outline: 3px solid #e8402a; outline-offset: 4px; }
@media (max-width: 600px) {
  .token-prize { grid-template-columns: 1fr; padding: 1.25rem; }
  .prize-art { border-top: 1px solid #c5d7e9; padding-top: 1.25rem; }
  .prize-art img { max-width: 11rem; }
}
</style>
