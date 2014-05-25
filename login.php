<?php
include("functions.php");
if(isset($_POST["password"]) && $_POST["password"] == $GLOBALS['config']['admin_password']){
    login();
    redirect("admin.php");
    exit();
}
include("header.php");
?><html>

</html>
<form method="post">
    <label>Password:</label>
    <input type="password" name="password" />
    <input type="submit" value="Login" />
</form>
<?php include("footer.php"); ?>