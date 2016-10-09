<?php

	header("Content-type:text/html;charset=utf-8");
	require_once ('connect.php');
	
	$id = $_REQUEST['id'];
	
	$sql = "DELETE FROM news WHERE id='$id'";
	
	$query = mysql_query($sql, $con);
	
	
	$arr = array(); 
	
	if($result){
		array_push($arr, array('statues'=>'add success','errorcode'=>'0'));
	}else{
		array_push($arr, array('statues'=>'add failed','errorcode'=>'1'));
	}
	
	echo json_encode($arr);
	echo mysql_error();
?>