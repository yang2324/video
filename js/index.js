var u = navigator.userAgent;
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
	/*alert("安卓手机");*/
	function clickHandler()
    {
        $("#slideVideo").trigger('play');
		$("#ctn").hide();
		$("#slideVideo").show();
		$("#close").show();
		$("#mybutton").hide();
		$(".totality").hide();
		$(".header_main").hide();
		$(".vAndi").hide();
		$(".MyVV").css("display","block");
		$(".videosbf").css("height",360);
    }
    function clickclose()
    {
        $("#slideVideo").trigger('pause');
		$("#ctn").show();
		$("#slideVideo").hide();
		$("#mybutton").show();
		$("#close").hide();
		$(".totality").show();
		$(".vAndi").show();
		$(".header_main").show();
		$(".MyVV").css("display","none");
		$(".videosbf").css("height",480);
    }
} else if (u.indexOf('iPhone') > -1) {
	/*alert("苹果手机");*/
	function clickHandler(){
        $("#slideVideo").trigger('play');
		$("#ctn").hide();
		$("#slideVideo").show();
		$("#mybutton").hide();
    }
    function clickclose(){
        $("#slideVideo").trigger('pause');
		$("#ctn").show();
		$("#slideVideo").hide();
		$("#mybutton").show();
    }
}
	
	$(".video_btn").on("click", function(){
		$("#slideVideo").trigger('play');
		$(".video_btn").hide();
		$("#ctn").hide();
		return false;
	});
	
	$(".swiper-slideVideo").on("click", function() {
		$("#slideVideo").trigger('pause');
		$(".video_btn").show();
	});
	
	$("#slideVideo").on("ended", function() {
		$(".video_btn").show();
	});
	$(".vAndi").show();
	//视频切换按钮
	$(".videoBtn").on("click", function() {
		$(".videoBtn").addClass("SWactive");
		$(".imgBtn").removeClass("SWactive");
		swiper1.slideTo(0, 1000, false);
		return false;
	});
	//图片切换按钮
	$(".imgBtn").on("click", function() {
		$(".imgBtn").addClass("SWactive");
		$(".videoBtn").removeClass("SWactive");
		swiper1.slideTo(2, 1000, false);
		$("#slideVideo").trigger('pause');
		$(".video_btn").show();
		return false;
	});

	
	var swiper1 = new Swiper('.case', {
		pagination: '.swiper-pagination',
		paginationType: 'custom',
		paginationClickable: true,
		updateOnImagesReady: true,
		lazyLoading: true,
		lazyLoadingInPrevNext: true,
		lazyLoadingInPrevNextAmount: 2,
		
		onSlideChangeStart: function(swiper) {
			var sliderIndex = swiper.activeIndex;
			$("#slideVideo").trigger('pause');
			$(".video_btn").show();
			if(sliderIndex == 0) {
				$(".videoBtn").addClass("SWactive");
				$(".imgBtn").removeClass("SWactive");
				
				var u = navigator.userAgent;
				if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					$(".header_main").hide();
				}
			}
			else{
				$(".imgBtn").addClass("SWactive");
				$(".videoBtn").removeClass("SWactive");
				$(".vrBtn").removeClass("SWactive");
				$(".header_main").show();
				$(".totality").show();
				$(".vAndi").show();
				$("#mybutton").show();
			}
		}
	});

//当页面向下滑动时候视频暂停播放
$(function(){
	$(function(){
        var banOffTop=$("#slideVideo").offset().top;//获取到距离顶部的垂直距离
        var scTop=0;//初始化垂直滚动的距离
        $(document).scroll(function(){
            scTop=$(this).scrollTop();//获取到滚动条拉动的距离
            console.log(scTop);//查看滚动时，垂直方向上，滚动条滚动的距离
            if(scTop>=480){
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
               $("#slideVideo").trigger('pause');
               $(".video_btn").show();
            }
        });
    });
})
$(function(){
	$(".video_t").click(function(){
		//点击菜单按钮事件
         $(this).css('display','none');
       });
});