

<header>
    <nav class="nav">
        <!-- make this a round floating menu -->
        <div class="menu" 
            on:click={() => { toggle(); }}>
            <div class="flex">
                <MenuIcon size="24" class="pt-1"/>
                <span class="text-lg pl-3">Menu</span>
            </div>
        </div>
        <!-- show menu on hover of icon -->
        {#if isHovered}
            <Sidebar/>
        {/if}
    </nav>
</header>
<div class="h-screen w-full">
    <HeadContent/>
</div>



<script lang="ts">
    import { onMount, setContext } from 'svelte';
    //import css
    import './layout.css';
    import { MenuIcon} from 'svelte-feather-icons';
    import Sidebar  from '../lib/Sidebar.svelte';
    import HeadContent from './content/HeadContent.svelte';

    let isHovered = false;
    setContext('isHovered', {toggle});
    onMount(() => {
        console.log('mounted');
    });

    function toggle() {
        isHovered = !isHovered;
    }
</script>