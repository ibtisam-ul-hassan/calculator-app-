var input = document.getElementById("input");

function SetInputValue(value) {
    input.value += value;
}



function calcAns() {
  var input = document.getElementById("input");
  var ans = eval(input.value);
  console.log("ans", ans);
  input.value = ans
}

function clearall(){
    input.value = "";
}

function clearone(){

    input.value= input.value.slice(0,-1)
}