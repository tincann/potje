# Potje
## 24h CodeITING
12-13 november 2014
### Doel
Gezamenlijk betalen makkelijker maken
(anoniem betalen eventueel mogelijk maken)
op het moment voor ING, maar hopelijk later voor alle banken om zo een meer open banken-klimaat voor elkaar te krijgen.
### Concept
- Samen betalen via een tijdelijke, gezamenlijke rekening
- 2-10 mensen
- bankonafhankelijk
- via mobiel en contactloos betalen, of handmatige invoer voor contante betalingen
- anoniem, via ‘proxy’ rekening

### Hoe werkt het?
1. Een persoon, Bob, activeert zijn account door (via de commonAPI) zijn bankrekening te authenticeren. 
  * Nu met ING en hopelijk later ook voor andere banken
2.Bob maakt een nieuwe proxy rekening aan en geeft aan hoeveel geld er op komt te staan.
  * Hij wordt dan de Moderator van deze rekening.
3. Bob nodigt zijn vrienden, Alice en Charles, uit (via email) om een rekening te delen.
4. Zijn vrienden maken een account aan (zie stap 1) 
5. Zijn vrienden accepteren de uitnodiging en delen in het bedrag op de rekening
6. Iedereen kan transacties toevoegen door aan een derde partij te betalen via de app 
  * (via mobiel betalen) of door handmatig betaling te loggen. 
  * Door de CommonAPI wordt het geld vanaf de proxy rekening betaald aan de derde partij
7. Iedereen kan de rekening opwaarderen door geld over te maken naar de rekening. Ze krijgen dan zelf tegoed op de rekening

Verder nog

* Als de rekening leeg is, kan je er niet meer mee betalen totdat iemand er meer geld op zet (zie stap 7)
* De moderator (Bob) kan de rekening opheffen, waarna de resterende balans van de rekening wordt verrekend onder de rekeninghouders. Als er nog geld tegoed is, wordt dit terugggestort bij de desbetreffende persoon. 
* Je kan een transactie ‘aanvechten’ en dan moet iedereen het er mee eens zijn om het probleem op te lossen. 

Deze nieuwe proxy rekening is te benaderen via CommonAPI. Later kunnen andere banken hierop inhaken. Dus het werkt straks hopelijk ook voor alle banken.

### Motivatie
het maakt WieBetaaltWat of Splitwise en alle overhead hierbij onnodig.
groepsgemak van WhatsApp
opwaardeergemak van de OV-chipkaart
controle en transparatie over uitgaven
alleen met vertrouwde mensen: 

### (Technische) uitdagingen
- kunnen we een (anonieme) rekening aanmaken? hoe zit het met betaal/spaarrekeningen
- hoe nodigen we andere rekeningen uit?
- geregistreerde gebruikers uitnodigen, bij registratie bij de app moet je je rekening authenticeren
- alle banken moeten ondersteund worden
- waar (welke bank) hosten we de rekeningen?
  - ING want daar hebben we de CommonAPI
- veiligheid 
- adapatie voor winkels en hoe ver is mobiel betalen eigenlijk?

### Verdere vragen
- Moet de moderator een maximum bedrag toestaan?
- Speelt het altijd quitte met geld? en wat gebeurt er als er mensen nog credit hebben bij bepaalde mensen? verrekenen ze dat onderling? kan je via de authenticatie nog 1 op 1 afhandelen?


### Bekende problemen, niet opgelost in de hackathon
- Er missen nog best wat velden uit het database model
- Bijna alle veiligheidsprotocollen moeten nog geschreven worden
- CommonAPI connection is available, but Authentication needs to be integrated fully
- Testing, testing, testing...
- Documentation and such...
