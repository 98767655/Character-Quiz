$(".craftButton").click(function(){
    var craftInput = $(".craft").val();
        if(craftInput==="pillages"){
    $(".craft").text("Correct!");
    } else{
    $(".craft").text("Wrong! Try again."); 
    }
});

$(".minecraftButton").click(function(){
    var minectf = $(".minectf").val();
        if(minectf==="ARMAS DE PODER, DECIMIENTO DE LA DEBILIDAD"){
    $(".craft2").text("Correct!");
    } else{
    $(".craft2").text("Wrong! Try again."); 
    }
});

$(".mineButton").click(function(){
    var Input = $(".minect").val();
    var arkevo = $(".arkevo").val();
        if(Input==="29 de Agosto de 2017," && arkevo==="son Recetas de Construcción permanentes"){
    $(".craft2").text("Correct!");
    } else if(Input==="29 de Agosto de 2017") {
    $(".craft2").text(" 1 Correct! 1 Wrong! Try again."); 
    }else if(arkevo==="son Recetas de Construcción permanentes") {
    $(".craft2").text(" 1 Correct! 1 Wrong! Try again."); 
    }else {
    $(".craft2").text(" Wrong! Try again."); 
    }
});
$("h1").click(function() {
$(".lolito").fadeToggle();
});



