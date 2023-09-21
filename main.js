$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 300){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });
    
    $(window).on('scroll load',function(){

        $('#dojo').removeClass('cursor');
        $('#dojo').removeClass('cursor-blur');

        if($(window).scrollTop() > 350){
            $('#for-cursor').addClass('cursor');
        }else{
            $('#for-cursor').removeClass('cursor');
        }

        if($(window).scrollTop() > 350){
            $('#for-cursor-blur').addClass('cursor-blur');
        }else{
            $('#for-cursor-blur').removeClass('cursor-blur');
        }
    });

});

var crsr = document.querySelector("#for-cursor")
var blur = document.querySelector("#for-cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x -250  + "px"
    blur.style.top = dets.y -250 +"px"
});

gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();