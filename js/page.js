 <!-- Initialize Swiper 翻页功能-->
$('.farm-video').attr('poster','images/aa.jpg');

var myVideo = document.getElementsByTagName('video')[0];

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onSlideChangeStart: function(swiper){
	     // alert('事件触发了;');
	      console.log("numtwo:"+$('.numtwo').hasClass('swiper-slide-active'))
	      if ($('.numtwo').hasClass('swiper-slide-active')) {
	      	myVideo.pause();
	      	$('.fm02').css('display','none');
	      	$('.farm-video').removeAttr('poster');
	      } else{
	      	$('.fm02').css('display','block');
	      	$('.farm-video').attr('poster','images/aa.jpg');
	      }
	     
	      
	 }
});

	

$(document).ready(function(){

	document.ontouchmove = function(e) {
		e.preventDefault();
	}
	var screenWidth  = $(window).width();
	var screenHeight = $(window).height();
	console.log('screenHeight:'+screenHeight);
	console.log('screenWidth:'+screenWidth);
	
	$('.farm-video').css('width',screenWidth);
	$('.farm-video').css('height',screenHeight/3);

	/*$('#shake').on('webkitAnimationEnd',function(){
		alert("webkitAnimationEnd!");
		setTimeout("funy()",2000);
        setTimeout("funx()",2000);
		
	});
	function funy(){
		var audio2 = document.getElementById("music2");

		alert("funy!");
        if(audio2!==null){
            audio2.play();
        }
	}
	function funx(){
		alert("funx!");
		$("#farm_introduction").addClass("fmpg1")
	}*/
	// Click to show modal
	$('#farm_introduction').on('click', function () {
		var elid ="#"+$(this).attr('name'),
		//var elid = '#farm_1';
		
		windy = $(elid).find('ul').windy(),
		allownavnext = false,
		allownavprev = false;
		
		$(elid).show();
		$('.al-maskboard').show();
		$('.al-actionbar').show();


		$( '.nav-prev' ).on( 'touchstart', function( event ) {
			navprev();
		});

		$( '.nav-next' ).on( 'touchstart', function( event ) {
			navnext();
		});


		function navnext() {
				windy.next();
		}
		
		function navprev() {
				windy.prev();
				
		}
		
	});

	// Click to close modal
	$('.al-actionbar').on('click', function () {
		console.log('aaa');
		$('.modal').hide();
		$('.al-maskboard').hide();
		$('.al-actionbar').hide();
	});

	
	$('.wi-container').css('height', screenHeight*0.75);
/*	$('.modal-container').css('height', screenHeight*0.3);*/
	$('.modal').css('width', screenWidth - 10);
	$('.modal').css('height', screenHeight - 30);
	$('.modal').css('margin-left', 0 - (screenWidth - 10)/2 );
	$('.modal').css('margin-top', 0 - (screenHeight - 10)/2+5) ;
	$('.modal').addClass('animated');
	$('.modal').addClass('bounceIn');
	/*touchScroll(".modal-container");*/

});



