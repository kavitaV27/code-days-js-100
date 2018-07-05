document.write("<table border='1px'>");
document.write("<tr style=''>");
for(i=1;i<11;i++)
	{
	document.write("<th> [" + i + "]</th>");
	}
document.write("</tr>");
for(k=1;k<11;k++)
	{
	var colorcode="";
	if(k%2==0){
		colorcode="";
	}
	else
		{
		colorcode="";
		}
	document.write("<tr style='background-color:'"+ colorcode +"'>");
	
	for(j=1;j<11;j++)
		{
		document.write("<td style='font-size:23px;'>" + j*k + "</td>");
		}
	document.write("</tr>");
	}
