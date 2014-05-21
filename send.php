<?php
include("functions.php");
if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $contact = array();
    $contact["email"] = $_POST["email"];
    saveContact($contact);
    sendMail($contact);

    if(!$_POST["ajax"])
    {
        redirect("index_ok.html");
    }
}
?>