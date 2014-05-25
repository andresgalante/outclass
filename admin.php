<?php
include("functions.php");
verifyLogin();
include("header.php");
$rows = getResults();
?>


	<div class="container admin">

<div class="admin-header">
<a href="logout.php" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
<a href="export.php" class="btn btn-success pull-lrft"><span class="glyphicon glyphicon-download"></span> Export to Excel csv</a>
</div>

<h1>Contacts</h1>
<table class="table table-striped">
    <tr>
        <th>Id</th>
        <th>E-mail</th>
        <th>Contact Type</th>
    </tr>
<?php
foreach($rows as $row){
    echo "<tr>";
    foreach($row as $col){
        echo "<td>".$col."</td>";
    }
    echo "</tr>";
}
?>
</table>

</div><!-- container -->

<?php include("footer.php"); ?>