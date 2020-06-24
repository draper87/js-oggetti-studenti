// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
$(document).ready(function() {

  var studenteObj = {
    'nome': "Oliver",
    'cognome': "Benoit",
    'eta': 33
  }
  for (var key in studenteObj) {
      // console.log(studenteObj[key]);
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
  // for (var i = 0; i < studentiObj.length; i++) {
  //   console.log('Nome:' + studentiObj[i].nome + " Cognome:" + studentiObj[i].cognome);
  // }


  // Dare la possibilità all’utente attraverso 3 prompt di
  // aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var nomeUtente = prompt('Dimmi il tuo nome');
  var cognomeUtente = prompt('Dimmi il tuo cognome');
  var etaUtente = prompt('Dimmi la tua età');

  var nuovoStudenteObj = {
    'nome': nomeUtente,
    'cognome': cognomeUtente,
    'eta': etaUtente,
  }

  studentiObj.push(nuovoStudenteObj);
  // for (var i = 0; i < studentiObj.length; i++) {
  //   console.log('Nome:' + studentiObj[i].nome + " Cognome:" + studentiObj[i].cognome + " Età:" + studentiObj[i].eta);
  // }

  for (var i = 0; i < studentiObj.length; i++) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    var singoloStudente = studentiObj[i];
    var html = template(singoloStudente);

    $('.container').append(html);
  }


})
