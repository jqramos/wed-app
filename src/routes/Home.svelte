<script>
    import Layout from '../utils/Layout.svelte';
    import Hero from '../components/Hero.svelte';
    import FAQ from '../components/FAQ.svelte';
    import About from '../components/About.svelte';
  import Details from '../components/Details.svelte';
  import RSVP from '../components/RSVP.svelte';
</script>

<Layout components={[Hero, About, Details, FAQ, RSVP]} />
