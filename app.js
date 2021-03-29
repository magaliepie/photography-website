// gsap animation properties
gsap.fromTo('.overlay', { ease: 'elastic' }, { width: '100%', duration: 2 });
gsap.fromTo(
    '.navbar',
    { opacity: 0, y: 20, ease: Expo.easeInOut },
    { delay: 2.5, duration: 1.5, opacity: 1 }
);

gsap.fromTo(
    '.navbar',
    { opacity: 0, y: 20, ease: Expo.easeInOut },
    { delay: 2.5, duration: 1.5, opacity: 1 }
);
gsap.fromTo(
    '.social-item',
    { opacity: 0 },
    { delay: 2.8, opacity: 1, x: 30, duration: 2, ease: Expo.easeInOut }
);
gsap.fromTo(
    '.block-lg h1 .hidetext',
    { y: '100%', opacity: 0 },
    { duration: 1.5, delay: 1.6, y: '0', opacity: 1, ease: Expo.easeInOut }
);
gsap.fromTo(
    '.block-lg p .hidetext',
    { opacity: 0 },
    { duration: 2, delay: 2, opacity: 1, ease: Expo.easeInOut }
);

gsap.fromTo(
    '.block-sm p',
    { y: '100', opacity: 0 },
    { duration: 1.5, delay: 2.3, y: '10', opacity: 1, ease: Expo.easeInOut }
);
gsap.fromTo(
    '.block-sm',
    { opacity: 0 },
    { duration: 1.5, delay: 2.3, opacity: 0.9, ease: Expo.easeInOut }
);

gsap.fromTo(
    '.block-xs',
    { y: '-200', opacity: 0 },
    { duration: 2, delay: 2.7, y: '0', opacity: 1, ease: Expo.easeInOut }
);
