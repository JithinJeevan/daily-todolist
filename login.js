var username= document.getElementById("text");
var password= document.getElementById("password");


var erroru = document.getElementById("labelt");
var errorp = document.getElementById("labelp");





    
    
    


function us(pas){
    const a="admin";
    
    
    if (username.value==a && password.value ==12345 ){
        
        pas();
        
    }
    
        
       else{ 
           
        if(username.value==a ){
        
            erroru.innerHTML="Valid";
            erroru.style.color="green";
        }

            else{
                erroru.innerHTML="Wrong Username";
                erroru.style.color="red";
            }    
        
         

        
         
    if (password.value ==12345 ){
        errorp.innerHTML="Valid";
        errorp.style.color="green";
        
    }
    else{
        errorp.innerHTML="Wrong password";
        errorp.style.color="red";
       
    } 
}
    
       
    }


    




function pas(){

    
 window.open("todolist.html");
    
}





 

