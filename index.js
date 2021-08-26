// Scroll Magic!!!


// passing options
var controller = new ScrollMagic.Controller();


// Pin the scene!!
let pinnedScene = new ScrollMagic.Scene({
    triggerElement: '.main',
    triggerHook: 0,
}).setPin('.main');

// Add the pinnedScene to the controller
pinnedScene.addTo(controller);

$('.project').each(function() {
    // with a newly created scene.
    console.log(this);
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
    });

    scene.setClassToggle(this, 'fade-in');
    scene.addTo(controller);
})

let video = document.getElementById("vid-background");

// Check for dimensions to be resized
$(window).resize(function() {
    //resize just happened, pixels changed
    video.style.width = window.innerWidth + "px";
    video.style.height = window.innerHeight + "px";
    video.style.objectFit = "cover";
});