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
console.log(ul);