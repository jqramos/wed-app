<script>
    import { closeModal } from 'svelte-modals'
  import { slide, fade } from 'svelte/transition'

  
    // provided by <Modals />
    export let isOpen
  
  </script>
  
  {#if isOpen}
    <div role="dialog" class="fixed top-0 right-0 py-s5 bg-neutral-600 h-full w-full lg:w-[50vw] z-above-all" transition:slide|global={{ duration: 300, axis: 'x' }}>
      <div class="relative px-s8 w-full h-full overflow-y-auto">
        <h2 class="font-serif uppercase text-p2 lg:text-h4 text-primary-600 font-semibold mb-s2 lg:mb-s4">Couple's Fun Facts</h2>
        <ul class="list-square">
          <li class="pb-s1 text-base lg:text-p1">Met on a dating app and met personally after a month of talking on 2019</li>
          <li class="pb-s1 text-base lg:text-p1">November 24 is our gf/bf anniversary, It's our 4th official year together on our wedding date</li>
          <li class="pb-s1 text-base lg:text-p1"> First out of town together was on Tagaytay</li>
          <li class="pb-s1 text-base lg:text-p1">Grew up as only girl and only boy in both siblings (both second to the youngest)</li>
          <li class="pb-s1 text-base lg:text-p1">The JVs: Jayvee and Johanne Victoria</li>
          <li class="pb-s1 text-base lg:text-p1">Coffee lovers (can't survive the day without one!)</li>
          <li class="pb-s1 text-base lg:text-p1">Extrovert gf meets introvert bf</li>
          <li class="pb-s1 text-base lg:text-p1">Both share the same food palate</li>
          <li class="pb-s1 text-base lg:text-p1">Both were born on April with 2 years apart</li>
          <li class="pb-s1 text-base lg:text-p1">Jayvee asks Victoria to be her official girlfriend after eating her "Sinigang" meal</li>
          <li class="pb-s1 text-base lg:text-p1">Both are good in Math during their academic years</li>
        </ul>
        <button class="fixed top-s2 right-s2 text-base uppercase" on:click={closeModal}>Close</button>
      </div>
    </div>
  {/if}
