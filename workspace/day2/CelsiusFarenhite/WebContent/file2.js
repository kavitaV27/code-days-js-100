function celToFar(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+' convert to farenhite ' + cToFahr ;
    console.log(message);
}
celToFar(90);