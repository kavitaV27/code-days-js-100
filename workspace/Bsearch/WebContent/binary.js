function BinarySearch(item, value){
    var fIndex  = 0,
        lIndex   = item.length - 1,
        mIndex = Math.floor((lIndex + fIndex)/2);
 while(item[mIndex] != value && fIndex < lIndex)
    {
       if (value < item[mIndex])
        {
            lIndex = mIndex - 1;
        } 
      else if (value > item[mIndex])
        {
            fIndex = mIndex + 1;
        }
        mIndex = Math.floor((lIndex + fIndex)/2);
    }
 return (item[mIndex] != value) ? -1 : mIndex;
}
var items = [5,7,8,11,85,9,45,71];
console.log(BinarySearch(items, 45));   
console.log(BinarySearch(items, 71));