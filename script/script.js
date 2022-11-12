/**
*
* script.css
* @author- Arshath
* @date- 10/11/2022
*/
function onkey() {
    var input = document.getElementById("textarea").value;
    document.getElementById("word").innerHTML =input.split(" ").length;
    document.getElementById("latter").innerHTML =input.split('').length;
}