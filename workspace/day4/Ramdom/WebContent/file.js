var readline = require('readline');
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i = 0;
var j = i+1;
var random = function () {
var arr = [10,20,30,22,45,84,2,4,56,8,79];
    
    var result1 = 0;
    var result2 = 0;
  	console.log("  answer")

  r.question("sum of "+arr[i]+" and "+arr[j]+ "\n" , function (answer1) {

    result1 = arr[i]+arr[j];
    if (answer1 == result1)
    {
       console.log("correct");
       i = i+1;
       if(i>9)
        return r.close();
    }
    else
	{
	  console.log("please try again");
	}           
	//log('Got it! Your answer was: "', answer, '"');
    random();
     
});
};

random();