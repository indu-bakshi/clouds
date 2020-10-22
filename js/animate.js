let tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.lamp',
        start:'top bottom',
        
        scrub:1
    }
})


gsap.from("#text",{y:500,opacity:0,duration:3,ease:Back.easeOut.config(1.7)});
tl.to("#text",{y:300,opacity:0.5,duration:3,ease:Power1});
