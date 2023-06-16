console.log('JS Connected');

gsap.from("#name", {
    scale: 1.2,
    duration: 2,
//    rotate: 180,
    ease: "bounce",
})

gsap.from("#M", {
    duration: 2,
    scale: .001,
    x: 2000,
    y: 1000,
})

gsap.from("#T", {
    duration: 3,
    scale: .001,
    x: 1500,
    y: 1000,
})

gsap.from(".socialicon", {
    x: -500,
    y: 0,
    stagger: {
        each: .5,
        from: 0,
        },
    duration: 1,
   // ease: "bounce", 
})