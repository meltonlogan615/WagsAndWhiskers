<?php
  $name = $_POST['name'];
  $serviceAddress = $_POST['serviceAddress'];
  $cityStateZip = $_POST['cityStateZip'];
  $phone = $_POST['phone']
  $email = $_POST['email']

  if (empty($name)||empty($serviceAddress)||empty($cityStateZip)||empty($phone)||empty($email)) {
    echo "all fields are manditory";
    exit;
  }

  if (isInjected($email)) {
    echo "Invalid email";
    exit;
  }

  $email_from = "$email";
  $email_subject = "Round Up Test";
  $email_body = "Tester";

  $to = "meltonlogan@me.com";
  $headers = "test email from \r\n";
  $headers .= "reply to: $email\r\n";
  mail($to,$email_subject,$email_body,$headers)

  function IsInjected($str) {
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str)) {
    return true;
  } else {
    return false;
  }
}
?>