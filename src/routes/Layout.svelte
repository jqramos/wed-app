

<header>
    <nav class="flex justify-between items-center">
        <svg class="feather">
            <use href="path/to/dist/feather-sprite.svg#circle"/>
          </svg>
    </nav>
</header>
<div>
    asdasdsad

    <slot></slot>
</div>


<div>
    <footer></footer>
</div>

<script lang="ts">
    import { onMount } from 'svelte';
    //import css
    import './layout.css';

    onMount(() => {
        console.log('mounted');
    });
</script>