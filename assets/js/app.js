var vid = document.getElementById("cute-video"); 
function playVid() { 
    vid.play(); 
  } 
  
  function pauseVid() { 
    vid.pause(); 
  } 

  $(".play-btn").on("click",function(){
    $(this).css("display","none");
    $(".pause-btn").css("display","block");
   
  })
  $(".pause-btn").on("click",function(){
    $(this).css("display","none");
    $(".play-btn").css("display","block");
  })
$(".chat-icon").on("click",function(){
    $(".chat-blink").css("display","block");
    $(".click-blink").css("display","none");
})
$(".close-chat").on("click",function(){
    $(".chat-blink").css("display","none");
    $(".click-blink").css("display","block");
})