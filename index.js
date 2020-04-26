let ans = [""];
function insert(num){
    document.querySelector(".textview").value = document.form.textview.value+num;
}
function clean(){
    document.querySelector(".textview").value = "";
}

function equal(){
   
    document.querySelector(".textview").value = eval(document.querySelector(".textview").value);
      ans.push( eval( document.form.textview.value)); 
}
function back(){
    document.querySelector(".textview").value = document.querySelector(".textview").value.substring(0, document.querySelector(".textview").value.length - 1);
}
function  hisclick(){
    for(var i =0; i<ans.length; i++){
        document.querySelector(".textview").value = ans[i];
    }
}
document.addEventListener("keydown" , keys);
 function keys(key){
     console.log(event.key);
    if(event.key  >= "0" && event.key <= "9")
  insert(event.key);
    if(event.key === "Backspace")
    back();
    if(event.key == "+" || event.key == "-" || event.key == "*" || event.key =="/" || event.key =="%" || event.key ==".")
    insert(event.key);
    if(event.key == "=" || event.key == "Enter")
    equal();
    if(event.key =="Delete")
    clean();
 }
 

