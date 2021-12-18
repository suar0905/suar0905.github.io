<?php
	
	//Where will you get the forms' results?
	define("CONTACT_FORM", 'info@yourdomain.com');

	error_reporting (E_ALL ^ E_NOTICE);

	$post = (!empty($_POST)) ? true : false;

	if($post){
		
		$name = stripslashes($_POST['name']);
		$email = trim($_POST['email']);
		$message = stripslashes($_POST['message']);

		$error = '';

		
		if(!$error){
			
			$mail = mail(CONTACT_FORM, $name, $message,
				"From: ".$name." <".$email.">\r\n"
				."Reply-To: ".$email."\r\n"
				."X-Mailer: PHP/" . phpversion());

			if($mail){
				echo 'OK';
			}
		}
	}
?>