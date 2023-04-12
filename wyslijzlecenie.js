function sendMail(){
    let nick = document.getElementById("nick").value;
    let botName = document.getElementById('bot').value;
    let rodzajzlecenia = document.getElementById('select').value;
    let uwagi = document.getElementById('uwagi').value;
    let message = `Nick użytkownika: ${nick}\n Nazwa bota: ${botName}\n rodzaj zlecenia: ${rodzajzlecenia}\n Uwagi: ${uwagi}`;
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "a9ffe2f7e594d3",
        Password: "fec72bf71c142c",
        To:"to@example.com",
        From:`from@example.com`,
        Subject:"Zlecenie",
        Body: `${message}`
    }).then(alert("Udało się wysłać wiadomość!"));
    console.log(Email);
}