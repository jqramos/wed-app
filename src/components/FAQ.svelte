<script lang="ts">
    import Swiper from 'swiper';
    import { Autoplay, Navigation, Pagination } from 'swiper/modules';
    import '../../node_modules/swiper/swiper.min.css';
  import { onMount } from 'svelte';

    function loadSwiper() {
        const details = document.querySelectorAll('.js-carousel-detail');
        
        const swiper = new Swiper('.swiper', {
            modules: [Autoplay, Navigation, Pagination],
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        swiper.on('slideChange', () => {
            const idx = swiper?.activeIndex ?? 0;

            if (details && details.length > 0) {
                details.forEach((detail) => {(detail as HTMLElement).dataset.activeSlide = 'false';
            });
            (details[idx] as HTMLElement).dataset.activeSlide = 'true';
        }
        });
    }


    onMount(() => {
        // loadSwiper();
    });
    

</script>

<section class="panel js-panel swiper relative overflow-hidden h-screen w-full text-neutral-300 before:lg:absolute before:lg:inset-0 before:lg:h-full before:lg:w-full before:lg:bg-gradient2 before:lg:z-above-ground">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <picture>
                <!-- <source srcset="/static/images/carousel-1.webp" type="image/webp"> -->
                <source srcset="/static/images/carousel-1.jpg" type="image/jpeg">
                <img class="h-full w-auto object-cover object-right-top lg:w-full" src="/static/images/carousel-1.jpg" alt="">
            </picture>
        </div>
        <div class="swiper-slide">
            <picture>
                <!-- <source srcset="/static/images/carousel-2.webp" type="image/webp"> -->
                <source srcset="/static/images/carousel-2.jpg" type="image/jpeg">
                <img class="h-full w-auto object-cover object-right-top lg:w-full" src="/static/images/carousel-2.jpg" alt="">
            </picture>
        </div>
        <div class="swiper-slide">
            <picture>
                <!-- <source srcset="/static/images/carousel-3.webp" type="image/webp"> -->
                <source srcset="/static/images/carousel-3.jpg" type="image/jpeg">
                <img class="h-full w-auto object-cover object-right-top lg:w-full" src="/static/images/carousel-3.jpg" alt="">
            </picture>
        </div>
    </div>
    <div class="absolute h-full w-full inset-0 z-above-ground2">
        <div class="wrapper h-full">
            <div class="col-span-full lg:col-span-7 flex items-center">
                <div class="px-s2 lg:px-s5 py-s8 bg-grey-rgba-700">
                    <h2 class="mb-s4 lg:mb-s max-w-[570px]">
                        <span class="font-serif text-h3 md:text-h2 uppercase">Frequently</span> 
                        <span class="block font-sans text-p2 md:text-h3 text-right text-primary-300 font-light italic -translate-y-[20px] lg:-translate-y-[30px]">asked questions</span>
                    </h2>
                    <div class="min-h-[250px]">
                        <div class="carousel-text js-carousel-detail" data-active-slide="true">
                            <h3 class="text-p1 md:text-p2 mb-s1 text-primary-300">What time should I arrive?</h3>
                            <p class="text-base md:text-p1 font-light">We encourage you to arrive at 3:00-3:30 PM to give you time to settle down and find your seats before the processional starts at 4:00 pm.</p>
                        </div>
                        <div class="carousel-text js-carousel-detail" data-active-slide="false">
                            <h3 class="text-p1 md:text-p2 mb-s1 text-primary-300">Can we take pictures and videos during the wedding ceremony?</h3>
                            <p class="text-base md:text-p1 font-light">Our Ceremony will be unplugged and solemn. Please turn off and keep your phones during the processional and ceremony. You may take photos after we have been pronounced husband and wife.</p>
                        </div>
                        <div class="carousel-text js-carousel-detail" data-active-slide="false">
                            <h3 class="text-p1 md:text-p2 mb-s1 text-primary-300">Can I bring someone with me? (Plus one, date, driver, etc.)</h3>
                            <p class="text-base md:text-p1 font-light">As much as we’d love everyone to join us in our celebration, please refer to your RSVP card for the number of allotted seat/s to your party. Unfortunately, due to budget constraints, we can only accommodate a limited number of guests.
                            </p>
                        </div>
                    </div>
                    <div class="mt-s2">
                        <button class="swiper-button-prev italic hover:text-primary-300">prev</button>
                        <span>/</span>
                        <button class="swiper-button-next italic hover:text-primary-300">next</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<style>
    .carousel-text[data-active-slide="true"] {
        display: block;
    }
    .carousel-text[data-active-slide="false"] {
        display: none;
    }
</style>
