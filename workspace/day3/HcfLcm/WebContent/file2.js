function lcm(number1,number2,number3,number4)
{
    var temp , res=1;
    var d = 2;
   if(number1>number2)
    {
        if(number1>number3)
        {
            if(number1>number4)
            {
                temp = number1;
            }
            else
            {
                temp = number4;
            }
        }
        else
        {
            if(number3>number4)
            {
                temp = number3;
            }
            else
            {
                temp = number4;
            }
        }
    }
    else
    {
        temp =number2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(number1%d==0||number2%d==0||number3%d==0||number4%d==0)
        {
            res = res*d;
        }
        number1 = (number1%d==0)?number1=number1/d:number1;
        number2 = (number2%d==0)?number2=number2/d:number2;
        number3 = (number3%d==0)?number3=number3/d:number3;
        number4 = (number4%d==0)?number4=number4/d:number4;
        if(number1%d==0||number2%d==0||number3%d==0||number4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	console.log(res);
}

function hcf(number1,number2,number3,number4)
{
    var temp , res=1;
    var d = 2;
   if(number1>number2)
    {
        if(number1>number3)
        {
            if(number1>number4)
            {
                temp = number1;
            }
            else
            {
                temp = number4;
            }
        }
        else
        {
            if(number3>number4)
            {
                temp = number3;
            }
            else
            {
                temp = number4;
            }
        }
    }
    else
    {
        temp =number2; 
    }
	
    for(var i = 2; i<=temp;i++)
    {
        if(number1%d==0 && number2%d==0 && number3%d==0 && number4%d==0)
        {
            res = res*d;
        }
        number1 = (number1%d==0)?number1=number1/d:number1;
        number2 = (number2%d==0)?number2=number2/d:number2;
        number3 = (number3%d==0)?number3=number3/d:number3;
        number4 = (number4%d==0)?number4=number4/d:number4;
        if(number1%d==0 && number2%d==0 && number3%d==0 && number4%d==0)
        {
            d =d;
        }
        else
        {
            d = d+1;
        }
    }
	console.log(res);
}
lcm(12 , 60 , 15 , 20);
hcf(12 , 16 , 8 , 4);


