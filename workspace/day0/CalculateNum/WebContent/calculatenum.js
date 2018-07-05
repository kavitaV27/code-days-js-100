 function calculate()
            {
                var number1 = parseFloat(document.getElementById('number1').value);
                var number2 = parseFloat(document.getElementById('number2').value);
                
                var oper = document.getElementById('operator').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = number1+number2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = number1-number2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = number1/number2;
                }
                
                if(oper === '*')
                {
                    document.getElementById('result').value = number1*number2;
                }
            }
            