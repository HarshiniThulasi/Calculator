var a="";
function clearVal(){
    a="0";
    document.getElementById("dis").innerHTML="0";
}
function display(value){
    a+=value;
    document.getElementById("dis").innerHTML=a;
}
function calculate(){
    var p=a;
    var q=eval(p);
    document.getElementById("dis").innerHTML=q;
    a=q;
}
function back(){
    if(a.length!=1){
        a=a.slice(0,-1);
        document.getElementById("dis").innerHTML=a;
    }
    else{
        a="";
        document.getElementById("dis").innerHTML=a;
    }
}