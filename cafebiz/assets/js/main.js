// Section2 line

var ava1 = $('#item-ava1');
var ava2 = $('#item-ava2');
var ava3 = $('#item-ava3');
var ava4 = $('#item-ava4');
var ava5 = $('#item-ava5');

var detail1 = $('#item-detail1');
var detail2 = $('#item-detail2');
var detail3 = $('#item-detail3');
var detail4 = $('#item-detail4');
var detail5 = $('#item-detail5');

var line1 = $('.line1');
var line2 = $('.line2');

// line
var tween1 = TweenMax.from(line1, 1, { x: '-=100px', autoAlpha: 0, ease: Power2.easeInOut, delay: 1.25 });
var tween2 = TweenMax.from(line2, 1, { x: '-=100px', autoAlpha: 0, ease: Power2.easeInOut, delay: 2.25 });

// item1
var tween3 = TweenMax.from(ava1, 1, { x: '-=50px', autoAlpha: 0, ease: Power2.easeInOut });
var tween4 = TweenMax.from(detail1, 1, { y: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 0.5 });

// item2
var tween5 = TweenMax.from(ava2, 1, { x: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 1 });
var tween6 = TweenMax.from(detail2, 1, { y: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 1.5 });

// item3
var tween7 = TweenMax.from(ava3, 1, { x: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 2 });
var tween8 = TweenMax.from(detail3, 1, { y: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 2.5 });

// item4
var tween9 = TweenMax.from(ava4, 1, { y: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 3 });
var tween10 = TweenMax.from(detail4, 1, { x: '+=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 3.5 });

// item5
var tween11 = TweenMax.from(ava5, 1, { y: '-=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 4 });
var tween12 = TweenMax.from(detail5, 1, { x: '+=50px', autoAlpha: 0, ease: Power2.easeInOut, delay: 4.5 });


var controller = new ScrollMagic.Controller();
var timeline1 = new TimelineMax();
timeline1.add([tween1, tween2, tween3, tween4, tween5, tween6, tween7, tween8, tween9, tween10, tween11, tween12]);

var containerScene1 = new ScrollMagic.Scene({
    triggerElement: '.section2',
    offset: -100,
    reverse: false
})
    .setTween(timeline1)
    // .addIndicators()
    .addTo(controller);

// Section2 text-section
var s2tween = TweenMax.from($(".text-section"), 1, { y: "+=20px", autoAlpha: 0, ease: Power2.easeInOut });
new ScrollMagic.Scene({
    triggerElement: '.text-section',
    offset: -100,
    reverse: false
})
    .setTween(s2tween)
    // .addIndicators()
    .addTo(controller);


// Section4
var s4 = $('#s4-img');
var s4tween = TweenMax.from(s4, 1, { y: '+=50px', autoAlpha: 0, ease: Power2.easeInOut });
var containerScene3 = new ScrollMagic.Scene({
    triggerElement: '.section4',
    offset: -100,
    reverse: false
})

    .setTween(s4tween)
    // .addIndicators()
    .addTo(controller);

// Section1 (Counter)
function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var counter1 = { var: 0 };
var counter2 = { var: 0 };
var tal1 = document.getElementById("tal1");
var tal2 = document.getElementById("tal2");

var num1 = TweenMax.to(counter1, 2, {
    var: 34155963,
    onUpdate: function () {
        var nwc = numberWithCommas(counter1.var);
        tal1.innerHTML = nwc;
    },
    ease: Circ.easeOut
});

var num2 = TweenMax.to(counter2, 2, {
    var: 20903205,
    onUpdate: function () {
        var nwc = numberWithCommas(counter2.var);
        tal2.innerHTML = nwc;
    },
    ease: Circ.easeOut
});

var timeline2 = new TimelineMax();
timeline2.add([num1, num2]);
new ScrollMagic.Scene({
    triggerElement: '.counter-container',
    offset: -150,
    reverse: false
})
    .setTween(timeline2)
    // .addIndicators()
    .addTo(controller);

// End Section1 (Counter)



// Section1 (chart)
var path = $('.path');

new ScrollMagic.Scene({
    triggerElement: '.chart-container',
    offset: -150,
    reverse: false
})
    .setTween(TweenMax.staggerFrom(path, 1.5, { scaleY: 0, transformOrigin: "0% 100%" }, 0.5))
    // .addIndicators()
    .addTo(controller);

// Section1 (fixed-img)
var path1 = TweenMax.staggerFrom($('.path-icon'), 1, { scaleY: 0, autoAlpha: 0, transformOrigin: "0% 100%" }, 0.25),
    path2 = TweenMax.staggerFrom($('.icon-img'), 1, { x: "-=5px", autoAlpha: 0 }, 0.25);
var timeline3 = new TimelineMax();
timeline3.add([path1, path2]);

new ScrollMagic.Scene({
    triggerElement: '.fixed-img',
    offset: -100,
    reverse: false
})
    .setTween(timeline3)
    // .addIndicators()
    .addTo(controller);


// Section3 (chart1)
var timeline4 = new TimelineMax();
timeline4.from($('.chart'), 1, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($('.cls'), 0.1, { opacity: 0, autoAlpha: 0 }, "+=0.25")
    .from($('.icon'), 0.2, { opacity: 0, autoAlpha: 0, ease: Power3.easeInOut }, "-=0.2");

new ScrollMagic.Scene({
    triggerElement: '#s3chart-box1',
    offset: -100,
    reverse: false
})
    .setTween(timeline4)
    // .addIndicators()
    .addTo(controller);

// Section3 (chart2)
var timeline5 = new TimelineMax();
timeline5.from($("#chart-box2"), 1, { y: "+=20px", opacity: 0, autoAlpha: 0, ease: Power2.easeInOut });

new ScrollMagic.Scene({
    triggerElement: '#s3chart-box2',
    offset: -100,
    reverse: false
})
    .setTween(timeline5)
    // .addIndicators()
    .addTo(controller);

// section5
var s5tween = TweenMax.from($(".section5 .section-detail"), 1, { y: '+=50px', autoAlpha: 0, ease: Power2.easeInOut });
new ScrollMagic.Scene({
    triggerElement: '.section5',
    offset: -100,
    reverse: false
})

    .setTween(s5tween)
    // .addIndicators()
    .addTo(controller);
