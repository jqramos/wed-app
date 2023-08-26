<script lang="ts">
  import Home from './routes/Home.svelte';
  import './app.css';
  import Router, {location} from 'svelte-spa-router';
  import wrap from "svelte-spa-router/wrap";
</script>

<!-- To Do: Update to page routing -->
<Router routes={{
	'/': Home,
	'/reports': wrap({
        asyncComponent: () => import('./routes/Reports.svelte')
    }),
    '*': Home
}} />