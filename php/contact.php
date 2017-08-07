<?php
require_once('inc/environment-vars.php');
require('../vendor/autoload.php');

// hide all basic notices from PHP
error_reporting(E_ALL ^ E_NOTICE); 

use Mailgun\Mailgun;

function getMailGunClient($isPrivate = true){
    if($isPrivate){
        return new Mailgun(MG-API-PRI-KEY);
    }else{
        return new Mailgun(MG-API-PUB-KEY);
    }
}

function sendMailGunEmail($subject, $body, $email){
    try{

    	//$client = getMailGunClient();

    	$client = new Mailgun(MG-API-PRI-KEY, new \Http\Adapter\Guzzle6\Client());

        $res = $client->sendMessage(MG-DOMAIN, array(
                                                        'from'          => NO-REPLY-FROM, 
                                                        'h:Reply-To'    => $email,
                                                        'to'            => MAIL-TO, 
                                                        'subject'       => $subject, 
                                                        'html'          => $body
                                                    )
                                    );
        
	    return $res;
        
    }
    catch(Exception $e){
        throw new Exception($e->getMessage());
    }
}

if( isset($_POST['msg-submitted']) ) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	// server validation
	if( trim($name) === '' ) {
		$nameError = 'Please provide your name.';
		$hasError = true;
	}

	if( trim($subject) === '' ) {
		$subject = "No Subject Submitted";
	} else {
		if( function_exists( 'stripslashes' ) ) {
			$subject = stripslashes( trim( $subject ) );
		}
	}

	if( trim($email) === '' ) {
		$emailError = 'Please provide your email address.';
		$hasError = true;
	} else if( !preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($email)) ) {
		$emailError = 'Please provide valid email address.';
		$hasError = true;
	}

	if( trim($message) === '' ) {
		$messageError = "Please provide your message.";
		$hasError = true;
	} else {
		if( function_exists( 'stripslashes' ) ) {
			$message = stripslashes( trim( $message ) );
		}
	}
		
	if(!isset($hasError)) {
		
		$body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nMessage: $message";
		$subject = 'New Submitted Message From: ' . $name;

		sendMailGunEmail($subject, $body, $email);
		
		$message = 'Thank you ' . $name . ', your message has been submitted.';
		$result = true;
	
	} else {

		$arrMessage = array( $nameError, $emailError, $messageError );

		foreach ($arrMessage as $key => $value) {
			if( !isset($value) )
				unset($arrMessage[$key]);
		}

		$message = implode( '<br/>', $arrMessage );
		$result = false;
	}

	header("Content-type: application/json");
	echo json_encode( array( 'message' => $message, 'result' => $result ));
	die();
}


?>