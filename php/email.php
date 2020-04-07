<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['mensagem']);
 
$to = "eng.renatorosario@rossconstrutech.com";

$subject = "Contato - Contrutora Ross";

$body = "Nome: ".$nome. "\r\n".
        "E-mail: ".$email."\r\n".
        "Telefone: ".$telefone."\r\n".
        "Mensagem: ".$mensagem;

$header =   "From: eng.renatorosario@rossconstrutech.com"."\r\n".
            "Reply-to:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    header('Location: ../confirmacao.html');

}else{
    echo("O e-mail não pode ser enviado");
}

?>