<?php

	require_once ('connect.php');
	
	//把传递过来的信息进行入库
	
	if (!isset($_REQUEST['newsTitle']) || empty($_REQUEST['newsTitle'])
		|| !isset($_REQUEST['newsContent']) || empty($_REQUEST['newsContent'])
		|| !isset($_REQUEST['newsDate']) || empty($_REQUEST['newsDate'])
		|| !isset($_REQUEST['newsImgPath']) || empty($_REQUEST['newsImgPath'])) {
		echo '{"success":false,"msg":"参数错误,表单信息填写不全。"}';
		return;
	} else {
		$newsType = $_REQUEST['newsType'];
		$newsTitle = addslashes(htmlspecialchars($_REQUEST['newsTitle']));
		$newsContent = addslashes(htmlspecialchars($_REQUEST['newsContent']));
		$newsDate = $_REQUEST['newsDate'];
		$newsImgPath = addslashes(htmlspecialchars($_REQUEST['newsImgPath']));
	
		//将数据插入到数据库
		$sql = "INSERT INTO news(newsType,newsTitle,newsContent,newsDate,newsImgPath) VALUES ('$newsType','$newsTitle','$newsContent','$newsDate','$newsImgPath')";
	
		$result = mysql_query($sql);
	
		if ($result) {
			echo '{"success":true,"msg":"添加成功！"}';
		} else {
			echo '{"success":false,"msg":"参数错误，请联系管理员！"}';
		}
	
		echo mysql_error();
	
	}
?>
