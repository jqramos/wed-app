

<header>
  
</header>

<div class="h-screen w-full">
    <div class="h-screen w-full">
        <HeadContent/>
    </div>
</div>



<script lang="ts">
    import { onMount, setContext } from 'svelte';
    //import css
    import './layout.css';
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