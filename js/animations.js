jQuery(function() {

	var controller = new ScrollMagic.Controller();


	/* ----------------------------- COVER 1 ------------------------------ */
	var heroTimeline = new TimelineMax()
	.to(".hero .triangle", 0.6,
		{rotation: "+=90",fill:"rgba(244, 197, 80,1)", ease:Power4.easeOut},
		1
	)
	.to(".hero .trame", 0.6,
		{rotation: "+=40", ease:Power4.easeOut},
		"-=0.4"
	)
	.fromTo(".hero h1 span:nth-of-type(1)", 0.6,
		{y:300,opacity:0},
		{y:0,opacity:1, ease: Power4.easeOut},
		"-=0.3"
	)
	.fromTo(".hero h1 span:nth-of-type(2)", 0.4,
		{y:300,opacity:0},
		{y:0,opacity:1, ease: Power4.easeOut},
		"-=0.3"
	)
	.fromTo(".hero .year span:nth-of-type(1)", 0.6,
		{x:-300,opacity:0},
		{x:0,opacity:1, ease: Power4.easeOut},
		"+=0.5"
	)
	.fromTo(".hero .year span:nth-of-type(2)", 0.5,
		{x:-300,opacity:0},
		{x:0,opacity:1, ease: Power4.easeOut},
		"-=0.5"
	)
	.fromTo(".hero .caption-subtitle span:nth-of-type(1)", 0.7,
		{y:300,opacity:0},
		{y:0,opacity:1, ease:  Power4.easeOut},
		"+=0.2"
	)
	.fromTo(".hero .caption-subtitle span:nth-of-type(2)", 0.5,
		{y:300,opacity:0},
		{y:0,opacity:1, ease: Power4.easeOut},
		"-=0.5"
	)
	.fromTo(".hero .caption-subtitle span:nth-of-type(3)", 0.5,
		{y:300,opacity:0},
		{y:0,opacity:1, ease: Power4.easeOut},
		"-=0.4"
	)
	.fromTo(".hero .caption-subtitle span:nth-of-type(4)", 0.5,
		{y:300,opacity:0},
		{y:0,opacity:1, ease: Power4.easeOut},
		"-=0.4"
	)
	
	

	var sceneHeroDuration = 0;

	var sceneHero = new ScrollMagic
		.Scene({
			triggerElement: '.hero-holder .content',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: sceneHeroDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(1) 						// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setClassToggle(".hero", "active") 		// add class toggle
		.setTween(heroTimeline) 							// Add Tween animation
		.addTo(controller);

	/* ----------------------------- On vous raconte tout 2 ------------------------------ */


	var aboutTimeline = new TimelineMax()
	.fromTo("#about-us .caption-subtitle span:nth-of-type(1)", 0.8,
		{x:-1000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	.fromTo("#about-us .caption-subtitle span:nth-of-type(2)", 0.3,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.2"
	)
	.fromTo("#about-us .caption-subtitle span:nth-of-type(3)", 0.3,
		{x:-3000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.2"
	)
	.fromTo("#about-us .caption-subtitle span:nth-of-type(4)", 0.3,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.2"
	);

	var sceneAboutDuration = 0;

	var scenehero = new ScrollMagic
		.Scene({
			triggerElement: '#about-us .container',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: sceneAboutDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.8) 						// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setClassToggle("#about-us", "active") 		// add class toggle
		.setTween(aboutTimeline) 							// Add Tween animation
		.addTo(controller);



	/* --------------------------  characteristics 3  --------------------------------- */


	var aboutCards = new TimelineMax()
	.fromTo("#characteristics .about-card:nth-of-type(1)", 1,
		{x:1000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	.fromTo("#characteristics .about-card:nth-of-type(2)", 1,
		{x:2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.6"
	)
	.fromTo("#characteristics .about-card:nth-of-type(3)", 1,
		{x:3000,opacity:0},
		{x:0,opacity:1,ease:Power1.easeOut},
		"-=0.2"
	);



	var sceneCardsDuration = $('#characteristics').height();

	var sceneCards = new ScrollMagic
		.Scene({
			triggerElement: '#characteristics .image-holder',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: sceneCardsDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(1) 	// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setClassToggle("#characteristics", "active") 		// add class toggle
		.setTween(aboutCards) 							// Add Tween animation
		.addTo(controller);




/* -------------------------  LA RÉVOLUTION ARABICA 4 ---------------------------------- */


	var revolutionCaption = new TimelineMax()

	.fromTo("#our-products h2", 1,
		{x:0,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	).
	fromTo("#our-products .caption-subtitle span", 1,
		{x:0,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.4"
	)
	/*
	.fromTo("#our-products .caption-subtitle span:nth-of-type(1)", 0.5,
		{x:0,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	.fromTo("#our-products .caption-subtitle span:nth-of-type(2)", 0.4,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"+=0.4"
	)
	.fromTo("#our-products .caption-subtitle span:nth-of-type(3)", 0.4,
		{x:-3000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"+=0.4"
	)
	.fromTo("#our-products .caption-subtitle span:nth-of-type(4)", 0.4,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"+=0.4"
	)*/
	.fromTo("#our-products p",1,
		{x:0,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.4"
	).fromTo("#our-products a",1,
		{opacity:0},
		{opacity:1, ease:Power1.easeOut},
		"-=0.4"
	)
	.fromTo("#our-products a",1,
		{x:0},
		{x:0, ease:Power1.easeOut},
		"-=0.4"
	);

	var revolutionDuration = $(window).width()/2;

	var revolution = new ScrollMagic
		.Scene({
			triggerElement: '#our-products',	 // starting scene, when reaching this element
			offset: - $(window).height() / 10, // start scene after scrolling for n px
			duration: revolutionDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0) 	// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setTween(revolutionCaption)
		.setClassToggle("#our-products", "active") 		// add class toggle
		.setPin("#our-products .caption-holder")	
		.addTo(controller);


	/* ----------------------------- Carte Noire  : Classique, impertinence, indémodable 5 ------------------------------ */



/* -------------------------  Timeline PRODUCTS  6 ---------------------------------- */

var product0, product1, product2;

	$('.product-card').each(function(){
		var slickIndex = $(this).data("slick-index");
		if (slickIndex == 0){
			 product0 = $(this)
		} 
		if (slickIndex == 1){
			 product1 = $(this)
		}
		if (slickIndex == 2){
			 product2 = $(this)
		}
	})

	var productCards = new TimelineMax()
		.fromTo(product0, 0.3,
		{opacity:0},
		{opacity:1, ease: Circ.easeInOut}
	)
	.fromTo(product1, 0.3,
		{opacity:0},
		{opacity:1, delay:1 ,ease: Circ.easeInOut},
		"-=0.3"
	)
		
	.fromTo(product2, 0.3,
		{opacity:0},
		{opacity:1, ease: Circ.easeInOut},
		"-=0.1"
	)

	var productCardsDuration = 0

	var productCards = new ScrollMagic
		.Scene({
			triggerElement: '#our-products a',	 // starting scene, when reaching this element
			offset: 0, // start scene after scrolling for n px
			duration: productCardsDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.8) 	// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setClassToggle(".product-carousel", "active") 		// add class toggle
		.setTween(productCards) // Add Tween animation//
		.addTo(controller);





	// ---------------------- COUNTER ANIMATION 7 ------------------------ =//

	var numbers = new ScrollMagic
		.Scene({
			triggerElement: '#attachment-section',	 // starting scene, when reaching this element
			offset: 0, // start scene after scrolling for n px
			duration: productCardsDuration,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.5) 	// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setClassToggle("#attachment-section", "active") 		// add class toggle
		.on('start', function () {
        	animateNumbers();
        	$('.attachment-card p').each(function(){
				fadeText($(this))
			})
   		})
		.addTo(controller);



	// Seperate thousands with a blank space (not for decimals)
	function seperateThousands(originalNumber, gap, seperator){
		var originalNumber = originalNumber;
		originalNumber = originalNumber.toString();

		// thousands array
		var thousandsArray = [];
		var thousandsString = "";

		// recombine thousand - number er number
		var splitedNbArray = [];
		var splitedNbString = "";

		// On parcours le nombre original tous les 3 chiffres en partant de la fin
		for (var i = originalNumber.length - gap; i >= 0 - gap; i -= gap){

			splitedNbArray = [];

			// pour 3 gap, j= 0, 1, 2
			for (var j = gap -1; j>=0;j --){
				splitedNbArray.push(originalNumber[i + j])
			}
			splitedNbString = splitedNbArray.reverse().join('');

			// console.log("splitedNbString : "+ splitedNbString);

			thousandsArray.push(splitedNbString);
		}

		thousandsArray.reverse();
		thousandsString = thousandsArray.join(seperator);

		// console.log(thousandsArray);
		// console.log("thousandsString : "+ thousandsString);
		return thousandsString;
	}


function animateNumbers() {

		// for each gif, play it
		$('.gif').each(function(){
			var Gsrc = $(this).attr('src');
			$(this).attr('src', Gsrc);
		});


		//for each number
		$('.count').each(function () {

			// Nombre entier
			if ($(this).hasClass("ceil")){
				$(this).prop('Counter',0).stop(true, true).delay( $(this).data('delay')).animate({
				    Counter: $(this).data('number')
					}, {
					    duration: $(this).data('speed'),
					    easing: 'swing',
					   	step: function (now) {
					        var num = (Math.ceil(now)).toString();
					        num = seperateThousands(num, 3, " ");

					        $(this).text(num);
					    }
				})
			} // Une decimale
			else {
				$(this).prop('Counter',0).animate({
				    Counter: $(this).data('number')
					}, {
					    duration: 4000,
					    easing: 'swing',
					   	step: function (now) {
					   		var num = now.toFixed(1).toString().replace(".", ",");

					    	$(this).text(num);
					    }
				});
			}
		});
	
}


	// ---------------------- Le saviez vous 8 ------------------------ =//


	var saviezvousTimeline = new TimelineMax()
	.fromTo("#attachment-section .caption-subtitle span:nth-of-type(1)", 0.5,
		{x:-1000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	.fromTo("#attachment-section .caption-subtitle span:nth-of-type(2)", 0.5,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.1"
	)
	.fromTo("#attachment-section .caption-subtitle span:nth-of-type(3)", 0.5,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.2"
	)
	.fromTo("#attachment-section .caption-subtitle span:nth-of-type(4)", 0.5,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.2"
	)

	var scenesaviezvous = new ScrollMagic
		.Scene({
			triggerElement: '#attachment-section .container',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: 0,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.8) 						// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setTween(saviezvousTimeline) 							// Add Tween animation
		.addTo(controller);



	// ---------------------- Info 9 ------------------------ =//


	var infoTimeline = new TimelineMax()
	.fromTo("#info-section .caption-subtitle span:nth-of-type(1)", 0.8,
		{x:-1000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	.fromTo("#info-section .caption-subtitle span:nth-of-type(2)", 0.4,
		{x:-2000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut},
		"-=0.1"
	)

	var sceneinfo = new ScrollMagic
		.Scene({
			triggerElement: '#info-section .container',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: 0,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.8) 						// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setTween(infoTimeline) 							// Add Tween animation
		.addTo(controller);



	// ---------------------- Saga 10 ------------------------ =//

	var sagaTimeline = new TimelineMax()
	.fromTo("#advertising .caption-subtitle span", 0.5,
		{x:-1000,opacity:0},
		{x:0,opacity:1, ease:Power1.easeOut}
	)
	var scenesaga = new ScrollMagic
		.Scene({
			triggerElement: '#advertising .container',		 // starting scene, when reaching this element
			offset: 0, 							// start scene after scrolling for n px
			duration: 0,			 // pin the element for n px || "n%" of scrolling
			reverse: true 						// allows the effect to trigger when scrolled in the reverse direction
		})
		.triggerHook(0.5) 						// START when on trigger [Leave = 0 , center = 0.5, Enter = 1]
		.setTween(sagaTimeline) 				// Add Tween animation
		.addTo(controller);


	// ---------------------- Fade text ------------------------ =//

	function fadeText(element){
		var delay = element.data('delay');
		console.log(element.html())
		setTimeout(function(){
			element.animate({
				opacity:1
			})
		}, delay)
	}
	

});


/*

on vous racontout moins rapide



*/