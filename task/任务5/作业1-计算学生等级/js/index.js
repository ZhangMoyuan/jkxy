function showLevel() {
	var Num = document.getElementById('num').value;

	//	if (Num == null || Num == '') {
	//
	//		alert('您输入的分数有误，请重新输入');
	//
	//	} else if (Num >= 90 && Num <= 100) {
	//		alert('一等生');
	//
	//	} else if (Num >= 80 && Num < 90) {
	//
	//		alert('二等生');
	//
	//	} else if (Num >= 70 && Num < 80) {
	//
	//		alert('三等生');
	//
	//	} else if (Num >= 60 && Num < 70) {
	//
	//		alert('四等生');
	//
	//	} else if (Num >= 50 && Num < 60) {
	//
	//		alert('五等生');
	//
	//	} else if (Num >= 40 && Num < 50) {
	//
	//		alert('六等生');
	//
	//	} else if (Num >= 30 && Num < 40) {
	//
	//		alert('七等生');
	//
	//	} else if (Num >= 20 && Num < 30) {
	//
	//		alert('八等生');
	//
	//	} else if (Num >= 10 && Num < 20) {
	//
	//		alert('九等生');
	//
	//	} else if (Num >= 0 && Num < 10) {
	//
	//		alert('十等生');
	//
	//	} else {
	//
	//		alert('您输入的分数有误，请重新输入');
	//	}

	switch (true) {
		case Num == null || Num == '':
			alert('您输入的分数有误，请重新输入');
			break;

		case Num >= 90 && Num <= 100:
			alert('一等生');
			break;

		case Num >= 80 && Num < 90:
			alert('二等生');
			break;

		case Num >= 70 && Num < 80:
			alert('三等生');
			break;

		case Num >= 60 && Num < 70:
			alert('四等生');
			break;

		case Num >= 50 && Num < 60:
			alert('五等生');
			break;

		case Num >= 40 && Num < 50:
			alert('六等生');
			break;

		case Num >= 30 && Num < 40:
			alert('七等生');
			break;

		case Num >= 20 && Num < 30:
			alert('八等生');
			break;

		case Num >= 10 && Num < 20:
			alert('九等生');
			break;

		case Num >= 0 && Num < 10:
			alert('十等生');
			break;

		default:
			alert('您输入的分数有误，请重新输入');
			break;
	}
}