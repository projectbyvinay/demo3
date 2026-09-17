gsap.registerPlugin(ScrollTrigger);

const loader = document.querySelector(".loader");
gsap.to(loader,{yPercent:-100,duration:1.1,ease:"power4.inOut",delay:.5});

const intro = gsap.timeline({defaults:{ease:"power4.out"}});
intro.from(".nav",{y:-30,opacity:0,duration:.8,delay:1.0})
  .from(".hero .eyebrow",{y:25,opacity:0,duration:.7},"-=.35")
  .from(".hero h1",{y:100,opacity:0,duration:1.1},"-=.5")
  .from(".intro",{y:30,opacity:0,duration:.7},"-=.6")
  .from(".btn",{y:25,opacity:0,duration:.6},"-=.4")
  .from(".hero-image",{scale:1.2,opacity:0,duration:1.4},"-=1");

gsap.to(".hero-image",{yPercent:15,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});

gsap.from(".statement h2",{y:120,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:".statement",start:"top 70%",toggleActions:"play none none reverse"}});

gsap.to(".parallax-image",{yPercent:18,ease:"none",scrollTrigger:{trigger:".parallax-section",start:"top bottom",end:"bottom top",scrub:1.5}});
gsap.from(".parallax-card",{x:-100,opacity:0,scrollTrigger:{trigger:".parallax-card",start:"top 85%",end:"top 55%",scrub:1}});

gsap.from(".section-head > *",{y:60,opacity:0,duration:1,stagger:.15,scrollTrigger:{trigger:".menu",start:"top 75%"}});

gsap.from(".menu-card",{y:90,opacity:0,duration:1,stagger:.18,ease:"power3.out",scrollTrigger:{trigger:".menu-grid",start:"top 78%"}});

gsap.from(".reveal-photo",{clipPath:"inset(0 100% 0 0)",duration:1.4,ease:"power4.inOut",scrollTrigger:{trigger:".reveal-section",start:"top 70%"}});

gsap.from(".reveal-inner",{yPercent:12,scale:1.12,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".reveal-photo",start:"top 80%",end:"bottom 30%",scrub:1}});

gsap.from(".reveal-copy > *",{x:70,opacity:0,duration:.9,stagger:.12,scrollTrigger:{trigger:".reveal-copy",start:"top 70%"}});

gsap.from(".contact > *",{y:70,opacity:0,duration:1,stagger:.12,scrollTrigger:{trigger:".contact",start:"top 70%"}});