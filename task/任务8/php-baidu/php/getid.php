<?php

	require_once ('connect.php');
	
	$id = $_REQUEST['id'];
	
	$sql = "select * from news where id=$id";
	
	$query = mysql_query($sql, $con);
	
	if ($query && mysql_num_rows($query)) {
		while ($row = mysql_fetch_assoc($query)) {
			$data[] = $row;
		}
		print_r(json_encode($data));
	}
?>