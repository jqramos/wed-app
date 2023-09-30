<script lang="ts">
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    import faqItems from '../data/faqs.json';

    register();
    let swiperBg, swiperContent;

    const imageList = [
        'carousel-1.jpg',
        'carousel-2.webp',
        'carousel-3.webp',
        'carousel-4.webp',
        'carousel-5.webp',
        'carousel-6.webp',
        'carousel-7.webp',
        'carousel-8.webp',
        'carousel-9.webp',
        'carousel-10.webp',
        'carousel-11.webp',
        'carousel-12.webp',
        'carousel-13.webp',
        'carousel-14.webp',
        'carousel-15.jpg',
    ]



    onMount(() => {
        swiperBg = document.querySelector('.faq-bg');
        swiperContent = document.querySelector('.faq-content');
        swiperBg.swiper.update();
    });

    function slideNext() {
        swiperBg.swiper.slideNext();
        swiperContent.swiper.slideNext();
    };

    function slidePrev() {
        swiperBg.swiper.slidePrev();
        swiperContent.swiper.slidePrev();
    };

    function getFontSize(item) {
        return item?.fontsize ? `[${item?.fontsize}]` : 'p1';
    }
    

</script>

<section class="panel js-panel relative overflow-hidden h-screen w-full text-neutral-300 before:lg:absolute before:lg:inset-0 before:lg:h-full before:lg:w-full before:lg:bg-gradient2 before:lg:z-above-ground">
    <swiper-container class="faq-bg h-screen"
            slides-per-view={1}
            centered-slides={true}
            pagination={false}
            loop={true}
    >
        {#each imageList as image}
            <swiper-slide>
                <picture>
                    <source srcset="https://storage.googleapis.com/craim/wed/{image}">
                    <img class="faq-bg-image" src="/https://storage.googleapis.com/craim/wed/{image}" alt="">
                </picture>
            </swiper-slide>
        {/each}
    </swiper-container>
    <div class="absolute h-full w-full inset-0 z-above-ground2">
        <div class="wrapper h-full">
            <div class="col-span-full lg:col-span-7 flex items-center">
                <div class="px-s2 lg:px-s5 py-s8 bg-grey-rgba-700 lg:max-w-[570px] sm:max-w-full">
                    <h2 class="mb-s4 lg:mb-s">
                        <span class="font-serif text-h3 md:text-h2 uppercase">Frequently</span>
                        <span class="block font-sans text-p2 md:text-h3 text-right text-primary-300 font-light italic -translate-y-[20px] lg:-translate-y-[30px]">asked questions</span>
                    </h2>
                    <div class="min-h-[250px]">
                        <swiper-container class="faq-content"
                                slides-per-view={1}
                                centered-slides={true}
                                loop={true}
                        >
                            {#each faqItems as item}
                                <swiper-slide>
                                    <div class="carousel-text js-carousel-detail">
                                        <h3 class="text-p1 md:text-p2 mb-s1 text-primary-300">{item.question}</h3>
                                        {#if item?.answer}
                                            <p class="text-base md:text-p1 font-light justify-center">{item?.answer}</p>
                                        {/if}
                                        {#if item?.list}
                                            <ul class="list-disc list-inside text-base font-light justify-center md:text-{getFontSize(item)}">
                                                {#each item.list as list}
                                                    <li>{list}</li>
                                                {/each}
                                            </ul>
                                        {/if}
                                    </div>
                                </swiper-slide>
                            {/each}
                        </swiper-container>
                        <div class="mt-s2">
                            <button class="swiper-button-prev italic hover:text-primary-300" on:click={() => slidePrev()} >prev</button>
                            <span>/</span>
                            <button class="swiper-button-next italic hover:text-primary-300" on:click={() => slideNext()} >next</button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
