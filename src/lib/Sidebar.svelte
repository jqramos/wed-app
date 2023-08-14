<!-- create floating sidebar on left, use tailwind to style it-->
<div transition:slide={{ delay: 250, duration: 500, easing: quintOut, axis: 'x' }} 
class="sidebar md:w-1/4 w-3/4  h-screen  left-0 top-0 z-10">
    <!-- close button -->
    <div class="w-full h-12 flex justify-end items-center p-3">
        <div class="w-fit cursor-pointer" on:click={() => { toggle(); }}>
            <XIcon size="30"/>
        </div>
    </div>
    <div class="w-full h-full flex flex-col justify-center items-start">
        <div class="w-full text-center content-text">
            <a>Home</a>
        </div>
        <div class="w-full my-2  text-center content-text">
            <a>Story</a>
        </div>
        <div class="w-full text-center content-text">
            <a>Venue</a>
        </div>
        <div class="w-full text-center content-text">
            <a>RSVP</a>
        </div>
    </div>
</div>

<script lang="ts">

    
    import { XIcon } from 'svelte-feather-icons';
    import './sidebar.css';
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
</script>


