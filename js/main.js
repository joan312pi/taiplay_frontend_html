//#region include共用頁面
$(function ($) {
	$.include = function (url) {
		$.ajax({
			url: url,
			async: false,
			success: function (result) {
				document.write(result);
			}
		});
	};
}(jQuery));
//#endregion


//#region 滾動效果 4.0
$(function () {
	window.sr = ScrollReveal({ reset: true });
		
	sr.reveal('.sr_left', { 
		distance: '100px',
		origin: 'left',
		delay: 200,
		interval: 500,
		easing:'ease',
	});
	sr.reveal('.sr_right', { 
		distance: '100px',
		origin: 'right',
		delay: 200,
		interval: 500,
		easing:'ease',
	});
	sr.reveal('.sr_top', {
		distance: '100px', 
		origin: 'top',
		delay: 200,
		interval: 100,
		easing:'ease',
	});
	sr.reveal('.sr_bottom', {
		distance: '100px', 
		origin: 'bottom',
		delay: 100,
		interval: 100,
		easing:'ease',
	});
	sr.reveal('.sr_bottom_01', {
		distance: '50px', 
		origin: 'bottom',
		delay: 50,
		interval: 100,
		easing:'ease',
	});
});
//#endregion


//#region Gotop回頂端按鈕
$(document).ready(function(){
	$("#gotop").click(function(){
		$("html,body").animate({scrollTop:0},1900,"easeInOutQuint");
		return false;
	});
});
//#endregion

//#region fat footer收合
$(document).ready(function(){
	$(".toggle_icon").click(function(){
		var collapsed=$(this).find('i').hasClass('fa-chevron-up');
		// $(".toggle_menu").slideToggle();	
		$('.toggle_icon').find('i').removeClass('fa-chevron-down');
		$('.toggle_icon').find('i').addClass('fa-chevron-up');
		if(collapsed)
			$(this).find('i').toggleClass('fa-chevron-up fa-chevron-down')
	});
});
//#endregion


//#region cookie
function ccc() {
	$("#cookie").hide();
	// document.getElementById("cookie").style.display = 'none';
}
//#endregion


//#region IE瀏覽器提示語
function detectBrowser() {

	var userAgent = navigator.userAgent.toUpperCase();
	var browser = "";

	if (userAgent.indexOf("TRIDENT") != -1) {
		browser = "IE 11"
	} else if (userAgent.indexOf("MSIE") != -1) {
		browser = "MSIE"
	} else if (userAgent.indexOf("EDG/") != -1) {
		browser = "Edge"
	} else if (userAgent.indexOf("OPR/") != -1) {
		browser = "OPERA"
	} else if (userAgent.indexOf("CHROME") != -1) {
		browser = "Chrome"
	} else if (userAgent.indexOf("FIREFOX") != -1) {
		browser = "Firefox"
	} else if (userAgent.indexOf("SAFARI") != -1) {
		browser = "Safari"
	} else {
		browser = "NO !";
	}

	if (browser.indexOf("IE") != -1) {
		alert("你目前的瀏覽器是" + browser + "，請使用其他瀏覽器");
		openChrome();
	}
	
}

function openChrome() {
	var objshell = new ActiveXObject("WScript.Shell");
	objshell.run("cmd.exe /c start chrome " + location.href, 0, true);
}


$(function () {
	detectBrowser();
	
})
//#endregion

//#region 我的最愛訂單
document.addEventListener('DOMContentLoaded', function() {
  const favoriteButtons = document.querySelectorAll('.favorite_icon');
  
  if (favoriteButtons.length === 0) {
    console.warn('找不到 .favorite_icon 元素，請檢查 HTML 類別名稱是否正確。');
    return;
  }

  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      this.classList.toggle('active');
      const icon = this.querySelector('i');
      
      if (this.classList.contains('active')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    });
  });
});
// const favoriteButtons = document.querySelectorAll('.favorite_icon');

// favoriteButtons.forEach(button => {
//   button.addEventListener('click', function() {
//     this.classList.toggle('active');
//     const icon = this.querySelector('i');
    
//     if (this.classList.contains('active')) {
//       icon.classList.replace('fa-regular', 'fa-solid');
//     } else {
//       icon.classList.replace('fa-solid', 'fa-regular');
//     }
//   });
// });
//#endregion
