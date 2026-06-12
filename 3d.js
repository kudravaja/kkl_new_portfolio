if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const bgVideo = document.querySelector("#bgVideo");

if (bgVideo && window.gsap && window.ScrollTrigger) {
  const setupVideoScroll = () => {
    const duration = bgVideo.duration || 8.7;
    const sections = gsap.utils.toArray(".step");

    sections.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        end: "+=1000",
      });

      gsap.fromTo(bgVideo, { currentTime: i }, {
        scrollTrigger: {
          trigger: step,
          start: "top top",
          scrub: 1,
        },
        currentTime: duration * (i + 1),
        ease: "none",
      });
    });

    gsap.to("#bgVideo", {
      scrollTrigger: {
        scrub: true,
      },
      scale: 0.65,
    });
  };

  if (bgVideo.readyState >= 1) {
    setupVideoScroll();
  } else {
    bgVideo.addEventListener("loadedmetadata", setupVideoScroll, { once: true });
  }
}
