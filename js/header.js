$(document).ready(function(){
    var myHeader = $("#header");
    var prevScrollPos = $(window).scrollTop();
    var isHeaderVisible = true;

    // 마우스 이벤트
    myHeader.on("mouseover", function(){
        $(this).addClass("over");
    });

    myHeader.on("mouseout", function(){
        $(this).removeClass("over");
    });

    // 스크롤 이벤트
    $(window).scroll(function(){
        var currentScrollPos = $(window).scrollTop();

        if (currentScrollPos > prevScrollPos && isHeaderVisible) {
            // 스크롤 다운: 헤더 숨김
            myHeader.addClass("hidden");
            isHeaderVisible = false;
        } else if (currentScrollPos < prevScrollPos && !isHeaderVisible) {
            // 스크롤 업: 헤더 표시
            myHeader.removeClass("hidden");
            isHeaderVisible = true;
        }

        prevScrollPos = currentScrollPos;
    });
});
