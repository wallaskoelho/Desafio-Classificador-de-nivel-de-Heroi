

maim()

export function maim(){
    xpHeroi()

};


function xpHeroi () {
  
    var nomeHeroi = "Wallas Koelho"

    var nivelHeroi = 145632;

    let x = nivelHeroi

    var xp = ""


    if (x<=1000){
        var xp = "Ferro";

    }else if (x>=1001 & x<=2000){
        var xp = "Bronze";

    }else if(x>= 2001 & x<=5000){
        var xp = "Prata I";

    }else if (x>=5001 & x<=6000){
        var xp = "Prata II";
        
    }else if(x>=6001 & x<=7000){
        var xp = "Ouro";

    }else if(x>=7001 & x<= 8000){
        var xp = "Platina";

    }else if(x>=8001 & x<= 9000){
        var xp = "Ascendente";

    }else if(x>=9001 & x<= 10000){
        var xp = "Imortal";

    }else if(x > 10000){
        var xp = "Radiante";

    };

    console.log("O Herói de nome " + nomeHeroi +  ", está no nível de " + xp);

};