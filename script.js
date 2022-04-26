  class StickyNavigation {

  	constructor() {
  		this.currentId = null;
  		this.currentTab = null;
  		this.tabContainerHeight = 70;
  		let self = this;
  		$('.menu_btn').click(function () {
  			self.onTabClick(event, $(this));
  		});
  		$(window).scroll(() => {
  			this.onScroll();
  		});
  		$(window).resize(() => {
  			this.onResize();
  		});
  	}

  	onTabClick(event, element) {
  		event.preventDefault();
  		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
  		$('html, body').animate({
  			scrollTop: scrollTop
  		}, 600);
  	}

  	onScroll() {
  		this.checkTabContainerPosition();
  		this.findCurrentTabSelector();
  	}

  	onResize() {
  		if (this.currentId) {
  			this.setSliderCss();
  		}
  	}

  	checkTabContainerPosition() {
  		let offset = $('.menu').offset().top + $('.menu').height() - this.tabContainerHeight;
  		if ($(window).scrollTop() > offset) {
  			$('.options').addClass('options--top');

  		} else {
  			$('.options').removeClass('options--top');
  		}
  	}

  	findCurrentTabSelector(element) {
  		let newCurrentId;
  		let newCurrentTab;
  		let self = this;
  		$('.menu_btn').each(function () {
  			let id = $(this).attr('href');
  			let offsetTop = $(id).offset().top - self.tabContainerHeight;
  			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
  			if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
  				newCurrentId = id;
  				newCurrentTab = $(this);
  			}
  		});
  		if (this.currentId != newCurrentId || this.currentId === null) {
  			this.currentId = newCurrentId;
  			this.currentTab = newCurrentTab;
  			this.setSliderCss();
  		}
  	}

  	setSliderCss() {
  		let width = 0;
  		let left = 0;
  		if (this.currentTab) {
  			width = this.currentTab.css('width');
  			left = this.currentTab.offset().left;
  		}
  		$('.options-slider').css('width', width);
  		$('.options-slider').css('left', left);
  	}


  }



  new StickyNavigation();

  // about
  $(document).ready(function () {
  	$('a1.menu_btn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay').fadeIn(297, function () {
  			$('#aboutPage')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#aboutPage__close, #myOverlay').click(function () {
  		$('#aboutPage').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});


  	$('a2.menu_btn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay2').fadeIn(297, function () {
  			$('#repertoire')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#repertoire__close, #myOverlay2').click(function () {
  		$('#repertoire').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay2').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});

  	$('a3.menu_btn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay3').fadeIn(297, function () {
  			$('#myBlog')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#myBlog__close, #myOverlay3').click(function () {
  		$('#myBlog').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay3').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});

  	$('a4.menu_btn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay4').fadeIn(297, function () {
  			$('#contact')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#contact__close, #myOverlay4').click(function () {
  		$('#contact').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay4').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});

  	$('.expBtn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay5').fadeIn(297, function () {
  			$('#expPage')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#exp__close, #myOverlay5').click(function () {
  		$('#expPage').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay5').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});

  	$('a7.menu_btn').click(function (event) {
  		event.preventDefault();
  		$('#myOverlay6').fadeIn(297, function () {
  			$('#pulp')
  				.css('display', 'block')
  				.animate({
  					opacity: 1
  				}, 198);
  			$('#homePage')
  				.css('display', 'none')
  				.animate({
  					opacity: 0
  				}, 198);
  		});
  	});

  	$('#pulp__close, #myOverlay6').click(function () {
  		$('#pulp').animate({
  				opacity: 0
  			}, 198,
  			function () {
  				$(this).css('display', 'none');
  				$('#myOverlay6').fadeOut(297);
  			});
  		$('#homePage')
  			.css('display', 'block')
  			.animate({
  				opacity: 1
  			}, 198);
  	});
  });