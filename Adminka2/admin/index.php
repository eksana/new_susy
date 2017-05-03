<?php 
//очищаем авторизацию при выходе из админки
if($_GET["p"]=='exit') {
session_start();
$_SESSION = array();
session_destroy();
header('Location: ../index.php');
}
// Начинаем сессию и вход в кабинет
session_start(); 
$access = array(); 
$access = file("pass.php"); 
$login = trim($access[1]); 
$passw = trim($access[2]); 
if(!empty($_POST['enter'])) 
{ 
$_SESSION['login'] = $_POST['login']; 
$_SESSION['passw'] = $_POST['passw']; 
} 
if(empty($_SESSION['login']) or 
$login != $_SESSION['login'] or 
$passw != $_SESSION['passw'] ) 
{ 
?> 
<center> <form action=index.php method=post> 
Логин <input class=input name=login value=""> 
Пароль <input class=input name=passw value=""> 
<input type=hidden name=enter value=yes> 
<input class=button type=submit value="Вход"> </center> 
<?php die; } 
// на данном этапе мы реализовали авторизацию, далее мы создаем элементы, которые будут видны администратору, если он введет правильный пароль
?>
<?php 
$file_txt="../config/config.ini"; //путь к файлу настроек
$otp=$_REQUEST['otp'];
$txt=$_REQUEST['txt'];
if(isset($otp)){
$fopen=fopen($file_txt,"w");
fputs($fopen,$txt);
fclose($fopen);
header("location: http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']);
exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
</head>
<body>
<form name=forma method=post action="">
<textarea name=txt rows=30 cols=100><?php @include($file_txt);?></textarea><br><br>
<input type=submit name=otp value=Сохранить>
</form>
<h1>Вы в админке<br><a href="../index.php?p=exit">ВЫЙТИ</a></h1>
</body>
</html>