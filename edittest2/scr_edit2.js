
let int1=1;let var1="";let var2="";
function get_string() {
  //alert("You pressed a key inside the input field");
  let var1=document.getElementById("demo").value;
  var2=var2+var1;
  document.getElementById("p1").innerHTML=int1;int1++;
  
  
  if(int1>3){document.getElementById("p1").innerHTML=var2;
}}