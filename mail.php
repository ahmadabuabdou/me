<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$subject= $_POST["subject"];
$message= $_POST['message'];

$to = "ahmad.a.k.abuabdou@gmail.com";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: " . $email . "\r\n" .;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    echo 'Your message has been sent.';
}
?>
