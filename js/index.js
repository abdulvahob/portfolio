$(document).ready(function(){
    
    $("#menu").click(function(){
        $(this).toggleClass("fa-times");
        $("header").toggleClass("toggle")
        
    })
    
    $(window).document("scroll load" , function(){
        $("#menu").removeClass("fa-times");
        $("header").removeClass("toggle");
        
       
    })

    
 
})

$(document).ready(function(){
    let windowHeight = $(window).height();

    $(window).scroll(function(){
        if(window.pageYOffset > window.innerHeight *1){
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
       
    })

    $(".top").click(function(){
        scrollNav()
    })

    function scrollNav (arg = 0){
        $(" body , html").animate({
            scrollTop: arg ,
        }, 500)
    }
})

var typed = new Typed("#salom", {
    stringsElement: '#typed-strings',
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false,
    onBegin: function(self) { prettyLog('salom ' + self) },
    onComplete: function(self) { prettyLog('onCmplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });
    
  
    