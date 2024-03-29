function count() {
	var Num1 = document.getElementById('num1').value - 0;
	var Num2 = document.getElementById('num2').value - 0;
	var Oper = document.getElementById('operator').value;
	var Sum = document.getElementById('sum');
	var add;
	

	
	if (Oper == '+') {
		
		add = accAdd(Num1, Num2);
		
	} else if (Oper == '-') {
		
		add = Subtr(Num1, Num2);
		
	} else if (Oper == '*') {
		
		add = accMul(Num1, Num2);
		
	} else if (Oper == '/') {

		if (Num2 == 0) {
			alert("您输入的数字有误，除数不能为0，请重新输入！");
		} else {

			add = accDiv(Num1, Num2);
		}

	} else {
		alert('您输入的数值有误，请重新输入');
	}
	Sum.setAttribute("value", add);
}

//加法函数，用来得到精确的加法结果
//说明：JavaScript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。 
Number.prototype.add = function(arg) {
	return accAdd(arg, this);
};
//减法函数
function Subtr(arg1, arg2) {
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	//last modify by deeka
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。 
Number.prototype.sub = function(arg) {
	return Subtr(this, arg);
};
//乘法函数
function accMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length;
	} catch (e) {}
	try {
		m += s2.split(".")[1].length;
	} catch (e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。 
Number.prototype.mul = function(arg) {
	return accMul(arg, this);
};
//除法函数
function accDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length;
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length;
	} catch (e) {}
	with(Math) {
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2) * pow(10, t2 - t1);
	}
}
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。 
Number.prototype.div = function(arg) {
	return accDiv(this, arg);
};