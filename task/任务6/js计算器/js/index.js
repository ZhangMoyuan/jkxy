var num = 0,
	result = 0,
	numshow = "0";
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 
function command(num) {
	var str = String(document.calculator.numScreen.value); //获得当前显示数据 
	str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str = str + String(num); //给当前值追加字符 
	document.calculator.numScreen.value = str; //刷新显示 
	operate = 0; //重置输入状态 
	quit = 0; //重置防止重复按键的标志 

	return str;
}

function dzero() {
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0"; 
	document.calculator.numScreen.value = str;
	operate = 0;
}


var dot = document.getElementById('dot');
 dot.onclick = function() {
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
	for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
		if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
	}
	str = str + ".";
	document.calculator.numScreen.value = str;
	operate = 0;
}


var remove = document.getElementById('remove');
remove.onclick = function() { //退格 
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? str : "";
	str = str.substr(0, str.length - 1);
	str = (str != "") ? str : "0";
	document.calculator.numScreen.value = str;
}


var clearscreen = document.getElementById('clearscreen')
clearscreen.onclick =  function() { //清除数据 
	num = 0;
	result = 0;
	numshow = "0";
	document.calculator.numScreen.value = "0";
}

var opppsite = document.getElementById('opposite');
opppsite.onclick =  function opposite() { //正负数
	var str = Number(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
	if (str != 0) {
		document.calculator.numScreen.value = -str;
	} else {
		document.calculator.numScreen.value = str;
	}

}
var reciprocal = document.getElementById('reciprocal');
reciprocal.onclick =function reciprocal() { //倒数
	var str = Number(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";

	if (str != 0) {

		document.calculator.numScreen.value = 1 / str;
	} else {
		document.calculator.numScreen.value = "error";
	}
	operate = 1;
}

var sqrt = document.getElementById('sqrt');
sqrt.onclick = function sqrt() { //开平方根
	var str = Number(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
	document.calculator.numScreen.value = Math.sqrt(str);
	operate = 1;
}

var plus = document.getElementById('plus');
plus.onclick = function plus() { //加法 
	calculate(); //调用计算函数 
	operate = 1; //更改输入状态 
	calcul = 1; //更改计算状态为加 
}

var minus = document.getElementById('minus');
minus.onclick = function minus() { //减法 
	calculate();
	operate = 1;
	calcul = 2;
}

var times = document.getElementById('times');
times.onclick = function times() { //乘法 
	calculate();
	operate = 1;
	calcul = 3;
}


var divide = document.getElementById('divide');
divide.onclick = function divide() { //除法 
	calculate();
	operate = 1;
	calcul = 4;
}

var persent = document.getElementById('persent');
persent.onclick = function persent() { //求余 
	calculate();
	operate = 1;
	calcul = 5;
}


var sin = document.getElementById('sin');
sin.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.sin(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}

var cos = document.getElementById('cos');
cos.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.cos(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}


var tan = document.getElementById('tan');
tan.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.tan(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}

var asin = document.getElementById('asin');
asin.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.asin(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}

var acos = document.getElementById('acos');
acos.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.acos(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}


var atan = document.getElementById('atan');
atan.onclick =function(){  //正弦
	var num = Number(document.calculator.numScreen.value);
	num = Math.atan(num);
	if(isNaN(num)){
		document.calculator.numScreen.value = "error";
	}else{
		
		document.calculator.numScreen.value = num;
	}
	operate = 1;
}



var equal = document.getElementById('equal');
equal.onclick =  function() {
	calculate(); //等于 
	operate = 1;
	num = 0;
	result = 0;
	numshow = "0";
}
// 
function calculate() {
	numshow = Number(document.calculator.numScreen.value);
	if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
		switch (calcul) { //判断要输入状态 
			case 1:
				result = accAdd(num, numshow);
				break; //计算"+" 
			case 2:
				result = Subtr(num, numshow);
				break; //计算"-" 
			case 3:
				result = accMul(num, numshow);
				break;
			case 4:
				if (numshow != 0) {
					result = accDiv(num, numshow);
				} else {
					result = document.calculator.numScreen.value = "error";
				}
				break;
			case 5:
				result = num % numshow;
				break;
		}
		quit = 1; //避免重复按键 
	} else {
		result = numshow;
	}
	numshow = String(result);
	document.calculator.numScreen.value = numshow;
	num = result; //存储当前值 
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