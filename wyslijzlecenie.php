<?php
if($_SERVER['REQUEST_METHOD']==="POST"){
    $nick = $_POST['nick'];
    $select = $_POST['select'];
    $botName = $_POST['bot-nazwa'];
    $uwagi = $_POST['uwagi'];
    $adresat = "contact.pokmonbot@gmail.com";
    $temat = "Nowe zlecenie od ".$nick.".";
    $tresc = "Nick: ".$nick."\n";
    $tresc .= "Rodzaj zlecenia: " . $select . "\n";
    $tresc .= "Nazwa Bota: " . $botName . "\n\n";
    $tresc .= "Treść zlecenia: \n" . $uwagi;
    $naglowki = 'From: ' . $email . "\r\n";
    $naglowki .= 'Reply-To: ' . $email . "\r\n";
    $naglowki .= 'X-Mailer: PHP/' . phpversion();
    mail($adresat, $temat, $tresc, $naglowki);
    echo "Wiadomość została wysłana!";

}

?>