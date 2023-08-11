<!-- full width div of browser -->
<div class="main flex-col h-screen {bgClass}" transition:slide={{ delay: 250, duration: 500, easing: quintOut, axis: 'x' }} >
    <!-- center vertically -->
    <div class="flex flex-col justify-center items-center h-full title-bar" >
        <h1 class="md:text-8xl text-center cursive">Jayvee & Victoria</h1>
    </div>
    <!-- button list  -->
    <div class="curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
</div>

<div class="story h-auto">
    <!-- position at bottom of this section -->
    <div class="justify-center pl-4 menu-btns flex  flex-wrap bottom-1/4 gap-10 mb-10">            
        <a href="#" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(0); }}>Home</a>
        <a href="#" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(3); }}>Dress Code</a>
        <a href="#" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(4); }}>RSVP</a>
        <a href="#" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(5); }}>FAQs</a>
    </div>

    {#if selectedContent === 'home'}
    <div transition:scale ={{ delay: 250, duration: 300, easing: cubicInOut, opacity:50 }} >
        <!-- center contents -->
        <div class="p-10 flex flex-col justify-center items-center  text-center">        
            <p>
                <span class="text-6xl pb-3  font-extrabold">
                   November 24, 2023
                </span>
                <br>
                <span class="text-4xl mt-2">
                    Friday
                <br>
                <span class="text-4xl cursive mt-2">
                    Alta Veranda de Tibig, Silang, Cavite
                </span>
                <br>
                  
                <br>
                <span class="text-xl">
                    {computeWeddingDate()}
                </span>
            </p>

            <div>
                <!-- ceremony schedule -->
                <div class="mt-10">
                    <h1 class="text-4xl cursive font-extrabold">Ceremony</h1>
                    <!-- at daisy garden style it cool -->
                    <p class="text-xl">
                        Daisy Garden
                    </p>
                    <p class="text-xl">
                        4:00 PM - 5:00 PM
                    </p>
                </div>
                <!-- reception schedule -->
                <div class="mt-10">
                    <h1 class="text-4xl cursive font-extrabold">Reception</h1>
                    <p class="text-xl">
                        5:00 PM - 10:00 PM
                    </p>
                </div>  

            </div>
        </div>
    </div>
    {/if}
    {#if selectedContent === 'dress-code'}
    <div transition:scale ={{ delay: 250, duration: 300, easing: cubicInOut, opacity:50 }} >
        <Dresscode/>
    </div>
    {/if}
    
    {#if selectedContent === 'rsvp'}
    <div transition:scale ={{ delay: 250, duration: 300, easing: cubicInOut, opacity:50}} >
        <Rsvp/>
    </div>
    {/if}
    
    
    {#if selectedContent === 'faqs'}
    <div transition:scale ={{ delay: 250, duration: 300, easing: cubicInOut, opacity:50}} >
        <div class="p-10 flex flex-col justify-center items-center  text-center">    
            <!-- create layout for wedding faqs numbered list-->
    
            <h1 class="text-5xl font-extrabold">Frequently Asked Questions</h1>
            <ul>
                <li class="text-xl">
                    <span class="font-bold">What is the dress code?</span>
                    <br>
                    <span class="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium nisl ut leo mollis interdum. Donec eu varius sem, sit amet ultrices diam. Curabitur elementum eros ac augue pellentesque, a ornare ligula cursus. Cras eu imperdiet turpis. Praesent cursus nisi a imperdiet accumsan. Nam non lobortis metus. Donec ac neque eget ligula porttitor hendrerit. Cras cursus risus nulla, ac venenatis ante commodo ut. Pellentesque mattis tristique iaculis. Integer risus neque, euismod vel libero eget, eleifend consequat felis. Mauris elit nunc, posuere non volutpat sit amet, placerat quis massa. Aliquam pulvinar laoreet congue. Proin ultricies ipsum ac erat viverra, sagittis pretium lacus aliquet. Aenean eget orci sed magna porta sagittis.
                    </span>
                </li>
    
            </ul>
        </div>
    </div>
    {/if}

</div>



<script lang="ts">
    import './head-content.css';    
    //onmount
    import { onMount } from 'svelte';
    import Rsvp from '../../lib/RSVP.svelte';
    import Dresscode from '../../lib/Dresscode.svelte';
    import { slide } from 'svelte/transition';
	import { scale  } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    let selectedContent = 'home';
    const weddingDate = new Date('November 24, 2023 00:00:00 GMT+08:00');
    const contentList = [
        'home',
        'invitation',
        'location',
        'dress-code',
        'rsvp',
        'faqs'
    ]

    let bgClass = 'image-1';
    let bgList = [
        'image-1',
        'image-2',
        'image-3',
        'image-4',
        'image-5',
        'image-6',
        'image-7',
        'image-8',
        'image-9',
        'image-10',
    ]

    onMount(() => {
        //show content based on hash
        contentList.forEach((content, index) => {
            if (window.location.hash === `#${content}`) {
                viewContentByIndex(index);
            }
        });
        transitionBackgroud();
    });
    
        //set interval to change background bgClass
    function transitionBackgroud() {
        setInterval(() => {
            const index = bgList.indexOf(bgClass);
            if (index === bgList.length - 1) {
                bgClass = bgList[0];
            } else {
                bgClass = bgList[index + 1];
            }
        }, 5000);
    }

    function viewContentByIndex(index: number) {
        selectedContent = contentList[index];
        window.location.hash = `#${selectedContent}`;
        //scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
    }

    // compute duration before nov 24 2023 gm+8
    function computeWeddingDate() {
        const currentDate = new Date();
        const diff = weddingDate.getTime() - currentDate.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));
        const seconds = Math.floor(diff / (1000));
        //format like this 15 DAYS 13 HRS 24 MINS AGO assess if ago or to go
        const go = diff > 0 ? 'TO GO' : 'AGO';
        return `${Math.abs(days)} DAYS ${Math.abs(hours % 24)} HRS ${Math.abs(minutes % 60)} MINS ${go}`;
    }
    
    
</script>