import test from 'node:test'
import assert from 'node:assert/strict'
import { getVotingForm } from '../docs/.vitepress/voting.mjs'

test('zonder formulier blijft de stemming gesloten', () => {
  for (const value of ['', '   ', null, undefined, {}, 42]) assert.equal(getVotingForm(value), null)
})

test('normaliseert een echte response-URL en bewaart formulierparameters', () => {
  const form = getVotingForm(' https://forms.office.com/Pages/ResponsePage.aspx?id=example&lang=nl#section ')
  const embed = new URL(form.embedUrl)
  assert.equal(embed.searchParams.get('id'), 'example')
  assert.equal(embed.searchParams.get('lang'), 'nl')
  assert.equal(embed.searchParams.get('embed'), 'true')
  assert.equal(embed.hash, '')
  assert.equal(new URL(form.directUrl).searchParams.has('embed'), false)
})

test('ondersteunt de Microsoft cloud-host en overschrijft embed=false', () => {
  const form = getVotingForm('https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=test&embed=false')
  assert.equal(new URL(form.embedUrl).searchParams.get('embed'), 'true')
})

test('sluit onveilige, onvolledige, beheer- en resultatenlinks uit', () => {
  for (const value of [
    'javascript:alert(1)', '//forms.office.com/Pages/ResponsePage.aspx?id=x',
    'http://forms.office.com/Pages/ResponsePage.aspx?id=x',
    'https://forms.office.com.evil.example/Pages/ResponsePage.aspx?id=x',
    'https://user:password@forms.office.com/Pages/ResponsePage.aspx?id=x',
    'https://forms.office.com:8443/Pages/ResponsePage.aspx?id=x',
    'https://forms.office.com/Pages/DesignPageV2.aspx?id=x',
    'https://forms.office.com/Pages/AnalysisPage.aspx?id=x',
    'https://forms.office.com/Pages/ResponsePage.aspx',
    'https://forms.office.com/Pages/ResponsePage.aspx?id=%20',
    'https://forms.office.com/r/shortlink',
  ]) assert.equal(getVotingForm(value), null, value)
})
