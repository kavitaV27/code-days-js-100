array = [4,5,8,9,1,2];
var k = 0;
var y = 0;
for(var i = 0; i<array.length-1; i++)
{
    for(var j = i+1; j == i+1; j++)
    {
       k = array[i]*array[j];
       if(y == 0 || y>k )
        y =  k;
      if(k>y)
        console.log(array[i],array[j]);        
    } 
}