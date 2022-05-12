$(document).ready(function(){
    // a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });

    $("#gnb > li").hover(function() {
        $(".submenu", this).stop().slideDown();
        $("#mBack").stop().slideDown();
    }, function() {
        $(".submenu", this).stop().hide();
        $("#mBack").stop().slideUp();
    })

    // 메인 배너 이미지
    let idx = 0;
    setInterval(function() {
        $(".slideImg").eq(idx).fadeOut(2000);
        idx==2?idx=0:idx++;
        $(".slideImg").eq(idx).fadeIn(2000);
    }, 5000)

    // 박스4개
    $(".box").hover(function() {
        $(".hoverBox", this).stop().fadeIn(500);
    }, function() {
        $(".hoverBox", this).stop().fadeOut();
    })


    // 서비스창
    var tog = 0;
    $("#service-btn").click(function() {
        if(tog==0){
            $("#service-inner").stop().animate({top: "55%"}, 600);
            $(".fa-angle-up").stop().hide().siblings("i").show();
            tog=1;
        } else {
            $("#service-inner").stop().animate({top: "145%"}, 600);
            $(".fa-angle-down").stop().hide().siblings("i").show();
            tog=0;
        }
    });

    $('.service').each(function(index) {
        $(this).css({left: index*1000-1000});
    });

    $('.service-txt', '.service').eq(1).show();

    $("#service-next").click(function() {
        $(".service").each(function(){
            $(this).stop(true, true).animate({left:"-=1000"});
            var left = parseInt($(this).css('left'));
            if(left<=-1000) {$(this).animate({left: 4000}, 0)}
            if(left==1000){
                $(".service-txt", this).delay(400).fadeIn();
            } else {
                $(".service-txt", this).fadeOut();
            }
        });
        // left가 0인 .serivce 만 글씨(.service-txt)를 나타나게 하기
    });

    $("#service-prev").click(function() {
        $(".service").each(function(){
            var left = parseInt($(this).css('left'));
            if(left>=4000) {$(this).stop().animate({left: -2000}, 0)}
            $(this).stop(true, true).animate({left:"+=1000"});
            if(left==-1000){
                $(".service-txt", this).delay(400).fadeIn();
            } else {
                $(".service-txt", this).fadeOut();
            }
        });
    });












    // 패밀리 사이트
    $(".quick").click(function() {
        $("#quick-list").slideToggle();
    })
})   