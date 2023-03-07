console.log('JS Connected');

gsap.from("#name", {
    scale: 1.2,
    duration: 2,
//    rotate: 180,
    ease: "bounce",
})

gsap.from("#box", {
    duration: 1.5,
    scale: .001,
    rotate: 40,
    x: 1000,
    y: 1000,
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

    