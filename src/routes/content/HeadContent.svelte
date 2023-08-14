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
    <div class="justify-center px-3 menu-btns flex  flex-wrap bottom-1/4 gap-10 mb-10">            
        <a href="#home" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(0); }}>Home</a>
        <a href="#dress-code" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(2); }}>Travel</a>
        <a href="#dress-code" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(3); }}>Dress Code</a>
        <a href="#rsvp" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(4); }}>RSVP</a>
        <a href="#faqs" class="btn menu-btn text-2xl" on:click={() => { viewContentByIndex(5); }}>FAQs</a>
    </div>

    {#if selectedContent === activeContent.tab}
    
    <div transition:scale ={{ delay: 250, duration: 700, easing: cubicInOut, opacity:50}} >
        <svelte:component this={activeContent.component}/>
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
    import { cubicInOut, quintOut } from 'svelte/easing';
    import Faqs from '../../lib/Faqs.svelte';
    import Location from '../../lib/Location.svelte';
    import Home from '../../lib/Home.svelte';
    let selectedContent = 'home';
    //reactive variable activeContent
    let activeContent =  {
        tab: 'home',
        component: Home
    };
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

        switch (selectedContent) {
            case 'home':
                activeContent = {
                    tab: 'home',
                    component: Home
                }
                break;
            case 'dress-code':
                activeContent = {
                    tab: 'dress-code',
                    component: Dresscode
                }
                break;
            case 'rsvp':
                activeContent = {
                    tab: 'rsvp',
                    component: Rsvp
                }
                break;
            case 'faqs':
                activeContent = {
                    tab: 'faqs',
                    component: Faqs
                }
                break;
            case 'location':
                activeContent = {
                    tab: 'location',
                    component: Location
                }
                break;
            default:
                activeContent = {
                    tab: 'home',
                    component: Home
                }
                break;
        }


        //scroll a little bit
        window.scrollTo(0, 300);
    }


    
    
</script>