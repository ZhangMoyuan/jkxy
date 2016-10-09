function solution() {
	//原数组
	var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
	//记录次数的数字
	var count = {};
	//索引的新数组
	var pos = {};

	for (var i = 0; i < arr.length; i++) {
		var char = arr[i]; //遍历数组

		if (count[char]) { // ()
			count[char] += 1;
			pos[char] += "," + i;

		} else {
			count[char] = 1;
			pos[char] = i;
		}
	}

	//寻找出现次数最多的字母
	var max = Object.keys(count).sort(function(a, b) {
		return count[a] < count[b];
	})[0];

	var result = document.getElementById('result');

	//	console.log(max);
	//	console.log(count[max]);
	//	console.log(pos[max]);

	//将数据写入div中
	result.innerHTML = "出现次数最多的元素为：" + max + "<br/>" + "出现的次数为：" + count[max] + "次<br/>" + "元素所在的位置分别为：" + pos[max] + ",";
}