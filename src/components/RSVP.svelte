<section class="relative text-neutral-300 bg-grey-600">
    <picture class="hidden lg:block h-screen w-full">
        <!-- <source srcset="/static/images/carousel-1.webp" type="image/webp"> -->
        <source srcset="/static/images/image04.jpg" type="image/jpeg">
        <img class="h-screen w-full object-cover object-right max-w-[50%] ml-auto" src="/static/images/image04.jpg" alt="">
    </picture>
    <div class="lg:absolute lg:top-0 lg:left-0 z-ground w-full h-screen">
        <div class="wrapper h-full">
            <div class="col-start-1 col-span-5 flex flex-col item-center justify-center">
                <h2 class="mb-s4 lg:mb-s max-w-[337px]">
                    <span class="font-serif text-h3 lg:text-h2 uppercase">Respond,</span> 
                    <span class="block font-sans text-p2 lg:text-h3 text-right text-secondary-400 font-light italic -translate-y-[20px] lg:-translate-y-[30px]">if you please</span>
                </h2>
                <p class="text-p1">
                    If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
                </p>
                <div class="relative text-primary-600 mt-s4">
                    {#if !isSubmitted}
                    <Svelecte
                        {resetOnBlur}
                        {fetchResetOnBlur}
                        bind:value={guests}
                        valueAsObject
                        on:change={(e) => {
                        eligiblePlusOne(e);
                        }}
                        minQuery={3}
                        placeholder="Search for your name"
                        fetch={async (search) => {
                        const records = await searchRecords(search);
                        return records;
                        }}
                        labelField="guest_name"
                        class="w-full"
                    ></Svelecte>

                        <!-- show message asking if going or not -->
                        {#if selectedGuest && !isGoing}
                        <div class="w-full mt-s2" transition:fade={{ delay: 250, duration: 250, easing: quintOut}}>
                            <p class="text-p1">Are you going to attend the wedding?</p>
                            <div class="mt-2 flex flex-col">
                            <!-- buttons to anser -->
                            <button on:click={() => isGoing = true} class=" my-s1 bg-secondary-600 text-white font-bold py-s1">
                                Surely!
                            </button>
                            <button on:click={() => sendNo()} class="my-s1 bg-neutral-800 text-white font-bold py-s1">
                                I can't make it
                            </button>
                            </div>
                        </div>
                        {/if}
                    {/if}
            </div>
        </div>
    </div>
</section>

<script lang="ts">
    import { scale } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
      import {  fade  } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import PocketBase from 'pocketbase'
    const pb = new PocketBase('/');
    import Svelecte from 'svelecte';
    import { onMount } from 'svelte';
    let guests = [];
    let guestPlusOne;
    let selectedGuest = "";
    let selectedGuestNo = 0;
    let isGoing = false;
    let isSubmitted = false;
  
    //make guestPlusOne reactive
    $: guestPlusOne;
  
    onMount(async () => {
      //get in localstorage if user already submitted
      let submitted = localStorage.getItem('submitted');
      let going = localStorage.getItem('isGoing');
      if (submitted == 'true') {
        isSubmitted = true;
      }
      if (going == 'true') {
        isGoing = true;
      }
    });
  
  
    let resetOnBlur = true;
    let fetchResetOnBlur = true;
    
    //call api once on load
    async function searchRecords(search) {
        // list and filter "example" collection records
      const records = await pb.collection('guests').getList(1, 10, {
        sort: '-guest_name',
        filter: `isFamily = false && guest_name~"${search}" && response != "No"`
      });
      return records.items;
    }
  
    function eligiblePlusOne(e) {   
      selectedGuest = e.detail;
      //if null set isGoing to false
      if (selectedGuest == null) {
        isGoing = false;
        selectedGuestNo = 0;
        return;
      }
      guestPlusOne = selectedGuest?.guest_no ? selectedGuest?.guest_no : 0;
    }
  
  
    async function submit() {
      let guestNames = [];
      //iterate to selectedGuestNo
      for (let i = 0; i < selectedGuestNo; i++) {
        //get guest name
        const name = document.getElementById(`grid-guests-name-${i}`).value;
        guestNames.push(name);
      }
  
      //create object to be sent to api
      const data = {
        guest_name: selectedGuest?.guest_name,
        added_guest: JSON.stringify(guestNames),
        response: "Yes"
      }
  
      //call api
      localStorage.setItem('isGoing', 'true');
      const record = sendData(data);
      return record;
    }
  
  
    async function sendData(data) {
      isSubmitted = true;
      localStorage.setItem('submitted', 'true');
      return await pb.collection('guests').update(selectedGuest?.id, data);
    }
  
    async function sendNo() {
      isGoing = false;
      const data = {
        guest_name: selectedGuest?.guest_name,
        response: "No"
      }
      localStorage.setItem('isGoing', 'false');
  
      //call api
      const record = sendData(data);
      return record;
    }
    

</script>
