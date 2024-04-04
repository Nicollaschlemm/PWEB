
    var Player = prompt("Digite 1- pedra, 2- papel, 3- tesoura");
    var  CPU = Math.floor((Math.random() * 3) +1);
     Player = parseInt(Player);
    CPU = parseInt(CPU);
    switch(Player){
        case 1:
            Player = "Pedra";
            break;
        
        case 2:
            Player = "Papel";
            break;
        
        case 3:
            Player = "Tesoura";
            break;
    }
    
    switch(CPU){
        case 1:
            CPU = "Pedra";
            break;
        
        case 2:
            CPU = "Papel";
            break;
        
        case 3:
            CPU = "Tesoura";
            break;
    }
    
    
    if(Player != CPU){
        if(Player == "Pedra" & CPU=="Tesoura"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Pedra quebra tesoura|Jogador Vence");
        }
        if(Player == "Papel" & CPU=="Pedra"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Papel Embrulha Pedra|Jogador Vence");
        }
    
        if(Player == "Tesoura" & CPU=="Papel"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Tesoura corta Papel|Jogador Vence");
        }
    
        if(Player == "Tesoura" & CPU=="Pedra"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Pedra quebra tesoura|Computador Vence");
        }
        if(Player == "Pedra" & CPU=="Papel"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Papel Embrulha Pedra|Computador Vence");
        }
    
        if(Player == "Papel" & CPU=="Tesoura"){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Tesoura corta Papel|Computador Vence");
        }
    
        if(Player == CPU){
            alert("Jogador: " + Player + " Computador: " + CPU);
            alert("Empate");
        }
    }





