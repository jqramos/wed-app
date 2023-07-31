<!-- full width div of browser -->
<div class="main flex-col h-screen {bgClass}">
    <!-- center vertically -->
    <div class="flex flex-col justify-center items-center h-full title-bar" >
        <h1 class="md:text-8xl text-center cursive">Jayvee & Victoria</h1>
        <!-- position at bottom of this section -->
        <div class="menu-btns flex flex-wrap absolute bottom-1/4 gap-3">            
            <button class="btn menu-btn" on:click={() => { viewContentByIndex(0); }}>Home</button>
            <button class="btn menu-btn" on:click={() => { viewContentByIndex(3); }}>Dress Code</button>
            <button class="btn menu-btn" on:click={() => { viewContentByIndex(4); }}>RSVP</button>
            <button class="btn menu-btn" on:click={() => { viewContentByIndex(5); }}>FAQs</button>
        </div>
    </div>
    <!-- button list  -->
    <div class="curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
</div>

{#if selectedContent === 'home'}
<div class="story h-auto">
    <!-- center contents -->
    <div class="p-10 flex flex-col justify-center items-center  text-center">        
        <p>
            <span class="text-6xl pb-3 cursive font-extrabold">
                {weddingDate.toDateString()}
            </span>
            <br>
            <br>
            <span class="text-4xl cursive mt-2">
                Alta Veranda de Tibig, Silang, Cavite
            </span>
            <br>
            <span class="text-xl">
                {computeWeddingDate()}
            </span>
        </p>
    </div>
</div>
{/if}

{#if selectedContent === 'rsvp'}
<div class="story h-auto">
    <Rsvp/>
</div>
{/if}

{#if selectedContent === 'dress-code'}
<div class="story h-auto">
    <Dresscode/>
</div>
{/if}

{#if selectedContent === 'faqs'}
<div class="story h-auto">
    <div class="p-10 flex flex-col justify-center items-center  text-center">    
        <!-- create layout for wedding faqs numbered list-->

        <h1 class="text-4xl cursive font-extrabold">Frequently Asked Questions</h1>
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



<script lang="ts">
    import './head-content.css';    
    //onmount
    import { onMount } from 'svelte';
    import Rsvp from '../../lib/RSVP.svelte';
    import Dresscode from '../../lib/Dresscode.svelte';

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

    onMount(() => {
        //show content based on hash
        contentList.forEach((content, index) => {
            if (window.location.hash === `#${content}`) {
                viewContentByIndex(index);
            }
        });
        
    });

    function viewContentByIndex(index: number) {
        selectedContent = contentList[index];
        switch(index) {
            case 0:
                bgClass = 'image-1';
                break;
            case 1:
                bgClass = 'image-2';
                break;
            case 2:
                bgClass = 'image-3';
                break;
            case 3:
                bgClass = 'image-4';
                break;
            case 4:
                bgClass = 'image-2';
                break;
            case 5:
                bgClass = 'image-6';
                break;
        }
        window.location.hash = `#${selectedContent}`;
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