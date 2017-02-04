
function gpacalculator()
{
var a = document.getElementById("str1").value;
var b = document.getElementById("str2").value;
var c = document.getElementById("str3").value;
var d = document.getElementById("str4").value;
var x = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
var y = (4);
var z = x/y;

document.getElementById("demo").innerHTML = ("Total GPA is:" +z);
}