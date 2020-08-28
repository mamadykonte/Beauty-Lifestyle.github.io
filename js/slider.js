var Sliderlinks=['1','2','3'];

var i=1;

$("#next").on('click',nownextimg);
$("#prev").on('click',nowprevimg);

function nownextimg (){
    
    i++;
    if (i===Sliderlinks.length) {
        i=0;
    }
    $("#projectimage").attr('src',"img/slider/slide"+Sliderlinks[i]+".jpeg");
    $("#projectimage").css("transition", "5s");
}

function nowprevimg (){
   
    i--;
    if (i==-1) {
        i=Sliderlinks.length-1;
    }
    $("#projectimage").attr('src',"img/slider/slide"+Sliderlinks[i]+".jpeg");
    $("#projectimage").css("transition", "5s");
}