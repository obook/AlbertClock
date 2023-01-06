
function mettreajourhorloge()
{
	
var ladate=new Date();	
var h=ladate.getHours();
var m=ladate.getMinutes();
/*
var diff=document.getElementById('diff').value;
if (diff==0)
{
	//document.getElementById('horloge').innerHTML=h+' h<br/>'+m+' min ';
    document.getElementById('horloge').innerHTML=h+'<br/>'+m;

}
else
*/
    
diff=2;
temps=20;
refreshtime=20;
{
	if (diff==1)
	{
		var a=10;

		var b=10;
		var c=0;
		if (h==0)
		{
			a=0;

			b = Math.floor(Math.random()*9)+1;
		}

		else

		{

			while ((a*b)>h)

			{
	
				a = Math.floor(Math.random()*9)+1; 
	
				b = Math.floor(Math.random()*9)+a; 
	
			}

		}

		var c=h-(b-a);

		var d=10;

		var e=10;

		var f=0;

		if (m == 0)

		{
	
			d = 0;

			e = Math.floor(Math.random()*9)+1; 

		}

		else
		{
	
			while ((d*e)>m)
	
			{
		
				 d = Math.floor(Math.random()*9)+1; 
	
				 e = Math.floor(Math.random()*9)+d; 
	
			}

		}
	
		f=m-(e-d);



		//document.getElementById('horloge').innerHTML=c+' + '+b+' - '+a+' h<br/>'+f+' + '+e+' - '+d+' min ';
        document.getElementById('horloge').innerHTML=c+' + '+b+' - '+a+'<br/>'+f+' + '+e+' - '+d;


	}
	else
	{
		var a=10;

		var b=10;
		var c=0;
		if (h==0)
		{
			a=0;

			b = Math.floor(Math.random()*9)+1;
		}

		else

		{

			while ((a*b)>h)

			{
	
				a = Math.floor(Math.random()*9)+1; 
	
				b = Math.floor(Math.random()*9)+1; 
	
			}

		}

		var c=h-a*b;

		var d=10;

		var e=10;

		var f=0;

		if (m == 0)

		{
	
			d = 0;

			e = Math.floor(Math.random()*9)+1; 

		}

		else
		{
	
			while ((d*e)>m)
	
			{
		
				 d = Math.floor(Math.random()*9)+1; 
	
				 e = Math.floor(Math.random()*9)+1; 
	
			}

		}
	
		f=m-d*e;



		//document.getElementById('horloge').innerHTML=c+' + '+a+' x '+b+' h<br/>'+f+' + '+d+' x '+e+' min ';
        document.getElementById('horloge').innerHTML=c+' + '+a+' x '+b+'<br/>'+f+' + '+d+' x '+e;

	}
}

}



function refresh(time)

{
 
	 //myVar = setTimeout(function () { mettreajourhorloge();refresh(document.getElementById('temps').value); }, time*1000);
     myVar = setTimeout(function () { mettreajourhorloge();refresh(refreshtime); }, time*1000);
}


mettreajourhorloge();
//refresh(document.getElementById('temps').value);
refresh(refreshtime);
