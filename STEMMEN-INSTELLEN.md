# Prijsbon en stemmen activeren

De wijziging voegt een prijsblok toe aan `/mvp/`, een pagina `/stemmen`, navigatielinks en de printbare prijsbon. De bestaande MVP-onderwerpen blijven behouden.

## Eénmalig: het echte stemformulier

GitHub Pages is statisch. De stemmen worden daarom door Microsoft Forms opgeslagen, niet in localStorage of in deze repository. Er staat geen nep-teller op de site.

1. Maak in het TestCoders-werkaccount een **formulier**, geen quiz, met titel `TestCoders AI-hackathon — jouw favoriete project`.
2. Voeg één verplichte **keuzevraag** toe: `Welk project is jouw favoriet?`. Zet meerdere antwoorden uit. Vul alleen de daadwerkelijk deelnemende projecten in, bij voorkeur als `Project — teamnaam`. De MVP-catalogus is geen lijst van definitieve teams.
3. Stel in dat alleen mensen uit de organisatie mogen antwoorden en zet **één antwoord per persoon** aan. Dit vereist een passend Microsoft 365-werkaccount; bij gasten of ontbrekende licenties moet de organisatie een andere stemmethode kiezen. Eén stem per persoon is een Forms-instelling, geen garantie van deze website.
4. Laat naamregistratie uit als de organisatie de stemkeuze niet aan namen wil koppelen. Deel geen resultatenlink en wijs de formulierbeheerder aan die de uitslag aan het einde uitleest. **De publieksstem bepaalt de winnaar: het team met de meeste stemmen wint.** Ieder lid van dat team ontvangt €20 aan AI-tokens. Spreek vóór het openen van de stemming nog af hoe een gelijkspel wordt opgelost.
5. Kies **Antwoorden verzamelen > Insluiten**. Kopieer alleen de volledige `src`-URL van de iframe, bijvoorbeeld de URL die eindigt op `/Pages/ResponsePage.aspx?id=…&embed=true`. Gebruik geen verkorte `/r/`-URL, beheerderslink of resultatenlink.
6. Vul deze URL in als `formUrl` in `docs/.vitepress/voting.config.mjs`. Laat `formUrl` leeg zolang het formulier niet klaar is. De site toont dan eerlijk `Stemmen is nog niet geopend.`
7. Publiceer via de bestaande GitHub Pages-workflow. Open stemmen pas na alle demo's door in Forms **Antwoorden accepteren** aan te zetten; sluit daar ook de stemming weer. Forms toont zijn eigen gesloten-melding in het formulier. De website heeft bewust geen afzonderlijke schakelaar die met Forms uit de pas kan lopen.

Het formulier en de stemgegevens blijven in het TestCoders-account. Gebruik geen toegangstokens of wachtwoorden in de frontend. Het antwoordformulier is een deelbare URL; Microsoft voert de toegangscontrole uit.

## Controle voor de hackathon

- `npm ci`, `npm run test:voting` en `npm run docs:build`.
- Controleer `/hackathon/mvp/` en `/hackathon/stemmen` op telefoon en desktop, in licht en donker thema.
- Zonder formulier: geen iframe, geen stemknop die iets lijkt op te slaan, geen stembevestiging.
- Met formulier: laat twee verschillende collega's vanaf verschillende apparaten een proefstem uitbrengen. Controleer in Forms dat beide stemmen zijn opgeslagen en dat dezelfde persoon niet opnieuw kan stemmen. Verwijder de proefreacties vóór de echte stemming.
- Controleer de toegangsinstellingen met een account dat niet bij TestCoders hoort.
- Test de link `Open het stemformulier in een nieuw tabblad` als de browser aanmelden in een iframe blokkeert.
- Test gesloten stemming in Forms. Lees de uitslag alleen vanuit het beheerdersaccount uit.
- Controleer of de prijsbon opent en gedownload kan worden.

Zonder een echt formulier en deze twee-apparatencontrole is de stemming niet gereed voor gebruik. De bouw- en URL-tests verifiëren de integratie, niet de inrichting of beschikbaarheid van Microsoft Forms.

## Bronnen

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Formulier insluiten en delen: https://support.microsoft.com/en-us/forms/send-a-form-and-collect-responses
- Eén antwoord per persoon en andere instellingen: https://support.microsoft.com/en-us/forms/adjust-your-form-or-quiz-settings-in-microsoft-forms
