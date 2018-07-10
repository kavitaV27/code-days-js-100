<<<<<<< HEAD
function insertionSort(unsortedList) {
	var len = unsortedList.length;
	for (var i = 1; i < len; i++) {
		var tmp = unsortedList[i];  
		
		for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
			
			unsortedList[j + 1] = unsortedList[j];
		}
				 
		unsortedList[j + 1] = tmp;
	}
}

var ul = [5, 3, 1, 2, 4];
insertionSort(ul);
=======
function insertionSort(unsortedList) {
	var len = unsortedList.length;
	for (var i = 1; i < len; i++) {
		var tmp = unsortedList[i];  
		
		for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
			
			unsortedList[j + 1] = unsortedList[j];
		}
				 
		unsortedList[j + 1] = tmp;
	}
}

var ul = [5, 3, 1, 2, 4];
insertionSort(ul);
>>>>>>> 3868be8f1ea4ed9e648300b96b672cf570754480
console.log(ul);