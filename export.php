<?php
include("functions.php");
verifyLogin();
excelHeaders();
$rows = getResults();
outputCSV($rows);
/*
foreach($rows as $row)
{
    $first = true;
    foreach($row as $value)
    {
        if(!$first)
        {
            echo ";";
        }
        else
        {
            echo
        }
        echo

    }
    echo "\r\n";
}*/
?>