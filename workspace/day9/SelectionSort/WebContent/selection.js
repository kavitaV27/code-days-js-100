<<<<<<< HEAD
function selectionSort(items) {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i; 
		for (var j = i + 1; j < length; j++) { 
			if (items[j] < items[min]) { 
				min = j; 
			}
		}
		if (min != i) {
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;
		}
	}
}
var ul = [5, 3, 1, 2, 4];
selectionSort(ul);
=======
function selectionSort(items) {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i; 
		for (var j = i + 1; j < length; j++) { 
			if (items[j] < items[min]) { 
				min = j; 
			}
		}
		if (min != i) {
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;
		}
	}
}
var ul = [5, 3, 1, 2, 4];
selectionSort(ul);
>>>>>>> 3868be8f1ea4ed9e648300b96b672cf570754480
console.log(ul);