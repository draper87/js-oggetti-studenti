// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studenteObj = {
  'nome': "Oliver",
  'cognome': "Benoit",
  'eta': 33
}
for (var key in studenteObj) {
    console.log(studenteObj[key]);
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studentiObj = [
  {
    'nome': 'Alessandro',
    'cognome': 'Bianchi',
    'eta': 30
  },
  {
    'nome': 'Filippo',
    'cognome': 'Rossi',
    'eta': 25
  },
  {
    'nome': 'Giacomo',
    'cognome': 'Terzi',
    'eta': 19
  },
  {
    'nome': 'Federico',
    'cognome': 'Benelli',
    'eta': 38
  }
]
for (var i = 0; i < studentiObj.length; i++) {
  console.log('Nome:' + studentiObj[i].nome + " Cognome:" + studentiObj[i].cognome);
}


// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
