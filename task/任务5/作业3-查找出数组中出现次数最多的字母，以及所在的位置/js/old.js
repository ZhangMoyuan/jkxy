var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var keyarr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = 1;
var yuansu = new Array(); //存放数组array的不重复的元素
var sum = new Array(); //存放数组array中每个不同元素的出现的次数  
for (var i = 0; i < arr.length; i++) {
	for (var j = i + 1; j < arr.length; j++) {
		if (arr[i] == arr[j]) {
			count++; //用来计算与当前这个元素相同的个数  
			arr.splice(j, 1); //没找到一个相同的元素，就要把它移除掉，  
			j--;
		}
	}
	yuansu[i] = arr[i]; //将当前的元素存入到yuansu数组中  
	sum[i] = count; //并且将有多少个当前这样的元素的个数存入sum数组中  
	count = 1; //再将count重新赋值，进入下一个元素的判断  
}
//算出array数组中出现次数最多的元素  
var newsum = new Array(); //  sum;  
for (var item in sum) {
	newsum[item] = sum[item];
}
newsum.sort(); //排序
for (var i = 0; i < sum.length; i++) {
	if (sum[i] == newsum[newsum.length - 1]) {
		document.write("出现次数最多的元素是：" + yuansu[i] + "<br/>" + "出现的次数为：" + sum[i] + "次" + "<br/>");
		for (var y = 0; y < keyarr.length; y++) {
			if (keyarr[y] == yuansu[i]) {
				document.write("元素a的位置为：" + y + "<br/>");
			}
		}
	}
}