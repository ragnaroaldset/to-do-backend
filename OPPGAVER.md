# Jenter og Teknologi

# Backend oppgaver

### Oppgave 1
**Lag til et POST endepunkt for å lagre oppgavene i databasen**
- For å lagre to-do oppgavene fra klienten (frontenden) i databasen så må vi legge til et endepunkt som sender dataen vår videre til databasen og lagrer den. Bruk funksjonen `postNewTask` for å gjøre det.
- Funksjonen `postNewTask` tar inn oppgaven (tasken) som et **parameter**.
- Tasken som skal sendes inn som parameter finner du i `req.body`, det vil si at du må skrive noe sånt som `const task = req.body`.
- Du må putte tasken inn i parantesene på funksjonskallet: `postNewTask(task)`.
- Dersom det blir implementert riktig skal du få det nyopprettede dokumentet tilbake fra databasen i `.then()` blokka. Sjekk at det funker med en konsoll log (`console.log()`).

### Oppgave 2
**Send en HTTP request til endepunktet for å se om du får dokumentet ditt tilbake**
1. Dette kan du gjøre via blant annet **postman**. Postman er allerede åpnet på PCen din.
	- Velg riktig HTTP metode, skriv inn urlen `http://localhost:1337/tasks`.
	- I body taben velger du raw.
	- På den lille blå dropdownlista som kommer til høyre velger du JSON.
	- Fyll inn en task (eksempel nedenfor) og send requesten. Hva får du tilbake?
2. Prøv å endre på routen `/tasks` til noe annet i koden, lagre fila, og send den samme requesten på nytt, hva skjer da? Endre til slutt routen tilbake til riktig route.

***Hint***
 - Hvis du ikke får noe tilbake fra requesten, sjekk at du ikke mangler en `return` på starten av koden din (se GET requesten ovenfor).


### Bonus
**Lag til et DELETE endepunkt for å slette oppgaver fra databsen**
1. Det ligger en funksjon klar for å få til dette. Klarer du å gjette hvilken funksjon du kan bruke? Funksjonen tar inn oppgaven (tasken) som et **parameter**. Det betyr at du må putte oppgaven inn i parantesene på funksjonskallet: `myFunctionName(task)`.
2. Prøv å send en request og se om oppgaven er blitt slettet (se oppgave 2).


### Eksempeltask:
```
{
	"title": "Learn programming",
	"completed": false
}
