<?php
include("functions.php");
if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $contact = array();
    $contact["email"] = $_POST["email"];
    $contact["name"] = $_POST["name"];
    $contact["message"] = $_POST["message"];
    sendSupportMail($contact);

    if(!$_POST["ajax"])
    {
        redirect("support_ok.html");
    }
}