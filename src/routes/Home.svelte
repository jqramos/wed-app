<script lang="ts">
    import Layout from '../utils/Layout.svelte';
    import Hero from '../components/Hero.svelte';
    import FAQ from '../components/FAQ.svelte';
    import About from '../components/About.svelte';
    import Details from '../components/Details.svelte';
    import Timeline from '../components/Timeline.svelte';
    import RSVP from '../components/RSVP.svelte';
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger.js";
    import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

    window.addEventListener("load", () => {
      //register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // get all panels and dots
      const indicator = document.querySelector(".js-indicator");
      const dots = indicator.querySelectorAll(".js-dot");
      const header = document.querySelector(".js-header");
      let panels = gsap.utils.toArray(".js-panel"),
          observer = ScrollTrigger.normalizeScroll(true),
          scrollTween;


      function goToSection(i) {
        scrollTween = gsap.to(window, {
          scrollTo: {y: i * innerHeight, autoKill: false},
          onStart: () => {
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();
          },
          duration: 1,
          onComplete: () => {
            scrollTween = null
            
            if (i === 0) {
              (header as HTMLElement).style.opacity = '0';
            } else {
              (header as HTMLElement).style.opacity = '1';
            }
          },
          overwrite: true
        });
      }

      function setActiveDot(dot, idx) {
        [...dots].map((dot) => (dot as HTMLElement).dataset.active = 'false');
        (dot as HTMLElement).dataset.active = 'true';
        goToSection(idx);
      }

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top bottom",
          end: "+=199%",
          onToggle: self => {
            if (self.isActive && !scrollTween) {
              goToSection(i)
              setActiveDot(dots[i], i)
            }
          },
        });
      });

      dots.forEach((dot, idx) => {
        dot.addEventListener("click", e => {
          e.preventDefault();
          setActiveDot(dot, idx);
        });
      });

      // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
      ScrollTrigger.create({
        start: 0,
        end: "max",
        snap: 1 / (panels.length - 1)
      })

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
      document.addEventListener("touchstart", e => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }, {capture: true, passive: false})


    })
</script>

<div class="indicator js-indicator fixed bottom-[50%] lg:bottom-[20%] right-[10px] lg:right-[30px] z-above-all flex flex-col gap-s2">
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To Hero"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To About"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To Details"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To FAQ"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To Timeline"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To RSVP"></button>
  <button class="dot js-dot h-[10px] w-[10px] rounded-full bg-white" data-active="false" aria-label="Go To Footer"></button>
</div>

<Layout components={[Hero, About, Details, FAQ, Timeline, RSVP]} />
