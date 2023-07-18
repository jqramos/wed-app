

<header>
    <nav class="">
        <div class="menu">
            <a href="/" on:click={toggle}>
                <MenuIcon size="40" />
            </a>
        </div>
        <!-- show menu on hover of icon -->
        {#if isHovered}
        <div class="menu-list columns-12">
            <div class="w-full text-left">
                <a href="/">Home</a>
            </div>
            <div class="w-full text-left">
                <a href="/about">About</a>
            </div>
            <div class="w-full text-left">
                <a href="/contact">Contact</a>
            </div>
        </div>
        {/if}
    </nav>
</header>
<div>
    <slot></slot>
</div>


<div>
    <footer></footer>
</div>

<script lang="ts">
    import { onMount } from 'svelte';
    //import css
    import './layout.css';
    import { MenuIcon} from 'svelte-feather-icons';

    let isHovered = false;
    onMount(() => {
        console.log('mounted');
    });

    function toggle() {
        isHovered = !isHovered;
        alert('clicked');
    }
</script>