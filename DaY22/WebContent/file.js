
  function localeCompare() {
      
         var str1 = new String( "This is beautiful string" );
         var index = str1.localeCompare( "XYZ" );
         document.write("localeCompare first :" + index ); 
         
         document.write("<br />" ); 
         
         var index = str1.localeCompare( "AbCD ?" );
         document.write("localeCompare second :" + index ); 
  }