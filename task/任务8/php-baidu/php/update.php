<?php

	require_once ('connect.php');
	
	if (!isset($_REQUEST['newsTitle']) || empty($_REQUEST['newsTitle'])
		|| !isset($_REQUEST['newsContent']) || empty($_REQUEST['newsContent'])
		|| !isset($_REQUEST['newsDate']) || empty($_REQUEST['newsDate'])
		|| !isset($_REQUEST['newsImgPath']) || empty($_REQUEST['newsImgPath'])) {
		echo '{"success":false,"msg":"参数错误,表单信息填写不全。"}';
		return;
	}else{
		$id = $_REQUEST['id'];
		$newsType = $_REQUEST['newsType'];
	 	$newsTitle = addslashes(htmlspecialchars($_REQUEST['newsTitle']));
	 	$newsContent = addslashes(htmlspecialchars($_REQUEST['newsContent']));
	 	$newsDate = $_REQUEST['newsDate'];
	 	$newsImgPath = addslashes(htmlspecialchars($_REQUEST['newsImgPath']));
		
		$sql = "UPDATE news SET newsType='$newsType',newsTitle='$newsTitle',newsContent='$newsContent',newsDate='$newsDate',newsImgPath='$newsImgPath' WHERE id='$id'";
		

		$result = mysql_query($sql);
	
		if ($result) {
			echo '{"success":true,"msg":"修改成功！"}';
		} else {
			echo '{"success":false,"msg":"参数错误，请联系管理员！"}';
		}
	
		echo mysql_error();
		
	}
	
	
?>