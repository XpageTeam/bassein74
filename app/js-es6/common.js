$(document).ready(function(){
	loadScripts();
	// запускает анимацию карты в контактах
	setTimeout(function() {
		$('.contacts-__container_right').addClass('start');
	}, 1500);



	if($(window).width() > 668){
		$('.bassein-banner-item').hover(
			function(){
				$(this).addClass('js__hover');
			},
			function(){
				setTimeout(() => {
					$(this).removeClass('js__hover');
				}, 400)
			}
		);

	}

	var cloneBurger = $('.page-composite-pools .head .menu').clone();

	$('.page-composite-pools .header-composite').append(cloneBurger)




	// добавляет тени таблице в моб версии
	function table_shadow (table) {
		$(table).addClass('product-__table');
		$(table).wrap("<div class='product-__table_shadow'><div class='product-__table_overflow'></div></div>");
	}

	// добавляет класс на странице наших работ
	table_shadow(".works-detail table");
	// добавляет класс на каталога
	table_shadow(".catalog- table");
	// // добавляет div к радио кнопкам на странице наших работ
	// $(".works-__info_name input").after("<div class='radio-marker'></div>");

	// $(".product-__slider .slick-slide img.slick-loading").closest(".product-__slider .slick-slide").addClass('product_loading')
	// $('.product-__slider').on('init', function(event, slick, direction){
	// 	$(".product-__slider .slick-slide img.slick-loading").closest(".product-__slider .slick-slide").addClass('product_loading');
	// });

	let tableWrappers = document.querySelectorAll(".product-__table_overflow");

	tableWrappers.forEach(function(){
		this.addEventListener("scroll", function(){
			let scrollLeft
		})
	});

	// // плавный скролл по якорям
	$(".basseins-__anchor").on("click","a", function (event){
			// отключает нажатие ссылок
			event.preventDefault();
			var id  = $(this).attr('href');
			// var top = $(id).offset().top - 100;
			if ($(window).width() > 600) {

				if ($(this).parent().hasClass("fixedattop")) {
					// console.log(1)
					var top = $(id).offset().top - 100;
				}
				if (!($(this).parent().hasClass("fixedattop"))) {
					// console.log(2)
					var top = $(id).offset().top - 263;
				}
			};

			if ($(window).width() <= 600) {
				if ($(this).parent().hasClass("fixedattop")) {
					// console.log(11)
					var top = $(id).offset().top - 210;
				}
				if (!($(this).parent().hasClass("fixedattop"))) {
					// console.log(22)
					var top = $(id).offset().top - 559;
				}
			};

			$('body,html').animate({scrollTop: top}, 1000);
		});



	// // фиксация блока с якорями
	// if($("body").hasClass("page-composite-pools") && !($("body").hasClass("page-composite-pools-inner"))){
	//
	// 	var top3 = $('.basseins-__anchor').offset().top;
	// 	$(document).scroll(function(){
	// 		var documentScrollTop = $(document).scrollTop();
	// 		if (documentScrollTop > $('.basseins-__anchor').offset().top) {
	// 			$('.basseins-__anchor').parent().addClass('fixedattop');
	// 			$('.basseins-__anchor').addClass('fixedattop');
	// 		}
	// 		else if (documentScrollTop < top3) {
	// 			$('.basseins-__anchor').parent().removeClass('fixedattop');
	// 			$('.basseins-__anchor').removeClass('fixedattop');
	// 		}
	// 	});
	// }

	// hover табы в композитных
	$(".product-__sample_block_item_tab").hover(function(e){
		let $this = $(this),
			id = $this.attr("data-id");

		$(".product-__sample_block h2, .product-__sample_block_text").css({
			// opacity: 0,
		});

		$('.product-__sample_block_item_tab').removeClass('active');

		$this.addClass('active');

		$('.product-__sample_block_img').css("opacity", "0");
		$(".product-__sample_block_img[data-id='"+id+"']").css("opacity", "1");
	},function(){
		$(".product-__sample_block h2, .product-__sample_block_text").css({
			// opacity: 1,
		});

		$('.product-__sample_block_img').css("opacity", "0");
		$('.product-__sample_block_item_tab').removeClass('active');
	});

	// ползунок в композитных

	$( ".product-__roll_block_slider_btn" ).draggable({ axis: "x", containment: ".product-__roll_block_slider", scroll: false  ,
		drag: function(event, ui) {
			var x = $( ".product-__roll_block_slider_btn" ).css("left");
			$( ".product-__roll_block_top" ).css("left", x);
			// $( ".product-__roll_block_slider_left" ).css("right", x);
			$( ".product-__roll_block_slider_right" ).css("left", x);

			console.log(x);
		}});



	// запускает анимацию главной страницы
	setTimeout(function() {
		$('body').addClass('start');
	}, 500);

	// открытие мобильного меню
	$('.menu').click(function(){
		$(this).toggleClass('open');
		$('body').toggleClass("mobile-menu--open");
		$('.head__mobile_dropdown ul').removeClass('sub_menu__open');
	});
	// dropdown в мобильнои меню
	$('.head__mobile_dropdown ul').click(function(){

			var $this = $(this);
			$('.head__mobile_dropdown ul').removeClass('sub_menu__open');
			$this.addClass('sub_menu__open');
	});
	// слайдер наших работ
	$(".works-__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".works-__slider_slide",
		dots: true,
		asNavFor: '.works-__slider_nav',

	})
	$('.works-__slider_nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".works-__slider_nav_slide",
		asNavFor: '.works-__slider',
		arrows: false,
		fade: true,
	});
	// слайдер карточки товара
	$(".card-__right_slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".card-__right_slide",
		// dots: true,
	})
	// слайдер product
	$(".product-__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".product-__slide",
		asNavFor: '.product-__slider_nav',
	})
	// слайдер product nav
	$('.product-__slider_nav').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		slide: ".product-__slide_nav",
		asNavFor: '.product-__slider',
		arrows: false,
		focusOnSelect: true,
		responsive: [
       {
         breakpoint: 1000,
         settings: {
           slidesToShow: 5
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 3
         }
       }
       ]
	});
		// слайдеры композитных бассейнов
	$(".basseins-__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".basseins-__slide",
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 8000,
	})
	// слайдер на главной
	$(".main__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		slide: ".main__slide",
		arrows: false,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
	})
	// табы
	$(".advantage-__right_item").on(!is.mobile() ? "mouseenter" : "click", function(e){
		// console.log(e);

		let $this = $(this);
		let id = $this.attr("data-id");
		$('.advantage-__right_item').removeClass('active');
		$(this).addClass('active');
		$('.advantage-__left_block_item').css("display", "none");
		$(".advantage-__left_block_item[data-id='"+id+"']").css("display", "block");
		// скролл наверх по клику в моб версии
		if (e.type=="click") {}
		$("html, body").animate({
         scrollTop: 0
      }, {
         duration: 500,
         easing: "swing"
      });
	});

	// добавление класса в браузере EDGE
	if (is.edge()) {
			$('html').addClass('bx-ie');
	}
	// добавление класса во всем кроме сафари
	if (is.not.safari()) {
			$('html').addClass('notSafari');
	}

	// прокрутка к верху страницы в "наших приемуществах"
   $(".advantage-__right_item").click(function() {

   });

		// dropdown в каталоге
	$('.catalog-__left_item.nesting .catalog-__left_title').click(function(){

			var $this = $(this);
			$this.toggleClass('open');
			// $this.next("ul.catalog-__left_list").toggleClass('open');
			$this.next("ul.catalog-__left_list").slideToggle(300)
	});

	$('.product-__table_overflow').each(function(){
		let $this  = $(this);

		if (this.clientWidth < this.scrollWidth){
			$this.closest('.product-__table_shadow').addClass("shadow_right");
		}else{
			$this.closest('.product-__table_shadow').removeClass("shadow_right");
		}
	});

	$('.product-__table_overflow').scroll(function(){
		// прокрутка слева
		var a = this.scrollLeft;
		// левая тень
		if (a > 10) {
			$(this).closest('.product-__table_shadow').addClass("shadow_left")
		}
		else{
			$(this).closest('.product-__table_shadow').removeClass("shadow_left")
		}

		console.log(this.scrollLeft + this.clientWidth - this.scrollWidth);

		if (this.scrollWidth - (this.scrollLeft + this.clientWidth) <= 20){
			this.closest('.product-__table_shadow').classList.remove("shadow_right")
		}else{
			this.closest('.product-__table_shadow').classList.add("shadow_right")
		}
	});

	$('.product-__table_shadow').addClass("shadow")

	if($(window).width() > 480) {
	  // change functionality for smaller screens// скролл таблицы
	  $('.product-__table_overflow').scroll(function(){
		// прокрутка слева
		var a = $('.product-__table_overflow').scrollLeft();
		// console.log(a);
		// ширина окна
		var window_w = (window.innerWidth);
		// ширина таблицы - ширина окна - падинги окна
		var x = (1000 - window_w - 64);
		// console.log(x);
		// удаляет класс с тенью
		if (a >= x) {
			$('.product-__table_shadow').removeClass("shadow")
		}
		else{
			$('.product-__table_shadow').addClass("shadow")
		}

	});
	} else {
	  // скролл таблицы
	$('.product-__table_overflow').scroll(function(){
		// прокрутка слева
		var a = $('.product-__table_overflow').scrollLeft();
		// console.log(a);
		// ширина окна
		var window_w = (window.innerWidth);
		// ширина таблицы - ширина окна - падинги окна
		var x = (1000 - window_w - 90);
		// console.log(x);
		// удаляет класс с тенью
		if (a >= x) {
			$('.product-__table_shadow').removeClass("shadow")
		}
		else{
			$('.product-__table_shadow').addClass("shadow")
		}
	});
	}

	// // slick-cloned
	// $("slick-cloned").removeClass("fancybox")
	// $(".slick-cloned a").removeClass("fancybox")
	// $( ".slick-cloned" ).each(function() {
	// 	$( this ).addClass( "foo" );
	// });
	// $('.myList li').each(function(){
	// 	$(this).css("color", "green");
	// }


		// sliderFilter(1);
		// // фильтрация слайдов в "наших работах"
		// $('.works-__info_name input[type="radio"]').on('change', function(){
		// 		let val = +$(this).val();
		// 		sliderFilter(val);
		// });

	$(".content__block_title").each((i, el) => {
		changeFS($(el))
	});

});

$(window).on("resize", _ => {
	$(".content__block_title").each((i, el) => {
		changeFS($(el))
	});
});

const changeFS = $textBlock => {
	let step = 0.1,
		minFS = 9,
		curFS = parseInt($textBlock.css("font-size"), 10),
		blockWidth = Math.round($textBlock.width()),
		parentWidth = Math.round($textBlock.closest(".content__block").width());

	console.log(curFS, blockWidth, parentWidth);

	if (curFS > minFS && blockWidth > parentWidth){
		$textBlock.css({
			'font-size': curFS - step,
		});

		changeFS($textBlock);
	}

}

function sliderFilter (val) {
	$(".works-__slider").slick('slickUnfilter');
	$(".works-__slider_nav").slick('slickUnfilter');
	$('.works-__slider').slick('slickFilter', function(id, slide){

		let $slide = $(slide);

		return +$slide.data("id") == val;
	});
	$('.works-__slider_nav').slick('slickFilter', function(id, slide){

		let $slide = $(slide);

		return +$slide.data("id") == val;
	});
}

const loadScripts = e => {
	// fancybox
	$(".fancybox").fancybox({
		beforeShow(){
			$("body").addClass("fancy-active")
		},
		afterClose(){
			$("body").removeClass("fancy-active")
		}
	});
};

// обновление главной страницы после ресайза
// if ($(window).width() > 1024) {
// 	$(window).resize(function() {
// 		if ($("body").hasClass("main")) {
// 			clearTimeout(window.resizedFinished);
// 			window.resizedFinished = setTimeout(function(){
// 				location.reload();
// 			}, 250);
// 		}
// 	});
// };


// $("body").addClass("mainAnimate")

// анимация воды на главной----------------------
// if ($("body").hasClass("main") && $(window).width() > 1024) {
// 	$(e => {

// 		var canvasImage = '/local/templates/bassein2018/img/photos/bg-main.jpg';
// 		const filterTexture = 'https://res.cloudinary.com/cdn-data/image/upload/v1513024988/awzuINU_qrktxk.jpg';
// 		// размеры картинки
// 		const imageWidth = 1903;
// 		const imageHeight = 960;
// 		const displacementSprite  = new PIXI.Sprite.fromImage( filterTexture );
// 		const displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );

// 		class Canvas extends React.Component {
// 			constructor(props) {
// 				super(props)
// 				this.pixiSetup = this.pixiSetup.bind(this);
// 				this.pixiAnimate = this.pixiAnimate.bind(this);
// 				this.pixiImageSetup = this.pixiImageSetup.bind(this);
// 				this.displacementFilter = this.displacementFilter.bind(this);
// 			}

// 			componentDidMount() {
// 				this.pixiSetup();
// 				this.displacementFilter();
// 				this.pixiAnimate();
// 			}

// 			pixiSetup() {
// 				PIXI.utils.skipHello();
// 				this.canvasHeight = window.innerHeight;
// 				this.canvasWidth = window.innerWidth;

// 				this.renderer = PIXI.autoDetectRenderer(this.canvasWidth, this.canvasHeight);
// 				this.renderer.backgroundColor = 0xFFFFFF;
// 				this.refs.canvasContainer.appendChild(this.renderer.view);

// 				this.stage = new PIXI.Container();
// 				this.stage.width = this.canvasWidth;
// 				this.stage.height = this.canvasHeight;

// 				this.loader = PIXI.loader;
// 				this.loader.add(canvasImage);
// 				this.loader.load(this.pixiImageSetup);
// 			}
// 		  // скорость анимации
// 		  pixiAnimate() {
// 		  	this.ticker = new PIXI.ticker.Ticker();
// 		  	this.ticker.autoStart = true;
// 		  	this.ticker.add( (delta) => {
// 		  		displacementSprite.x += 4 * delta;
// 		  		displacementSprite.y += 2;

// 		      //console.log(this.stage)
// 		      this.renderer.render(this.stage);
// 		    });
// 		  }



// 		  pixiImageSetup() {
// 		  	this.image = new PIXI.Sprite(PIXI.loader.resources[canvasImage].texture);
// 		  	this.stage.addChild(this.image);

// 		    // Calculate ratio - image cover
// 		    this.greaterRatio = Math.max(this.canvasWidth / imageWidth, this.canvasHeight / imageHeight);
// 		    this.greaterRatioIncrease = this.greaterRatio * 1.2;
// 		    this.image.scale.set(this.greaterRatioIncrease, this.greaterRatioIncrease)

// 		    // Image position
// 		    this.image.position.x = - this.greaterRatioIncrease * 5;
// 		    this.image.position.y = - this.greaterRatioIncrease * 5;
// 		  }

// 		  displacementFilter() {
// 		  	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
// 		  	displacementSprite.scale.x = 2;
// 		  	displacementSprite.scale.y = 2;
// 		  	displacementFilter.autoFit = true;

// 		  	this.stage.filters = [displacementFilter];
// 		  	this.stage.addChild( displacementSprite );

// 		  	this.initFilterValues = {
// 		  		x: displacementFilter.scale.x,
// 		  		y: displacementFilter.scale.y
// 		  	}
// 		  }

// 		  render() {
// 		  	return React.createElement('div', { className: 'canvas-container', ref: 'canvasContainer' });
// 		  }

// 		}
// 		ReactDOM.render(React.createElement(Canvas, null), document.getElementById('app'));
// 		setTimeout(function() {
// 			$("body").addClass("mainAnimate")
// 		}, 4000);
// 	});
// }
// else {
// 	$("body").addClass("mainAnimate")
//

// фикс ползунка для телефонов
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
