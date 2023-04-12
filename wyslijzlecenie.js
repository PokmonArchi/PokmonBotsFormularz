function sendMail(){
    let nick = document.getElementById("nick").value;
    let botName = document.getElementById('bot').value;
    let rodzajzlecenia = document.getElementById('select').value;
    let uwagi = document.getElementById('uwagi').value;
    let message = `Nick użytkownika: ${nick}\n Nazwa bota: ${botName}\n rodzaj zlecenia: ${rodzajzlecenia}\n Uwagi: ${uwagi}`;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "contact.pokmonbot@gmail.com",
        Password: "Poliki999",
        To:"contact.pokmonbot@gmail.com",
        From:`zleceniodawca@gmail.com`,
        Subject:"Zlecenie",
        Body: `${message}`
    }).then(alert("Udało się wysłać wiadomość!"));
}