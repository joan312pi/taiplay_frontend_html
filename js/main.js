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

//#region 加入收藏愛心
document.addEventListener('DOMContentLoaded', function() {
  // 初始化 Bootstrap 5 Modal
  const modalElement = document.getElementById('favoriteModal');
  const bsModal = new bootstrap.Modal(modalElement);
  
  const confirmBtn = document.getElementById('confirmFavoriteBtn');
  let targetButton = null; // 記錄目前點擊的愛心按鈕

  // 1. 點擊愛心按鈕時，攔截預設行為並開啟 BS5 Modal
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.favorite_icon');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();

      targetButton = btn; // 暫存該按鈕
      bsModal.show();     // 顯示 BS5 彈窗
    }
  });

  // 2. 點擊 Modal 內的「確認送出」按鈕
  confirmBtn.addEventListener('click', function() {
    if (targetButton) {
      // 加上 active 並置換為實心愛心
      targetButton.classList.add('active');
      const icon = targetButton.querySelector('i');
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');

      // 這裡可以加入 Ajax 傳送至後端儲存
      console.log('已成功加入收藏！');
    }

    // 關閉 Modal
    bsModal.hide();
    targetButton = null;
  });

  // 3. 如果點擊取消或關閉視窗，清除暫存按鈕（圖示維持空心）
  modalElement.addEventListener('hidden.bs.modal', function() {
    targetButton = null;
  });
});
//#endregion

//#region svg 變色	
$(function(){ 
	jQuery('img.svg').each(function(){   
		var $img = jQuery(this);   
		var imgID = $img.attr('id');   
		var imgClass = $img.attr('class');   
		var imgURL = $img.attr('src');   
	  
		jQuery.get(imgURL, function(data) {   
			// Get the SVG tag, ignore the rest   
			var $svg = jQuery(data).find('svg');   
	  
			// Add replaced image's ID to the new SVG   
			if(typeof imgID !== 'undefined') {   
				$svg = $svg.attr('id', imgID);   
			}   
			// Add replaced image's classes to the new SVG   
			if(typeof imgClass !== 'undefined') {   
				$svg = $svg.attr('class', imgClass+' replaced-svg');   
			}   
	  
			// Remove any invalid XML tags as per http://validator.w3.org   
			$svg = $svg.removeAttr('xmlns:a');   
	  
			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {   
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))   
			}   
	  
			// Replace image with new SVG   
			$img.replaceWith($svg);   
	  
		}, 'xml');   
	  
	});  
})
//#endregion


//#region 收藏列表
$(document).on('change', '.favorite_type input[type="checkbox"]', function() {
    const $item = $(this).closest('.item');
    if ($(this).is(':checked')) {
        $item.addClass('active');
    } else {
        $item.removeClass('active');
    }
});
//#endregion

//#region顯示密碼
$(document).ready(function() {
	$(".password_eye").on('click', function(event) {
		event.preventDefault();
		var that = $(this);
		if(that.parent().find('input').attr("type") == "text"){
			that.parent().find('input').attr('type', 'password');
			that.parent().find('i').addClass( "fa-eye-slash" );
			that.parent().find('i').removeClass( "fa-eye" );
		}else if(that.parent().find('input').attr("type") == "password"){
			that.parent().find('input').attr('type', 'text');
			that.parent().find('i').removeClass( "fa-eye-slash" );
			that.parent().find('i').addClass( "fa-eye" );
		}
	});
});
//#endregion


//#region 單選切換顯示內容
function toggleChoice(inputName) {
	var array = $('input[name="' + inputName + '"]');

	for (var i = 0; i < array.length; i++) {

		$("." + $(array[i]).attr("data-toggle")).hide();
	}
	var datatoggle = $('input[name="' + inputName + '"]:checked').attr("data-toggle");
	switch ($('input[name="' + inputName + '"]:checked').attr("data-toggle")) {
		case datatoggle:
			$('.' + datatoggle).show();
			break;
	}
}
//#endregion