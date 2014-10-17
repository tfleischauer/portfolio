<?php



function sendContactMail()

{	

	if(!isset($_POST["submit"])) return false;



	if(!isset($_POST["email"]) || !isset($_POST["first-name"]) || !isset($_POST["last-name"]) || !isset($_POST["subject"]) || !isset($_POST["message"])) return false;

	if($_POST["email"] == "" || $_POST["first-name"] == "" || $_POST["last-name"] == "" || $_POST["subject"] == "" || $_POST["message"] == "") return false;

	
	// DreamHost email or gmail addresses send mail...
	// $ToEmail = 'troy@troyfleischauer.com'; 
	$ToEmail = 'tfleischauer@gmail.com';
	
	// Outlook and Hotmail do not allow form to send mail for some reason
	// $ToEmail = 'tfleischauer@outlook.com'; 
	// $ToEmail = 'troyfleischauer@hotmail.com'; 
	
	// Portia's original default $EmailSubject
	// $EmailSubject = 'Web 130: A13 Contact Form'; 
		
	$EmailSubject = "".$_POST['subject']."\r\n";
	
	// On DreamHost, one can not use a From: field from any other email address other than from DreamHost
	// $mailheader = "From: ".$_POST["email"]."\r\n"; 
	
	// DreamHost email address only when using 'From: ' on DreamHost, like so ... 
	$mailheader = 'From: portfolio-'.'troy@troyfleischauer.com'."\r\n";

	// without the period before the equal sign, emails received will be from
	// trofle1@bluebeard.dreamhost.com instead of troy@troyfleischauer.com 
	$mailheader .= "Reply-To: ".$_POST['email']."\r\n"; 

	$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

	$MESSAGE_BODY = "Name: ".$_POST['first-name'] ." " . $_POST["last-name"]."<br>"; 

	$MESSAGE_BODY .= "Email: ".$_POST['email']."<br>"; 

	$MESSAGE_BODY .= "Message: ".nl2br($_POST['message'])."<br>"; 

	

	return mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 

}

usleep(1000000);



if(sendContactMail())

{

	// echo "YAY You sent a mail";
	// showMessage(); //jQuery function
	// header("Location: index.html#page-contact");
	header('Location: thankyou.html'); // replace "thx.html" with the name and path to your actual thank you page

}	

else

{

	echo "Sorry, error sending email";	

}

?>