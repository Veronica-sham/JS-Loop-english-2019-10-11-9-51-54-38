
<script>
for(var i = 1; i <= 9 ; i++){
	var count = 1;
	for(var a = 1; a <=i ; a++){
		document.getElementById("demo").innerHTML+= i +"*"+ count+ "="+ i*count+ "\t" ;
		count++;
	}
	document.getElementById("demo").innerHTML+= "<br>" ;
}

</script>