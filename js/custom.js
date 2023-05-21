
$('.banner-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows:false,
  });
 

$('.best-product-image').slick({
  slidesToShow:5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
   nextArrow: ".next",
  prevArrow: ".prev",
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slideToScroll:1,
        Infinity:true,
      }
    },
 
  
  ]
});
/*back-2-top start*/
$(".back-2-top").click(function(){
  $("html,body").animate({scrollTop:0 ,},1000);
});
/*back-2-top end*/

/*background color auto remave & back to top start*/
$(window).scroll(function(){
var scrolling=$(this).scrollTop();

if(scrolling<20)
{$(".mega-menu").addClass("bg");}
else{$(".mega-menu").removeClass("bg");}

if(scrolling>20)
{$(".back-2-top").fadeIn(500);}
else{$(".back-2-top").fadeOut(500);}
});
/*background color auto remave & back to top end*/
/*counter timer w3c start*/ 
// Set the date we're counting down to
var countDownDate = new Date("may 13, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "Day "; 
  document.getElementById("demo2").innerHTML = hours + "Hou. ";
  document.getElementById("demo3").innerHTML = minutes + "Min. ";
  document.getElementById("demo4").innerHTML = seconds + "Sec. ";
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
 
  }

  
}, 1000);


/*counter timer w3 end*/ 

