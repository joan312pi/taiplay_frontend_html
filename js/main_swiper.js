//#region swiper Video AutoHeight
$(function ($) {
	var SwiperObj = function (event) {

		var myobj = this;
		myobj.bannerVideoAutoHeight(event)
		myobj.onSwiperSildChange(event)
	}

	//bannerVideoAutoHeight()輪播牆影片調整自動高
	//參數(swiper)swiper物件:XXXX ex var XXXX=new Swiper()
	SwiperObj.prototype.bannerVideoAutoHeight = function (Swiper) {
		var myvideo = $(Swiper.el).find('video')
		var img = $(Swiper.el).find('.swiper-wrapper').height();
		myvideo.css('height', img)

		$(window).resize(function () {
			var res;
			if (res) { clearTimeout(res) }
			res = setTimeout(function () {

				var img = $(Swiper.el).find('.swiper-wrapper').height();
				myvideo.css('height', img)
			}, 20)
		})
	}

	//onSwiperSildChange()輪播牆需要有影片時
	//參數(swiper)swiper物件:XXXX ex var XXXX=new Swiper()
	SwiperObj.prototype.onSwiperSildChange = function (swiper) {
		var videol = $(swiper.el).find('.swiper-slide');
		var videolist = $(videol).find('video');
		var AfterVideo;
		swiper.on('slideChange', function () {
			var ISvideo = $(videol[this.activeIndex]).find('video')
			if (ISvideo.length > 0) {
				if(AfterVideo==null)
				{
					AfterVideo=ISvideo;
				}
				if(AfterVideo!=ISvideo){
						AfterVideo[0].pause();
						AfterVideo[0].currentTime=0;
						AfterVideo=ISvideo

				}
				ISvideo[0].play();
			}
			else {
				if(swiper.autoplay.running==false)
				{
					if(AfterVideo!=null)
					{
						AfterVideo[0].pause();
						AfterVideo[0].currentTime=0;
						AfterVideo=null
					}
					var res;
					if (res) { clearTimeout(res) }
					res = setTimeout(function () {
		
						swiper.autoplay.start()
					}, 20)
					
				}
			}
			
			// ISvideo.on("pause", function () {
			// 	console.log('pause')
			// 	this.currentTime = 0;
			// });
			ISvideo.on("ended",function(){
				swiper.slideNext();
				swiper.autoplay.start()
				this.currentTime = 0;
				AfterVideo=null
			});
			ISvideo.on("play", function () {
				if ($(this)[0].play) {
					swiper.autoplay.stop();
				}
			});
		})
	}
	
	$.fn.StartedSwiperVideo=function(event){
		var Swiper = new SwiperObj(event);
        return Swiper;
	}
}(jQuery));
//#endregion

//#region Swiper輪播效果
$(function($) {
				
	//index_banner PC
	var swiper = new Swiper(".banner_01", {
		loop: true,//循環播放
		slidesPerView: 1,//項數
		// spaceBetween: 45,//項目間距
		autoplay:true,//自動播放
		autoplay: {
			delay: 5000,//延遲時間
		},
		effect: "fade",//轉場效果"fade"（淡入）、"cube"（方塊）、"coverflow"（3d流）、"flip"（3d翻轉）、"cards"(卡片式)
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		//video
	});
	$(window).StartedSwiperVideo(swiper);


	//index_banner mobile
	var swiper = new Swiper(".banner_01_m", {
		loop: true,//循環播放
		slidesPerView: 1,//項數
		// spaceBetween: 45,//項目間距
		autoplay:true,//自動播放
		autoplay: {
			delay: 5000,//延遲時間
		},
		effect: "fade",//轉場效果"fade"（淡入）、"cube"（方塊）、"coverflow"（3d流）、"flip"（3d翻轉）、"cards"(卡片式)
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		//video
	});
	$(window).StartedSwiperVideo(swiper);


	//index_case
	var swiper = new Swiper(".banner_02", {
		loop: true,//循環播放
		slidesPerView: 1,//項數
		// spaceBetween: 45,//項目間距
		autoplay:true,//自動播放
		autoplay: {
			delay: 4000,//延遲時間
		},
		effect: "cube",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		//video
	});


	//index_link
	var swiper3 = new Swiper(".banner_03", {
		loop: true,
		// slidesPerView: 2,
		spaceBetween: 45,
		autoplay:true,//自動播放
		autoplay: {
			delay: 3000,//延遲時間
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		},
	});

	//case_img
	var swiper4 = new Swiper(".banner_04", {
		loop: true,
		// slidesPerView: 2,
		spaceBetween: 0,
		autoplay:true,//自動播放
		autoplay: {
			delay: 3000,//延遲時間
		},
		breakpoints: {
			0: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		},
	});

});
//#endregion





