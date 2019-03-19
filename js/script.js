$(window).on("load",function(){

	$(".loader .inner").fadeOut(500,function(){

	    $(".loader").fadeOut(800);
	    $("#all").click();
	});
});
$(document).ready(function(){

	$('#slides').superslides({
		animation : 'fade',
		play : 3000,
		pagination : false
	});


	var typed = new Typed(".typed", {
		strings: ["Master Student Studying in USC ","Software Engineer","Art Lover"],
		typeSpeed:70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	        	items:3
	        },
	        900:{
	            items:5
	        }
	    }
})




    var skillsTopOffset = $(".skillsSection").offset().top;
;
    var countTopOffset = $(".statsSection").offset().top;
    var done = false;

    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() +200){
	        	$('.chart').easyPieChart({
	            //your options goes here
	            easing :'easeInOut',
	            barColor : '#fff',
	            trackColor:false,
	            lineWidth:4,
	            size:152,
	            onStep:function(from,to,percent){
	            	$(this.el).find('.percent').text(Math.round(percent));
	            }
        });
    	}

    	if(!done && window.pageYOffset > countTopOffset - $(window).height() +200){
	        $(".num").each(function(){
	    	var element  = $(this);
	    	var endVal = parseInt(element.text());
	    	element.countup(endVal);
    });
	        done = true;
    	}
    });



  



   $('[data-fancybox]').fancybox();



   $("#filters a").click(function(){
   		$("#filters .current").removeClass("current");
   		$(this).addClass("current");
   		var selector = $(this).attr("data-filter");
   		$(".items").isotope({
	   		filter:selector,
	   		animationOptions:{
	   			dutarion:1500,
	   			easing:'linear',
	   			queue:'false'
	   		},
	   		

   });
   		return false;
   })


   $("#navigation li a").click(function(e){
   		e.preventDefault();
   		var targetElement = $(this).attr("href");
   		var targetPosition = $(targetElement).offset().top;
   		$("html, body").animate({scrollTop:targetPosition-50},"slow");
   });


   const nav = $("#navigation");
   const navTop = nav.offset().top;
   $(window).on("scroll",stickyNav);
   function stickyNav(){
   		var body = $("body");
   		if($(window).scrollTop() >= navTop){
   			body.css("padding-top",nav.outerHeight()+"px");
   			body.addClass("fixedNav");
   		}
   		else{
   			body.css("padding-top",0+"px");
   			body.removeClass("fixedNav");
   		}
   		


   }
});
