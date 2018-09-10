$(function(){
	$('.phone-kaola').hover(function(){
		$('.phone-kaola .app').show();
	},function(){
		$('.phone-kaola .app').hide();
	})

	$('.zhongxin').on('mouseenter',function(){
		$(this).css({"background-color":"white"});
		$('.zhongxin div').show();
		// $('.gerenzhongxin').hide();
		// $('.gerenzhongxindown').show();
	});

	$('.zhongxin').on('mouseleave',function(){
		$(this).css({"background-color":"#000"})
		$('.zhongxin div').hide();
		// $('.gerenzhongxindown').css('display','none');
		// $('.gerenzhongxin').show().css('left','60px');
	});

	$('.kehu').on('mouseenter',function(){
		$(this).css({"background-color":"white"});
		$('.kehu div').show();
	});

	$('.kehu').on('mouseleave',function(){
		$(this).css({"background-color":"#000"});
		$('.kehu div').hide();
	});

	$('.chongzhi').on('mouseenter',function(){
		$(this).css({"background-color":"white"});
		$('.chongzhi div').show();
	});

	$('.chongzhi').on('mouseleave',function(){
		$(this).css({"background-color":"#000"});
		$('.chongzhi div').hide();
	});

	$('.xiaofei').on('mouseenter',function(){
		$(this).css({"background-color":"white"});
		$('.xiaofei div').show();
	});

	$('.xiaofei').on('mouseleave',function(){
		$(this).css({"background-color":"#000"});
		$('.xiaofei div').hide();
	});

	$('.geng').on('mouseenter',function(){
		$(this).css({"background-color":"white"});
		$('.geng div').show();
	});

	$('.geng').on('mouseleave',function(){
		$(this).css({"background-color":"#000"});
		$('.geng div').hide();
	});

	$('.allDown1').hover(function(){
		$('.all-muying img').attr('src','images/muying-red.png');
		$('.all-muying').css({"background":"#fff","color":"#FF1E32"});
		$('#muying').show();
	},function(){
		$('.all-muying img').attr('src','images/muying-white.png');
		$('.all-muying').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#muying').hide();
	});

	$('.allDown2').hover(function(){
		$('.all-meirong img').attr('src','images/meirong-red.png');
		$('.all-meirong').css({"background":"#fff","color":"#FF1E32"});
		$('#meirong').show();
	},function(){
		$('.all-meirong img').attr('src','images/meirong-white.png');
		$('.all-meirong').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#meirong').hide();
	});

	$('.allDown3').hover(function(){
		$('.all-qingshe img').attr('src','images/qingshe-red.png');
		$('.all-qingshe').css({"background":"#fff","color":"#FF1E32"});
		$('#qingshe').show();
	},function(){
		$('.all-qingshe img').attr('src','images/qingshe-white.png');
		$('.all-qingshe').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#qingshe').hide();
	});

	$('.allDown4').hover(function(){
		$('.all-jiaju img').attr('src','images/jiaju-red.png');
		$('.all-jiaju').css({"background":"#fff","color":"#FF1E32"});
		$('#jiaju').show();
	},function(){
		$('.all-jiaju img').attr('src','images/jiaju-white.png');
		$('.all-jiaju').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#jiaju').hide();
	});

	$('.allDown5').hover(function(){
		$('.all-yingyang img').attr('src','images/yingyang-red.png');
		$('.all-yingyang').css({"background":"#fff","color":"#FF1E32"});
		$('#yingyang').show();
	},function(){
		$('.all-yingyang img').attr('src','images/yingyang-white.png');
		$('.all-yingyang').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#yingyang').hide();
	});

	$('.allDown6').hover(function(){
		$('.all-shoubiao img').attr('src','images/shoubiao-red.png');
		$('.all-shoubiao').css({"background":"#fff","color":"#FF1E32"});
		$('#shoubiao').show();
	},function(){
		$('.all-shoubiao img').attr('src','images/shoubiao-white.png');
		$('.all-shoubiao').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#shoubiao').hide();
	});

	$('.allDown7').hover(function(){
		$('.all-shuma img').attr('src','images/shuma-red.png');
		$('.all-shuma').css({"background":"#fff","color":"#FF1E32"});
		$('#shuma').show();
	},function(){
		$('.all-shuma img').attr('src','images/shuma-white.png');
		$('.all-shuma').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#shuma').hide();
	});

	$('.allDown8').hover(function(){
		$('.all-huanqiu img').attr('src','images/huanqiu-red.png');
		$('.all-huanqiu').css({"background":"#fff","color":"#FF1E32"});
		$('#huanqiu').show();
	},function(){
		$('.all-huanqiu img').attr('src','images/huanqiu-white.png');
		$('.all-huanqiu').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#huanqiu').hide();
	});

	$('.allDown9').hover(function(){
		$('.all-yundong img').attr('src','images/yundong-red.png');
		$('.all-yundong').css({"background":"#fff","color":"#FF1E32"});
		$('#yundong').show();
	},function(){
		$('.all-yundong img').attr('src','images/yundong-white.png');
		$('.all-yundong').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#yundong').hide();
	});

	$('.allDown10').hover(function(){
		$('.all-fushi img').attr('src','images/fushi-red.png');
		$('.all-fushi').css({"background":"#fff","color":"#FF1E32"});
		$('#fushi').show();
	},function(){
		$('.all-fushi img').attr('src','images/fushi-white.png');
		$('.all-fushi').css({"background":"linear-gradient(to right,#f00,#ff3264)","color":"#fff"});
		$('#fushi').hide();
	});

	$('.bxslider').bxSlider({
  	'auto':'ture',
  	'mode':'fade'
  	});

	var starttime = new Date("2019/11/20");
  	setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
    $('.timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
  	}, 1000)

  	$('.xiaLiFirst a').on('mouseenter','img',function(){
		$(this).parent().next('div').show();
	});
	$('.xiaLiFirst a').on('mouseleave','img',function(){
		$(this).parent().next('div').hide();
	});
  
  $(document).scroll(function(){
  	x = $(document).scrollTop();
  	$('.shuzi').text(x);
  	if (x > 700) {
  		$('.scrollLeft').css({
  			"position":"fixed",
  			"margin-top":"20px"
  		})
  	}else{
  		$('.scrollLeft').css({
  			"position":"absolute",
  			"margin-top":"696px"
  		})
  	}
  });

  $('.fanhui').click(function(){
  	$( "html,body").animate({ "scrollTop" : 0 }, 500);
  });

	$("#turnToContent").click(function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, "href")).offset().top + "px"
	}, 500);
	return false;
	});

})

