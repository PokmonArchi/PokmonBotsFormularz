function sendMail(){
    let nick = document.getElementById('nick').value;
    let select = document.getElementById('select').value;
    let botName = document.getElementById('bot').value;
    let zlecenie = document.getElementById('uwagi').value;
    let wiadomosc = "Nick: "+nick+"\nRodzaj zlecenia: "+select+"\nNazwa Bota: "+botName+"\nTreść zlecenia: \n"+zlecenie;
fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + "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",
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    personalizations: [{
      to: [{
        email: 'contact.pokmonbot@gmail.com',
        name: 'Pokmon'
      }],
      subject: 'Zlecenie na Bota'
    }],
    from: {
      email: 'Wiktorek360@gmail.com',
      name: 'Bot'
    },
    content: [{
      type: 'text/plain',
      value: `${wiadomosc}`
    }]
  })
}).then(response => {
  console.log(response.status)
}).catch(error => {
  console.error(error)
})
}