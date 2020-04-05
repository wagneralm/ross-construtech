<?php

$nome = addcslashes($_POST['nome']);
$email = addcslashes($_POST['email']);
$telefone = addcslashes($_POST['telefone']);
$mensagem = addcslashes($_POST['mensagem']);

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

    echo("E-mail enviado com sucesso!");

}else{
    echo("O e-mail não pode ser enviado");
}

?>