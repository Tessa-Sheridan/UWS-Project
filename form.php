
<?php

  $_1 = $_POST['1'];
  $_2 = $_POST['2'];
  $_3 = $_POST['3'];
  $_4 = $_POST['4'];
  $_5 = $_POST['5'];
  $_6 = $_POST['6'];
  $_7 = $_POST['7'];
  $_8 = $_POST['8'];
  $_9 = $_POST['9'];
  $_10 = $_POST['10'];
  $_11 = $_POST['11'];
  $_12 = $_POST['12'];
  $_13 = $_POST['13'];
  $_14 = $_POST['14'];
  $_15 = $_POST['15'];
  $_16 = $_POST['16'];
  $_17 = $_POST['17'];
  $_18 = $_POST['18'];
  $_19 = $_POST['19'];
  $_20 = $_POST['20'];
  $_21 = $_POST['21'];
  $_22 = $_POST['22'];
  $_23 = $_POST['23'];
  $_24 = $_POST['24'];
  $_25 = $_POST['25'];
  $_26 = $_POST['26'];

// $to = 'tessa.sheridan9@gmail.com';
// $subject = 'UEQ'; 
$msg = "Begin" . $_1 ."\n";
$msg.= $_2 ."\n";
$msg.= $_3 ."\n";
$msg.= $_4 ."\n";
$msg.= $_5 ."\n";
$msg.= $_6 ."\n";
$msg.= $_7 ."\n";
$msg.= $_8 ."\n";
$msg.= $_9 ."\n";
$msg.= $_10 ."\n";
$msg.= $_11 ."\n";
$msg.= $_12 ."\n";
$msg.= $_13 ."\n";
$msg.= $_14 ."\n";
$msg.= $_15 ."\n";
$msg.= $_16 ."\n";
$msg.= $_17 ."\n";
$msg.= $_18 ."\n";
$msg.= $_19 ."\n";
$msg.= $_20 ."\n";
$msg.= $_21 ."\n";
$msg.= $_22 ."\n";
$msg.= $_23 ."\n";
$msg.= $_24 ."\n";
$msg.= $_25 ."\n";
$msg.= $_26 . "End" . "\n";

// $to = 'tessa.sheridan9@gmail.com';
// $subject = 'Hi';
// $msg = "what";


//   mail($to, $subject, $msg);


// $_1 . "\n",
// $_2 . "\n",
// $_3 . "\n",
// $_4 . "\n",
// $_5 . "\n",
// $_6 . "\n",
// $_7 . "\n",
// $_8 . "\n",
// $_9 . "\n",
// $_10 . "\n", 
// $_11 . "\n", 
// $_12 . "\n", 
// $_13 . "\n", 
// $_14 . "\n", 
// $_15 . "\n", 
// $_16 . "\n", 
// $_17 . "\n", 
// $_18 . "\n", 
// $_19 . "\n", 
// $_20 . "\n", 
// $_21 . "\n", 
// $_22 . "\n", 
// $_23 . "\n", 
// $_24 . "\n", 
// $_25 . "\n", 
// $_26 . "\n" 

$myfile = fopen("UEQdata.txt", "a");
fwrite($myfile, $msg);
fclose($myfile);

Echo "<html>";
Echo
"<title>Questionnaire</title>";
Echo
"<h1 style='text-align:center; font-family: sans-serif; margin-top: 50px;'>Thank you for participating </h1>";
Echo 
"<h2 style='text-align:center; font-family: sans-serif;'> You can now close this page </h2>";

  ?>