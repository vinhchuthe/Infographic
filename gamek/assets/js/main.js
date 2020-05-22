// init controler
var controller = new ScrollMagic.Controller();

// Section1
var tl = $('.timeline-block');
var tltween = TweenMax.staggerFrom(tl, 1, { y: '+=50px', autoAlpha: 0 }, 0.5);
var containerScene1 = new ScrollMagic.Scene({
    triggerElement: '.section1',
    offset: -100,
    reverse: false
})

    .setTween(tltween)
    // .addIndicators()
    .addTo(controller);

// Section2

// build scenes
var revealElements = $(".chart");
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: -100,												 // start a little later
        reverse: false
    })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

// Section2 chart3
var tl3 = new TimelineMax();
tl3.set($(".red"), { fill: "rgb(221,221,221)" })
    .set($(".line"), { strokeDasharray: 500, strokeDashoffset: 500 })
    .set($(".dot"), { opacity: 0 })
    .from($("#text-box"), 1, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut })
    .fromTo($(".line"), 1, { strokeDashoffset: 500 }, { strokeDashoffset: 0 })
    .to($(".dot"), 0.5, { opacity: 1, ease: Power2.easeInOut }, "-=0.25")
    .to($(".red"), 0.75, { fill: "rgb(204,25,46)", ease: Power2.easeInOut })

new ScrollMagic.Scene({
    triggerElement: '.chart3',
    offset: -50,
    reverse: false
})
    .setTween(tl3)
    // .addIndicators()
    .addTo(controller);


// Section3 graph1
var tl = new TimelineMax();
tl.set($(".path"), { strokeDasharray: 500, strokeDashoffset: 500 })
    .staggerFrom($(".pie"), 1, { scale: 0, autoAlpha: 0, transformOrigin: "50% 50%", ease: Power2.easeInOut }, 0.25)
    .from($(".group-text"), 1, { y: "+=20px", autoAlpha: 0, ease: Power2.easeInOut })
    .from($(".group-dot"), 1, { autoAlpha: 0 })
    .fromTo($(".path"), 2, { strokeDashoffset: 500 }, { strokeDashoffset: 0 });

new ScrollMagic.Scene({
    triggerElement: '.graph1-box',
    offset: -50,
    reverse: false
})
    .setTween(tl)
    // .addIndicators()
    .addTo(controller);

// Section3 graph2
var tl2 = new TimelineMax();
tl2.from($("#Rectangle_37"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text1"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_38"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text2"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_39"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text3"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_40"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text4"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_41"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text5"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_42"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text6"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25")
    .from($("#Rectangle_43"), 0.75, { scaleY: 0, transformOrigin: "0% 100%" })
    .from($(".text7"), 0.5, { y: "+=10px", autoAlpha: 0, ease: Power2.easeInOut }, "-=0.25");

new ScrollMagic.Scene({
    triggerElement: '.graph2-box',
    offset: -50,
    reverse: false
})
    .setTween(tl2)
    // .addIndicators()
    .addTo(controller);




// Section5
var timeline = $('.s5-timline-block');
for (var i = 0; i < timeline.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: timeline[i], // y value not modified, so we can use element as trigger as well
        offset: -100,												 // start a little later
        reverse: false
    })
        .setClassToggle(timeline[i], "visible") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

// Section6
var s6img = $('.minisite-img img');
for (var i = 0; i < s6img.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
        triggerElement: s6img[i], // y value not modified, so we can use element as trigger as well
        offset: -100,												 // start a little later
        reverse: false
    })
        .setClassToggle(s6img[i], "visible") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

// Section7
var footer = $('.footer-time-block');
var footertween = TweenMax.staggerFrom(footer, 1, { x: '-=40px', autoAlpha: 0 }, 0.5);
var containerScene2 = new ScrollMagic.Scene({
    triggerElement: '.section7',
    offset: -100,
    reverse: false
})

    .setTween(footertween)
    // .addIndicators()
    .addTo(controller);
