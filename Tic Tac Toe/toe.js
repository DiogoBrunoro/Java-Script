function myfunc(){
    var b1 , b2 , b3 , b4, b5, b6 , b7 , b8 , b9 ;
    b1 = document.getElementById("b1").value 
    b2 = document.getElementById("b2").value
    b3 = document.getElementById("b3").value
    b4 = document.getElementById("b4").value
    b5 = document.getElementById("b5").value
    b6 = document.getElementById("b6").value
    b7 = document.getElementById("b7").value
    b8 = document.getElementById("b8").value
    b9 = document.getElementById("b9").value

    var btnb1 , btnb2 , btnb3 , btnb4, btnb5, btnb6 , btnb7 , btnb8 , btnb9 ;
    btnb1 = document.getElementById("b1"); 
    btnb2 = document.getElementById("b2");
    btnb3 = document.getElementById("b3");
    btnb4 = document.getElementById("b4");
    btnb5 = document.getElementById("b5");
    btnb6 = document.getElementById("b6");
    btnb7 = document.getElementById("b7");
    btnb8 = document.getElementById("b8");
    btnb9 = document.getElementById("b9");

    //check which player wins and block all the boxes remaining
    //problem is I needed to add all the posibilities and this isn´t to good 

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb2.style.color = "red"; 
        btnb3.style.color = "red"; 
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb4.style.color = "red"; 
        btnb7.style.color = "red"; 
    } 
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
  
        btnb7.style.color = "red"; 
        btnb8.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
  
        btnb3.style.color = "red"; 
        btnb6.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb3.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb7.style.color = "red"; 
    } 
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb9.disabled = true; 
  
        btnb2.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb8.style.color = "red"; 
    } 
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb4.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb6.style.color = "red"; 
    } 
  
    

    else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
        b2 == '0') && (b3 == '0' || b3 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb2.style.color = "red"; 
        btnb3.style.color = "red"; 
    } 
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
        b4 == '0') && (b7 == '0' || b7 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb4.style.color = "red"; 
        btnb7.style.color = "red"; 
    } 
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
        b8 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb6.disabled = true; 
  
        btnb7.style.color = "red"; 
        btnb8.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
        b6 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb4.disabled = true; 
        btnb5.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
        btnb3.style.color = "red"; 
        btnb6.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
        b5 == '0') && (b9 == '0' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
  
        btnb1.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb9.style.color = "red"; 
    } 
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
        b5 == '0') && (b7 == '0' || b7 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb3.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb7.style.color = "red"; 
    } 
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
        b5 == '0') && (b8 == '0' || b8 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb1.disabled = true; 
        btnb3.disabled = true; 
        btnb4.disabled = true; 
        btnb6.disabled = true; 
        btnb7.disabled = true; 
        btnb9.disabled = true; 
  
        btnb2.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb8.style.color = "red"; 
    } 
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
        b5 == '0') && (b6 == '0' || b6 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        btnb1.disabled = true; 
        btnb2.disabled = true; 
        btnb3.disabled = true; 
        btnb7.disabled = true; 
        btnb8.disabled = true; 
        btnb9.disabled = true; 
  
        btnb4.style.color = "red"; 
        btnb5.style.color = "red"; 
        btnb6.style.color = "red"; 
    } 
   
    // checks if the game is tie  
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
            b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
            b8 == '0') && (b9 == 'X' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Match Tie"; 
    } 
    else { 
  
        // Print wicht 
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player 0 Turn"; 
        } 
    } 
} 

// Here the function myFunc2 is called and the game resets with all the box without value
function myfunc_2(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

//put the 'X' or the '0 in the boxes

flag = 1;
function myfunc_3(){
    if (flag == 1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_4(){
    if (flag == 1){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_5(){
    if (flag == 1){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_6(){
    if (flag == 1){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_7(){
    if (flag == 1){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_8(){
    if (flag == 1){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_9(){
    if (flag == 1){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_10(){
    if (flag == 1){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_11(){
    if (flag == 1){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
}
    else{
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}