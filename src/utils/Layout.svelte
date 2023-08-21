<script lang="ts">
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    export let components;
</script>


<Header />

<main>
    {#each components as component}
        <svelte:component this={component} />
    {/each}
</main>

<Footer />

<style>
    @import 'https://use.typekit.net/lag7kyw.css';
</style>



