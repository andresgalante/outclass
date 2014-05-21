<?php
include("functions.php");
if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $contact = array();
    $contact["email"] = $_POST["email"];
    $contact["contacttype"] = $_POST["contacttype"];
    saveContactDetails($contact);
    sendMail($contact);
}
?>