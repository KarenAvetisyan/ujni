// document.addEventListener('DOMContentLoaded', () => {
//     // VARS 
//     const hero = document.getElementById('_ujni_hero');
//     const second = document.getElementById('_ujni_second');
//     const overlay = second.querySelector('._ujni-overlay');
//     const ujni_bg = second.querySelector('._ujni-addresses__bg');

//     // FULL HEIGHT BANNER VIA JS 
//     function setHeroHeight() {
//       const height = window.visualViewport
//         ? window.visualViewport.height
//         : window.innerHeight;

//       hero.style.height = height + 'px';
//       second.style.height = height + 'px';
//     }

//     window.addEventListener('load', () => {
//       requestAnimationFrame(setHeroHeight);
//     });

//     // PARALLAX ON SCROLL 
//     class InertiaScroll {
//       constructor() {
//         this.init();
//       }
//       init() {
//         requestAnimationFrame(() => this.animate());
//       }
//       animate() {
//         const scrollY = window.scrollY;
//         let progress = scrollY / window.innerHeight;
//         progress = Math.min(Math.max(progress, 0), 1);
//         // hero parallax
//         const maxOffset = window.innerHeight * 0.25;
//         const heroOffset = maxOffset * (1 - progress);
//         hero.style.transform = `translate3d(0, ${heroOffset}px, 0)`;
//         hero.style.marginTop = `${-heroOffset}px`;
//         // overlay fade
//         const fadeStart = 0.1;
//         const fadeProgress = Math.min(Math.max((progress - fadeStart) / (1 - fadeStart), 0), 1);
//         overlay.style.opacity = 0.9 * (1 - fadeProgress);
//         const scale = 1.1 - (0.1 * progress);
//         // ujni_bg.style.transform = `scale(${scale})`;
//         ujni_bg.style.transform = `translate3d(-50%, 0, 0) scale(${scale})`;
//         requestAnimationFrame(() => this.animate());
//       }
//       }
//     new InertiaScroll();
      
//     // OBSERVER 
//     const sections = document.querySelectorAll('[data-inviewport]');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-viewport');
//         } else {
//           entry.target.classList.remove('in-viewport');
//         }
//       });
//     }, {
//       root: null,        
//       rootMargin: '0px',
//       threshold: 0.5       
//     });
//     sections.forEach(section => observer.observe(section));

//     // BANNER SCROLL EFFECTS 
//     const banner = hero;
//     let bannerHeight = banner.offsetHeight;
//     let bannerScroll = 0;
//     let bannerActive = false;

//     // Scroll threshold to activate banner
//     const SCROLL_THRESHOLD = bannerHeight / (window.innerWidth < 500 ? 2 : 4);

//     // Check if we are at the top
//     function isAtTop() {
//         return window.scrollY <= 0;
//     }

//     // Update banner classes based on current scroll
//     function updateBannerClasses() {
//         if (bannerScroll >= SCROLL_THRESHOLD) {
//         banner.classList.add('active');
//         banner.classList.remove('pre-active');
//         bannerActive = true;
//         } else if (bannerScroll > 0) {
//         banner.classList.add('pre-active');
//         banner.classList.remove('active');
//         bannerActive = false;
//         } else {
//         banner.classList.remove('active', 'pre-active');
//         bannerActive = false;
//         }
//     }

//     // Wheel scroll
//     window.addEventListener('wheel', (e) => {
//         if (!bannerActive && isAtTop()) {
//         e.preventDefault(); // lock scroll at top
//         bannerScroll += e.deltaY;
//         if (bannerScroll < 0) bannerScroll = 0;
//         updateBannerClasses();
//         }
//     }, { passive: false });

//     // Touch scroll
//     let touchStartY = 0;
//     window.addEventListener('touchstart', (e) => {
//         if (!bannerActive && isAtTop()) touchStartY = e.touches[0].clientY;
//     }, { passive: false });
    
//     window.addEventListener('touchmove', (e) => {
//         if (!bannerActive && isAtTop()) {
//         e.preventDefault();
//         const touchY = e.touches[0].clientY;
//         let delta = touchStartY - touchY;
//         bannerScroll += delta;
//         if (bannerScroll < 0) bannerScroll = 0;
//         touchStartY = touchY;
//         updateBannerClasses();
//         }
//     }, { passive: false });

//     // Scroll listener: unlock banner when scrolling back up
//     window.addEventListener('scroll', () => {
//         // If user scrolls back near top, reset banner
//         if (window.scrollY < 1) {
//         banner.classList.remove('active', 'pre-active');
//         bannerActive = false;
//         bannerScroll = 0;
//         }
//     });

//     const scrollBtn = document.querySelector('.js-scroll-banner');

//     if (scrollBtn) {
//         scrollBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//         // If already active — do nothing
//         if (bannerActive) return;

//         // Simulate initial scroll
//         bannerScroll = SCROLL_THRESHOLD / 2;

//         // Apply pre-active state
//         banner.classList.add('pre-active');
//         banner.classList.remove('active');
//         bannerActive = false;
        
//         });
//     }
    
// });




document.addEventListener('DOMContentLoaded', () => {
    // VARS 
    const hero = document.getElementById('_ujni_hero');
    const second = document.getElementById('_ujni_second');
    const overlay = second.querySelector('._ujni-overlay');
    const ujni_bg = second.querySelector('._ujni-addresses__bg');

    // FULL HEIGHT BANNER VIA JS 
    function setHeroHeight() {
      const height = window.innerHeight;
      hero.style.height = height + 'px';
      second.style.height = height + 'px';
    }

    // Run immediately
    setHeroHeight();

    // Run after full load (fonts/images/UI settled)
    window.addEventListener('load', setHeroHeight);

    // Handle ONLY orientation change
    window.addEventListener('orientationchange', () => {
      // delay is important for iOS recalculation
      setTimeout(setHeroHeight, 150);
    });
    

    // PARALLAX ON SCROLL 
    class InertiaScroll {
      constructor() {
        this.init();
      }
      init() {
        requestAnimationFrame(() => this.animate());
      }
      animate() {
        const scrollY = window.scrollY;
        let progress = scrollY / window.innerHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        // hero parallax
        const maxOffset = window.innerHeight * 0.25;
        const heroOffset = maxOffset * (1 - progress);
        hero.style.transform = `translate3d(0, ${heroOffset}px, 0)`;
        hero.style.marginTop = `${-heroOffset}px`;
        // overlay fade
        const fadeStart = 0.1;
        const fadeProgress = Math.min(Math.max((progress - fadeStart) / (1 - fadeStart), 0), 1);
        overlay.style.opacity = 0.9 * (1 - fadeProgress);
        const scale = 1.1 - (0.1 * progress);
        // ujni_bg.style.transform = `scale(${scale})`;
        ujni_bg.style.transform = `translate3d(-50%, 0, 0) scale(${scale})`;
        requestAnimationFrame(() => this.animate());
      }
      }
    new InertiaScroll();
      
    // OBSERVER 
    const sections = document.querySelectorAll('[data-inviewport]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
        } else {
          entry.target.classList.remove('in-viewport');
        }
      });
    }, {
      root: null,        
      rootMargin: '0px',
      threshold: 0.5       
    });
    sections.forEach(section => observer.observe(section));

    // BANNER SCROLL EFFECTS 
    const banner = hero;
    let bannerHeight = banner.offsetHeight;
    let bannerScroll = 0;
    let bannerActive = false;

    // Scroll threshold to activate banner
    const SCROLL_THRESHOLD = bannerHeight / (window.innerWidth < 500 ? 2 : 4);

    // Check if we are at the top
    function isAtTop() {
        return window.scrollY <= 0;
    }

    // Update banner classes based on current scroll
    function updateBannerClasses() {
        if (bannerScroll >= SCROLL_THRESHOLD) {
        banner.classList.add('active');
        banner.classList.remove('pre-active');
        bannerActive = true;
        } else if (bannerScroll > 0) {
        banner.classList.add('pre-active');
        banner.classList.remove('active');
        bannerActive = false;
        } else {
        banner.classList.remove('active', 'pre-active');
        bannerActive = false;
        }
    }

    // Wheel scroll
    window.addEventListener('wheel', (e) => {
        if (!bannerActive && isAtTop()) {
        e.preventDefault(); // lock scroll at top
        bannerScroll += e.deltaY;
        if (bannerScroll < 0) bannerScroll = 0;
        updateBannerClasses();
        }
    }, { passive: false });

    // Touch scroll
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        if (!bannerActive && isAtTop()) touchStartY = e.touches[0].clientY;
    }, { passive: false });
    
    window.addEventListener('touchmove', (e) => {
        if (!bannerActive && isAtTop()) {
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        let delta = touchStartY - touchY;
        bannerScroll += delta;
        if (bannerScroll < 0) bannerScroll = 0;
        touchStartY = touchY;
        updateBannerClasses();
        }
    }, { passive: false });

    // Scroll listener: unlock banner when scrolling back up
    window.addEventListener('scroll', () => {
        // If user scrolls back near top, reset banner
        if (window.scrollY < 1) {
        banner.classList.remove('active', 'pre-active');
        bannerActive = false;
        bannerScroll = 0;
        }
    });

    const scrollBtn = document.querySelector('.js-scroll-banner');

    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // If already active — do nothing
        if (bannerActive) return;

        // Simulate initial scroll
        bannerScroll = SCROLL_THRESHOLD / 2;

        // Apply pre-active state
        banner.classList.add('pre-active');
        banner.classList.remove('active');
        bannerActive = false;
        
        });
    }
    
});
