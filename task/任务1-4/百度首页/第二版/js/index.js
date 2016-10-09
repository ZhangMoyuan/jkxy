function showSet() {
				var set = document.getElementById('set');
				set.style.display = 'block';
			}

			function hideSet() {
				var set = document.getElementById('set');
				set.style.display = 'none';
			}

			function show() {
				var gd = document.getElementById('gd');
				var more = document.getElementById('more');
				gd.style.display = 'block';
				more.className = 'morehover';
			}

			function hide() {
				var gd = document.getElementById('gd');
				var more = document.getElementById('more');
				gd.style.display = 'none';
				more.className = 'more';
			}