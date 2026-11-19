const formHosts = new Set(['forms.office.com', 'forms.cloud.microsoft'])

// Embed uitsluitend een Microsoft Forms-antwoordformulier, nooit een beheer-
// of resultatenlink. Een ontbrekende/onbruikbare URL houdt stemmen gesloten.
export function getVotingForm(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null
  try {
    const url = new URL(raw.trim())
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return null
    if (!formHosts.has(url.hostname)) return null
    if (url.pathname.toLowerCase() !== '/pages/responsepage.aspx') return null
    if (!url.searchParams.get('id')?.trim()) return null
    url.hash = ''
    const directUrl = new URL(url)
    directUrl.searchParams.delete('embed')
    url.searchParams.set('embed', 'true')
    return { embedUrl: url.href, directUrl: directUrl.href }
  } catch {
    return null
  }
}
