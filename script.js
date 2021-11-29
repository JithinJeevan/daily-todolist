// Ajax
var xhr= new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/todos");
document.getElementById("btn").addEventListener("click",function(){
xhr.send();
})
xhr.onreadystatechange= function (){
    if (xhr.readyState==4 && xhr.status==200){

        var aj = JSON.parse(xhr.responseText);
       
      var output="";
      for(i=0;i<20;i++){
          var result=aj[i];
          
          output= output+`<tr id='color${i}'><td><input id='checked${i}' onclick='myfunction(this);' type='checkbox'></td><td>${result.title}<td id="status${i}"></td></td></tr>`;
       
      }
      
      document.getElementById("table").innerHTML=output;
    }
}
// Ajax


//logout 
document.getElementById("logout").addEventListener("click",function(){

    window.open("index.html");
})
// logout



var table=document.getElementById("table");

var c=0;
var y=document.getElementById("checked");
// Tick Function
function myfunction(y){
    
    
    if(y.checked==true){
       
        
        c++;
    
    if (c==5){
        alert("Congratulations.You have successfully completed 5 tasks!!!");
    }
}
    else{
        c--;
        if(c==5){
            alert("Congratulations.You have successfully completed 5 tasks!!!");
        }
    }

    
}
// Tick function


    
    

    
   











