<?php
session_start();
include("config.php");

/*
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `contacttype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;
 */

function connect(){
    $conn  = mysql_connect($GLOBALS['config']['db_host'],$GLOBALS['config']['db_user'],$GLOBALS['config']['db_password']);
     mysql_select_db($GLOBALS['config']['db_name']);
    return $conn;
}

function getResults()
{
    $conn  = connect(); // coonect
    $result = mysql_query("SELECT * FROM contacts");
    $rows =  array();
    while($row = mysql_fetch_assoc($result)){
        array_push($rows,$row);
    }
    mysql_freeresult($result);
    mysql_close($conn);
    return $rows;
}

function verifyLogin(){
    if(!$_SESSION["loggedin"]){
        redirect("login.php");
     }
}

function excelHeaders(){
    header("Content-type: text/csv");
    header("Content-Disposition: attachment; filename=contacts.csv");
    header("Pragma: no-cache");
    header("Expires: 0");
}

function outputCSV($data) {
    $outstream = fopen("php://output", "w");
    function __outputCSV(&$vals, $key, $filehandler) {
        fputcsv($filehandler, $vals); // add parameters if you want
    }
    array_walk($data, "__outputCSV", $outstream);
    fclose($outstream);
}


function sendMail($contact)
{
    if($GLOBALS["config"]["disable_mail"])
    {
        return;
    }

    $to      = $GLOBALS["config"]["report_email"];
    $subject = 'New contact recived';
    $message = "Email:  {$contact['email']} \r\n ContactType = {$contact['contacttype']}";

    $headers = 'From: '.$GLOBALS['config']['webmaster_email']. "\r\n" .
        'Reply-To: ' .$GLOBALS['config']['webmaster_email']. "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    return;
}

function saveContact($contact){
    $conn  = connect(); // coonect
    $query = "INSERT INTO contacts (email) VALUES ("
        .'"'.mysql_real_escape_string($contact["email"]).'"'
        .');';
    mysql_query($query);
    mysql_close($conn);
}

function saveContactDetails($contact){
    $conn  = connect(); // coonect
    $query = 'UPDATE contacts SET contacttype =  "'.mysql_real_escape_string($contact["contacttype"]).'"'
        .' WHERE email = "'.mysql_real_escape_string($contact["email"]).'";';
    mysql_query($query);
    mysql_close($conn);
}

function redirect($filename)
{
    header( 'Location: '.$GLOBALS["config"]["baseurl"].'/'.$filename);
    exit();
}

function login(){
    $_SESSION["loggedin"] = true;
}

function logout()
{
    $_SESSION["loggedin"] = false;
    session_destroy();
}
