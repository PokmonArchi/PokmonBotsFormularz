<?php
$nick = $_POST['nick'];
$botName = $_POST['bot-nazwa'];
$info = $_POST['uwagi'];
$rodzajzlecenia = $_POST['select'];
$message = `Nick użytkownika: $nick\nRodzaj Zlecenia: $rodzajzlecenia\nNazwa bota: $botName\nUwagi:\n$info`;
mail("contact.pokmonbot@gmail.com", "Zlecenie na bota", $message);
echo "Udało się wysłać maila!";
?>