<script lang="ts">
  import { Modals, closeModal } from 'svelte-modals'
  import { fade } from 'svelte/transition'

</script>


<Modals>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    slot="backdrop"
    class="fixed h-screen w-full inset-0"
    transition:fade={{ duration: 300 }}
    on:click={closeModal}
    on:keyup={closeModal}
  />
</Modals>
 

