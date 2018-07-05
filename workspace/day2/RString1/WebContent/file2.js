var str = ""; 
      var str2 = "hello world "; 
      var counter = str2.length; 

      for (counter  ;counter > 0 ;counter -- ) { 
         str += str2.substring(counter-1, counter); 
      } 
      document.write(str2 + " reversed is " + str ); 