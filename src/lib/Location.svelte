

<div transition:scale ={{ delay: 250, duration: 700, easing: cubicInOut, opacity:50}} >
    <div class="p-10 flex flex-col justify-center items-center  text-center">    

        <h1 class="text-5xl font-extrabold">Travel</h1>
    </div>

</div>

<script lang="ts">
    import { scale } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
</script>
