const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom+=200% top",
      scrub: true,
      pin: true
    }
  });

  tl.to(video, {
    currentTime: video.duration,
    ease: "none"
  });
});

// const video = document.getElementById('video');

// video.addEventListener('loadedmetadata', () => {
//   const duration = video.duration;
//   gsap.registerPlugin(ScrollTrigger);

//   let playProgress = { t: 0 };

//   gsap.to(playProgress, {
//     t: 1,
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.container',
//       start: 'top top',
//       end: 'bottom+=200% top',
//       scrub: 0.5, // تأثير أنعم من 0
//       pin: true,
//     },
//     onUpdate: () => {
//       const target = playProgress.t * duration;
//       if (Math.abs(video.currentTime - target) > 0.025) {
//         video.currentTime = target;
//       }
//     },
//   });
// });