<?php 

	require_once('connect.php');
	
	$newsType = $_REQUEST['newsType'];
	
	$dataList = "select * from news where newsType = '$newsType'"; 
	
	$query = mysql_query($dataList);
	if($query &&mysql_num_rows($query)){
		while($row = mysql_fetch_assoc($query)){
			$data[] = $row;
		}
		print_r(json_encode($data));
	}
	
?>