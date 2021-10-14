<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject = $_POST['subject'];

$to = "ahmad.a.k.abuabdou@gmail.com";

$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message;

$headers = "From: noreply@ahmadabuabdou.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    echo "Your Message has Been Sent";
}
?>