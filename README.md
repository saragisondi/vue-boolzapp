**Boolzapp**
=====

### **Milestone 1** <br>
- **Replica della grafica** con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse;
- **Visualizzazione dinamica della lista contatti:** tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

### **Steps**:

1. Creo il colore dello sfondo utilizzando 'Gradient';
2. Creo un container all'interno del quale creo un aside per inserire tutti i contatti e l'altra parte per inserire i sms;
3. Creo una lista in html e un array di oggetti in js che collegherò poi con un ciclo for per visualizzarli in pagina;
4. Ogni oggetto sarà un utente con all'interno il nome, l'avatar, se è online oppure no e il sms.
5. Ogni sms sarà a sua volta un array di oggetti che conterrà la data e l'ora del messaggio, il testo del messaggio e se è stato inviato oppure no.
6. Creo le classi per i messaggi per dargli il colore e la posizione.


### **Milestone 2** <br>
- **Visualizzazione dinamica dei messaggi:** tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione;
- **Click sul contatto** mostra la conversazione del contatto cliccato;

### **Steps**:
1. Creo una classe active per gli elementi della lista;
2. Creo un contatore per collegare i sms ad ogni singolo contatto;
3. Creo una funzione che al click dell'utente mi stampa in pagina i sms e i dati del contatto in alto;

### **Milestone 3** <br>
**Aggiunta di un messaggio:** l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
**Risposta dall’interlocutore:** ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

### **Steps**:
1. Creo un messaggio vuoto che collego all'input e al tasto enter in modo che stamperà quello che scrivo;
2. Creo una timing function dove all'interno creo una costante con il messaggio 'ok';

### **Milestone 4** <br>
**Ricerca utenti:** scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

### **Steps**:
1. collego con il v-model l'input alla lista dei contatti;
