var ctx;
var img;

$(document).ready(function(){
    audio();
    draw();
    img.src="img/main1.png";
    $("#gamestartimg").mouseover(function(){
        $("#gamestartimg").css({"width":"65px","height":"65px"});
        })
    .mouseout(function(){
        $("#gamestartimg").css({"width":"65px","height":"65px"});
        })
    $("#gamestart").click(function(){
        $('#main').remove();
        $(".menu").css("display","block")
        $(".ch").css("display","block");
    })

    $("#ximg").click(function(){
        $("main").css("display","block");
    })
    .mouseover(function(){
        $('#ximg').css({"width":"35px","height":"35px"})
    })
    .mouseout(function(){
        $('#ximg').css({"width":"30px","height":"30px"})
    })

    $(".ch").each(function(){
        var container=$(this);
        $(container).mouseover(function(){
            container.css({"width":"320px", "height":"330px"});
        })
        .mouseout(function(){
            container.css({"width":"300px", "height":"300px"})
        })
        $(container).click(function(){
            $('#menutitle').remove();
            $('.ch').css({"display":"none"});
            $("게임시작").css({"display":"block"});
        })
    })

    $("#setimg").click(function(){
        $('#main').remove();
        $("#set").css("display","block");
    })
    .mouseover(function(){
        $("#setimg").css({"width":"65px","height":"65px"})
    })
    .mouseout(function(){
        $("#setimg").css({"width":"60px","height":"60px"})
    })

    
    $("#ruleimg").click(function(){
        $('#main').remove();
        $("#rule").css("display","block");
    })
    .mouseover(function(){
        $("#ruleimg").css({"width":"65px","height":"65px"})
    })
    .mouseout(function(){
        $("#ruleimg").css({"width":"60px","height":"60px"})
    })

    $("#storyimg").click(function(){
        $('#main').remove();
        $("#story").css("display","block");
    })
    .mouseover(function(){
        $("#storyimg").css({"width":"65px","height":"65px"})
    })
    .mouseout(function(){
        $("#storyimg").css({"width":"60px","height":"60px"})
    })

    
    $("#previmg").click(function(){
                $("이전화면").css({"display":"block"});
    })
    
    $("#nextimg").click(function(){
                $("다음화면").css({"display":"block"});
    })





    



    $(".bgm").each(function(){
        var a=$(this);
        $(a).click(function(){
            var bgmnum=a.attr('id');
            option(bgmnum);
             a.css({"background-color":"#BF0033"});
            if(bgmnum==1){
                $("#2").css({"background-color":"white"});
                $("#3").css({"background-color":"white"});
            }else if(bgmnum==2){
                $("#1").css({"background-color":"white"});
                $("#3").css({"background-color":"white"});
            }else{
                $("#2").css({"background-color":"white"});
                $("#1").css({"background-color":"white"});
            }

        })
    })

    var slider=$("#bar");
    var result=$("#result");
    slider.on('input',function(){
        var vol=$(this).val();
        var audiovol=vol/100;
        $("#audio-de")[0].volume=audiovol;
        result.html(vol);
    });

})

function audio(){
    $("#audio-de")[0].play();
    $("#audio-de")[0].volume=0.5;
}

function draw(){
    img=new Image();
    img.addEventListener('load',function(){
        ctx=document.getElementById("main").getContext("2d");

        ctx.drawImage(img,0,0,1280,720);
        change_position();
        $(window).on("resize",change_position)

    },false);
}

function change_position(){
    var w=($(window).width()-1280)/2;
    var gamestartw=w+830;

    $("#canvas").css({left:w});
    $("#player_State").css({left:w});

    var bossw=w+400;
    var scorew = bossw + 550;
    $("#boss_State").css({left:bossw});
    $("#score_State").css({left:scorew});
    $("#retry_page").css({left:w});
    $("#maingame").css({left:w});
    $("#ending_page").css({left:w});

    $("#main").css({left:w})
    $("#gamestart").css({left:gamestartw});

    var titlew=w+332;
    $("#menutitle").css({left:titlew});
    var menutitle=w+360;
    $("#leveltitle").css({left:menutitle});
    var nextimgw=w+40;
    $("#nextimg").css({right:nextimgw});
    $("#previmg").css({left:nextimgw});
    var popw=w+390;
    $("#set").css({left:popw});

    var setimgw=w+40;
    $("#setimg").css({left:setimgw});

    var ch1w=w+150;
    $("#ch1").css({left:ch1w});
    var ch2w=w+485;
    $("#ch2").css({left:ch2w});
    var ch3w=w+150;
    $("#ch3").css({right:ch3w});


function option(num){
    var bgmnum=num;
    audiosrc="audio/bgm"+bgmnum+".mp3";
    $("#audio-de").attr("src",audiosrc);
}
