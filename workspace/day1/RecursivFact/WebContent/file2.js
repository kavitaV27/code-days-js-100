
var n = parseInt(window.prompt("Enter the Number:"));
            var result = fact(n);
            window.alert("Factorial of the given number " + result);
            function fact(n)
            {
                if(n == 0)
                    return 1;
                else 
                    return (n*fact(n-1));
            }