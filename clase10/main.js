$(document).ready(function(){
    $('#parrafo1').click(function(){
        alert("Hubo click");
    });

    $('#tabla').click(function(){
        if($('#tabla').css("background-color") != "#E3AAEA"){
            $('#tabla').css("background-color", "#E3AAEA");
        } else{
            $('#tabla').css("background-color", "white");
        }
    });

    $('li').click(function(){
        $(this).hide()
    })
});